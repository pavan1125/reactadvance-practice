class cartModel{
      items:object [];
      totalPrice:number;

      constructor(items:object [],totalPrice:number){
         this.items = items;
         this.totalPrice = totalPrice;
      }
}

export default cartModel