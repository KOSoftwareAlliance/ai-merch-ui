import type { RequestEvent } from "./$types";

export interface Cup {
  color: '',
}

export interface Shirt {
  color: '',
  size: ''
}

export interface Frame {
  color: '',
  size: ''
}

export type ProductDetails = Cup | Shirt | Frame

export interface Address {
  street: string,
  building_number: number,
  flat_number?: number,
  city: string,
  postal_code: string,
}

export interface Buyer {
  email: string,
  first_name: string,
  surname: string,
  phone_number?: string
}

export interface Order {
  product_type: 'shirt' | 'cup' | 'picture',
  product_details: ProductDetails,
  amount: number,
  price: number,
  address: Address,
  buyer: Buyer
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event: RequestEvent) => {
    // TODO: Move to ENV vars
    // const DB_URL = '127.0.0.1:5432';
    // const P24_URL = 'https://sandbox.przelewy24.pl/api/v1';

    // fetch(`${P24_URL}/transaction/register`, { method: 'POST', headers: { "Content-Type": "application/json", "Authorization": "Basic password" },  body: JSON.stringify({
    //   merchantId: 1,
    //   posId: 1,
    //   sessionId: 'asd',
    //   amount: 20,
    //   currency: 'PLN',
    //   description: 'tshirt',
    //   email: 'email@test.test'
    // }) })
    const orderData = 
    console.log(event)
  }
};