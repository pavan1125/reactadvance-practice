class productModel{
     id:number;
     price:number;
     description:string;
     image:string;
     category:string;

     constructor(id:number,price:number,description:string,image:string,category:string) {
              this.id = id;
              this.price = price;
              this.description = description;
              this.image = image;
              this.category = category;

     }
     
     
}

export default productModel