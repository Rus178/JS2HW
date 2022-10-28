const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>`
    }
}

class BasketProductsList {
    constructor(container = '.basket-products') {
        this.container = container;
        this.basketGoodsObj = {};
        this._getBasket()
            .then(data => {
                this.basketGoodsObj = data;
                this.render()
            });
    }

    _getBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.basketGoodsObj.contents) {
            const productObj = new BasketProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}
class BasketProductItem extends ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150', quantity) {
        super(product, img = 'https://via.placeholder.com/200x150');
        this.quantity = product.quantity;
    }

    render() {
        return `<div class="basket-product-item" data-id="${this.id}">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} $</p>
                        <p>Количество: ${this.quantity}</p>
                        <button class="buy-btn">Удалить</button>
                    </div>
                </div>`
    }
}

let list = new ProductsList();
let listBasket = new BasketProductsList();

