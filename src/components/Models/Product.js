class ProductItem {
  constructor(imageUrl,title,price,quantity,description,size,id,testimony) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.quantity = quantity;
    this.size = size;
    this.price = price;
    this.isSoldOut = false;
    this.id = id;
    this.testimony = testimony
  }
}
export default ProductItem;
