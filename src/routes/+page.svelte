<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';

  interface PageData {
    storageUrl: string;
  }

  // interface UploadData {
  //   isLoading: boolean;
  //   error: unknown
  // }

  import { Dropzone, Button, Spinner, Textarea, Alert } from 'flowbite-svelte'

  /** @type {import('./$types').PageData} */
  export let data: PageData;

  let files: FileList;
  let isLoading: boolean;
  let imageUrl: string;
  let error: string;

  const handleSubmit: SubmitFunction = () => {
    isLoading = true;
    
    return async ({ result }) => {
      if(result.type !== 'success'){
        // @ts-ignore
        error = result?.data.message;
      }
      // @ts-ignore
      imageUrl = result.data?.getUrl as string;
      isLoading = false;
    }
  }
  const { storageUrl } = data;
</script>

<form class="flex flex-col items-center" method="POST" action="?/upload" use:enhance={handleSubmit}>
  <Dropzone id='dropzone' class="border-0! border-none mb-3" accept="image/jpeg image/png" name="image" bind:files>
    {#if !files}
      <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Wybierz zdjęcie</span> lub przeciągnij je tutaj</p>
    {:else}
      <img src={URL.createObjectURL(files[0])} alt="Selected" class="w-full h-auto rounded-lg" />
    {/if}
  </Dropzone>
  <Textarea type="text" name="prompt" placeholder="Opisz jak powinno wyglądać twoje zdjęcie" />
  <input type="hidden" name="storageUrl" value={storageUrl} />
  <Button pill type="submit" class="w-36 mt-3 h-36 mx-auto mb-4">Wyślij zdjęcie</Button>

  {#if isLoading}
    <Spinner />
  {:else if !isLoading && imageUrl}
    <div class="grid grid-cols-2 grid-rows-2 gap-2">
      {#each [1, 2, 3, 4] as image (image)}
        <a href="/manage-image?getUrl={imageUrl}">
          <img src={imageUrl} alt="Uploaded" class="cursor-pointer" />
        </a>
      {/each} 
    </div>
  {/if }
</form>
{#if error}
  <Alert dismissable color="red">{error}</Alert>
{/if}

<style lang="scss">

</style>
