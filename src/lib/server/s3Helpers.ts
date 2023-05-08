import { KEY_ID, REGION, SECRET_KEY, S3_BUCKET_NAME } from "$env/static/private";
import AWS from "aws-sdk";
import { randomUUID } from 'crypto';

export const createPresignedUrlWithClient = async () => {
  AWS.config.update({ credentials: { accessKeyId: KEY_ID, secretAccessKey: SECRET_KEY }, region: REGION });
  const s3 = new AWS.S3();
  const key = `ai-merch-${randomUUID()}.jpg`
  const command = ({ Bucket: S3_BUCKET_NAME, Key: key, Expires: 3600 });
  return s3.getSignedUrl('putObject', command);
};

export const getObjectUrl = async (imageID: string) => {
  AWS.config.update({ credentials: { accessKeyId: KEY_ID, secretAccessKey: SECRET_KEY }, region: REGION });
  const s3 = new AWS.S3();
  const key = `ai-merch-${imageID}.jpg`
  const command = ({ Bucket: S3_BUCKET_NAME, Key: key, Expires: 3600 });
  return s3.getSignedUrl('getObject', command);
}