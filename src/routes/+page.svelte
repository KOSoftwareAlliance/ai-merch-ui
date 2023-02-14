<script lang="ts">
  import { Dropzone, Button, Spinner } from 'flowbite-svelte'
	import { uploadToFlaskServer } from '../ai-api';

  let files: FileList;
  let imageUrl: string;
  let isLoading: boolean;

  const handleUpload = async () => {
    isLoading = true;
    const formData = new FormData();
    formData.append('imagefile', files[0]);
    uploadToFlaskServer(formData).then((url) => {
      imageUrl = url;
      isLoading = false;
    });
  };
</script>

<form class="flex flex-col items-center">
  <Dropzone id='dropzone' class="border-0" bind:files>
    {#if !files}
      <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Wybierz zdjęcie</span> lub przeciągnij je tutaj</p>
    {:else}
      <img src={URL.createObjectURL(files[0])} alt="Selected" class="w-full h-auto rounded-lg" />
    {/if}
  </Dropzone>

  <Button pill type="submit" class="w-36 mt-3 h-36 mx-auto mb-4" on:click={handleUpload}>Wyślij zdjęcie</Button>

  {#if !imageUrl && isLoading}
    <Spinner />
  {:else if imageUrl && !isLoading}
    <div class="grid grid-cols-2 grid-rows-2 gap-2">
      {#each [1, 2, 3, 4] as image (image)}
        <a href="/manage-image?{imageUrl}">
          <img src={imageUrl} alt="Uploaded" class="cursor-pointer" />
        </a>
      {/each} 
    </div>
  {/if }
</form>

<style lang="scss">

</style>
