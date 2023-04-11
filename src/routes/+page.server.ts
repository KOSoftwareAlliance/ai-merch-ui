/** @type {import('./$types').Actions} */
import { AI_API } from '$env/static/private';
import { createPresignedUrlWithClient, getObjectUrl } from '$lib/server/s3Helpers';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const storageUrl = await createPresignedUrlWithClient();
  return {
    storageUrl
  };
}
/** @type {import('./$types').Actions} */
export const actions = {
	upload: async ({request}) => {
    const formData = await request.formData();
    const url = formData.get('storageUrl') as string;
    const image = formData.get('image') as File;
    const prompt = formData.get('prompt') as string;

    const fetchResponse = await fetch(url as unknown as URL, { method: 'PUT', body: image });
    const imageId = fetchResponse.url.split('ai-merch-')[1].split('.jpg')[0];
    const getUrl = await getObjectUrl(imageId);
    const generateFormData = new FormData();
    generateFormData.append('image', getUrl);
    generateFormData.append('prompt', prompt);
    return await fetch(`${AI_API}/generate`, { method: "POST", body: generateFormData }).then((res) => {
      // if(res.status === 200){
      //   return {
      //     getUrl,
      //   }
      // } else {
      //   return fail(400, { message: "We normalnie to zrób" })
      // }
      return { getUrl }
    }).catch(() => {
      return fail(500, { message: "Coś poszło nie tak" })
    })
  },
};