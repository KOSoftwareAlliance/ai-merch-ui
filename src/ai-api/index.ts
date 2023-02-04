const PATH = 'http://51.38.133.100:8000';

export const uploadToFlaskServer = async (imageFormData: FormData) => {
  const result = await fetch(`${PATH}/generate`, { method: 'POST', body: imageFormData });
  const image = await result.blob().then((blob) => URL.createObjectURL(blob));
  return image
}