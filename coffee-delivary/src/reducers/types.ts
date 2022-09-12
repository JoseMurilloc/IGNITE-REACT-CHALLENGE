export interface Coffee {
  types: string[]
  title: string;
  description: string;
  price: number; 
  image: string;
}

export interface CartState {
  coffees: Coffee[]
}
