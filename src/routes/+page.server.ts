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
	upload: async ({ request }) => {
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
    const response = fetch(`${AI_API}/generate`, { method: "POST", body: generateFormData }).then(async res => {
      console.log(res)
      const reader = await res.body?.getReader();
      const stream = await new ReadableStream({
        start(controller) {
          return pump();
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          function pump() {
            return reader?.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              controller.enqueue(value);
              return pump();
            });
          }
        },
      });
      const response = await new Response(stream)
      const image = await response.blob();
      if(image){
        return {
          image,
        }
      } else {
        return fail(400, { message: "We normalnie to zrób" })
      }
    }).catch((err) => {
      console.log(err)
      return fail(500, { message: "Coś poszło nie tak" })
    });
    console.log(response);
    return response;
  },
};