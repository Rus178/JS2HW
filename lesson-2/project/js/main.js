"use strict";

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
        this.getSum();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, source: 'notebook.jpg' },
            { id: 2, title: 'Mouse', price: 20, source: 'mouse.jpg' },
            { id: 3, title: 'Keyboard', price: 200, source: 'keyboard.jpg' },
            { id: 4, title: 'Gamepad', price: 50, source: 'gamepad.jpg' },
        ];
    }

    getSum() {
        // let sumPrice = 0;
        // this.goods.forEach(el => {
        //     sumPrice += el.price;
        // });
        let sumPrice = this.goods.reduce((s, item) => s + item.price, 0);
        console.log(sumPrice);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.source = product.source;
    }

    render() {
        return `<div class="product-item">
                <img src="./img/${this.source}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Cart {
    render() { }
    addGood() { }
    removeGood() { }
}

class CartGoods {
    constructor(id, title, price, count) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.count = count;
    }

    getSum() { }
    render() { }
}

let list = new ProductList();
// const products = [
//     { id: 1, title: 'Notebook', price: 2000, source: 'notebook.jpg' },
//     { id: 2, title: 'Mouse', price: 20, source: 'mouse.jpg' },
//     { id: 3, title: 'Keyboard', price: 200, source: 'keyboard.jpg' },
//     { id: 4, title: 'Gamepad', price: 50, source: 'gamepad.jpg' },
// ];
// //Функция для формирования верстки каждого товара
// //Добавить в выводе изображение
// const renderProduct = (item) => {
//     return `<div class="product-item">
//                 <img src="img/${item.source}" alt="product">
//                 <h3>${item.title}</h3>
//                 <p>${item.price}</p>
//                 <button class="buy-btn">Добавить</button>
//             </div>`
// };
// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item));
//     console.log(productsList);
//     //При присваивании массива свойству .innerHTML, у него автоматически 
//     //вызывается метод .toString, который эквивалентен вызову метода .join(',').
//     //Таким образом, если разделители не нужны, необходимо вызвать .join явно, 
//     //передав ему в качества параметра пустую строку
//     document.querySelector('.products').innerHTML = productsList.join('');
// };

// renderPage(products);