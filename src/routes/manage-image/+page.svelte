<script lang="ts">
	import { page } from "$app/stores";

  let imageUrl: string;
  page.subscribe(({url}) => {
    imageUrl = url.search.split('?')[1];
  })
</script>

<div class="grid grid-cols-4 w-100 gap-3">
  <img src={imageUrl} alt="Uploaded" class="col-span-3 rounded-lg" />
  <div class="flex flex-col justify-around h-100">
    <div class="border rounded-sm p-1 h-full text-center">
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