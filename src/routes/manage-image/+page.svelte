<script lang="ts">
	import { page } from "$app/stores";
	import { Button, Modal, Input, Label, ButtonGroup, Carousel } from "flowbite-svelte";
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { enhance, type SubmitFunction } from "$app/forms";

  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category_id: number;
  }

  interface PageData {
    products: Product[]
  }

  let openDialog: boolean = false;
  let imageUrl: string;
  let isLoading: boolean;

  page.subscribe(({ url }) => {
    imageUrl = url.search.split('?getUrl=')[1];
  })

  /** @type {import('./$types').PageData} */  
  export let data: PageData;

  const { products } = data;
</script>

<div class="flex flex-col items-center">
  <img src={imageUrl} alt="Uploaded" class="col-span-3 rounded-lg mb-3" />
    
  <Carousel images={products} />
  <div class="flex flex-row justify-between">
    <div>Twitter</div>
    <div>Facebook</div>
    <div>Instagram</div>
  </div>
</div>
<Modal title="Zamów i zapłać" bind:open={openDialog} class="m-0 w-full" >
  <div class="h-[300px] flex items-center justify-center">
    <!-- <SC.Canvas >
      <SC.Mesh geometry={new THREE.BoxGeometry()} />
      <SC.PerspectiveCamera position={[1, 1, 3]} />
    </SC.Canvas> -->
    Product visualization
  </div>
  <form method="POST" id="orderForm" action="/manage-image">
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
    <Button type="submit" form="orderForm">Zamów i zapłać</Button>
  </svelte:fragment>
</Modal>

<style lang="scss">
</style>