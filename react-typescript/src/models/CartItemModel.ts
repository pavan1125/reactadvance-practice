class CartItems{
      title:string;
      price:number;
      id:number;
      quantity:number;

      constructor(title:string, price:number,id:number,quantity:number) {
           this.title = title;
           this.price = price;
           this.id = id;
           this.quantity = quantity;
      }

}

export default CartItems;