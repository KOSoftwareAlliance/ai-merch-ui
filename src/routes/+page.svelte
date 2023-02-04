<script lang="ts">
  import { Fileupload, Button, Spinner } from 'flowbite-svelte'
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

<form class="upload-image">
  <Fileupload name=image type='file' placeholder='Pick you image' inputClass="!p-0" bind:files />
  <Button type="submit" class="w-36 mt-3 mx-auto" on:click={handleUpload}>Wyślij zdjęcie</Button>
  {#if !imageUrl && isLoading}
    <Spinner />
  {/if }
  {#if imageUrl}
    <img src={imageUrl} alt="Uploaded" />
  {/if }
</form>

<style lang="scss">
  .upload-image{
    display: flex;
    flex-direction: column;
  }
</style>
