<script lang="ts">
  import { Fileupload, Button } from 'flowbite-svelte'

  let files: FileList;

  const handleSubmit = () => {
    console.log('upload')
  }
</script>

<form on:submit={handleSubmit} class="upload-image">
  <Fileupload name=image type='file' placeholder='Pick you image' inputClass="!p-0" bind:files />
  <Button type="submit" class="w-48 -ml-3">Wyślij zdjęcie</Button>
</form>

<style lang="scss">
  .upload-image{
    display: flex;
  }
</style>
