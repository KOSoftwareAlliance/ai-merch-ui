<script lang="ts">
	import { page } from "$app/stores";
	import { Button, Modal, Input, Label } from "flowbite-svelte";
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';

  let openDialog: boolean = false;
  let imageUrl: string;
  page.subscribe(({url}) => {
    imageUrl = url.search.split('?')[1];
  })
</script>

<div class="flex flex-col">
  <div class="grid grid-cols-4 w-100 gap-3 mb-24">
    <img src={imageUrl} alt="Uploaded" class="col-span-3 rounded-lg" />
    <div class="flex flex-col justify-around h-100">
      <div on:mouseup={() => openDialog = true} class="border rounded-sm p-1 h-full text-center">
        pr1
      </div>
      <div class="border rounded-sm p-1 h-full text-center">
        pr2
      </div>
      <div class="border rounded-sm p-1 h-full text-center">
        pr3
      </div>
    </div>
  </div>
  <div class="flex flex-row justify-between">
    <div>Twitter</div>
    <div>Facebook</div>
    <div>Instagram</div>
  </div>
</div>
<Modal title="Choose your product" bind:open={openDialog} class="m-0 w-full" >
  <div class="h-[300px] flex items-center justify-center">
    <!-- <SC.Canvas >
      <SC.Mesh geometry={new THREE.BoxGeometry()} />
      <SC.PerspectiveCamera position={[1, 1, 3]} />
    </SC.Canvas> -->
    Product visualization
  </div>
  <form>
    <div class="mb-4">
      <Label>Imie</Label>
      <Input />
    </div>
    <div class="mb-4">
      <Label>Nazwisko</Label>
      <Input />
    </div>
    <div class="mb-4">
      <Label>Email</Label>
      <Input />
    </div>
    <div class="mb-4">
      <Label>Ulica i numer domu</Label>
      <Input />
    </div>
    <div class="mb-4">
      <Label>Miasto</Label>
      <Input />
    </div>
    <div class="mb-4">
      <Label>Kod pocztowy</Label>
      <Input />
    </div>
  </form>
  <svelte:fragment slot='footer'>
    <Button on:click={() => alert('Handle "success"')}>Zamów i zapłać</Button>
  </svelte:fragment>
</Modal>

<style lang="scss">
</style>