import { AWS_ACCESS_KEY_ID, AWS_REGION, AWS_SECRET_ACCESS_KEY, S3_BUCKET_NAME } from "$env/static/private";
import AWS from "aws-sdk";
import { randomUUID } from 'crypto';

export const createPresignedUrlWithClient = async () => {
  AWS.config.update({ credentials: { accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY }, region: AWS_REGION });
  const s3 = new AWS.S3();
  const key = `ai-merch-${randomUUID()}.jpg`
  const command = ({ Bucket: S3_BUCKET_NAME, Key: key, Expires: 3600 });
  return s3.getSignedUrl('putObject', command);
};

export const getObjectUrl = async (imageID: string) => {
  AWS.config.update({ credentials: { accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY }, region: AWS_REGION });
  const s3 = new AWS.S3();
  const key = `ai-merch-${imageID}.jpg`
  const command = ({ Bucket: S3_BUCKET_NAME, Key: key, Expires: 3600 });
  return s3.getSignedUrl('getObject', command);
}