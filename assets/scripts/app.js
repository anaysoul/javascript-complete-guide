const productList = {
  products: [
    {
      title: 'Pillow',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/ad/Pillows_on_a_hotel_bed.jpg',
      price: 19.99,
      description: 'Soft pillows!',
    },
    {
      title: 'Carpet',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/c/cd/Polonaise_carpet_-_Kashan_%28Iran%29_-_17th_century_-_MET_-_Inventory_number_51.197.jpg',
      price: 89.99,
      description: 'A historic carpet!',
    },
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div>
            <img src="${prod.imageUrl}" alt="${prod.title}" >
            <div>
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
            </div>
          </div>
          `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
