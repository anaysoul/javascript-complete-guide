class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('Adding product to cart');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <p>${this.product.description}</p>
              <h3>\$${this.product.price}</h3>
              <button>Add to Cart</button>
          </div>
        </div>
        `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'Pillow',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Pillows_on_a_hotel_bed.jpg',
      'Soft pillows!',
      19.99
    ),
    new Product(
      'Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/Polonaise_carpet_-_Kashan_%28Iran%29_-_17th_century_-_MET_-_Inventory_number_51.197.jpg',
      'A historic carpet!',
      89.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
