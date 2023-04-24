import { Product } from "$lib/server/db/dbInit";
import type { RequestEvent } from "./$types";
 
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    products: (await Product.findAll()).map(c => JSON.parse(JSON.stringify(c)))
  };
}

// /** @type {import('./$types').Actions} */
// export const actions = {
//   getProducts: async (event: RequestEvent) => {
    
//   }
// };