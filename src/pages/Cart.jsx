import SiteImages from "../assets/images"
import { useState, useEffect } from "react";

import { CartItemsList } from "../components/CartItemsList";


let cartProductSample = {
    img: 'https://4lapy.ru/resize/480x480/upload/iblock/f8c/f8caa0042eed1704f03260bfd21a9488.jpg',
    name: 'Товар №1',
    price: 100
}



export function Cart ({
    cart = [cartProductSample]
}) {
    


    let isCartEmpty = false;
    const [cartStatus, setCartStatus] = useState(isCartEmpty);
    let page;

    let cartPriceSummary = 0;
    
    function countPriceSummary() {
        cartPriceSummary = 0;
        for(let i =0; i< cart.length; i++) {
            cartPriceSummary += cart[i].price;
        }
    }
    let cartCountSummary = 0;
    function countSummary() {
        cartCountSummary = 0;
        for(let i =0; i< cart.length; i++) {
            cartCountSummary++;
        }
    }
    countPriceSummary();
    countSummary();


    if (isCartEmpty) page = <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="empty-cart">
            <img src={SiteImages['icon_emptyCart']} style={{ width: '80px', height: '80px', opacity: 0.4 }}></img>
            <h2>В корзине нет товаров</h2>
            <p style={{ opacity: 0.4 }}>Добавьте товар, нажав кнопку "В корзину" в карточке товара</p>
            <button className="button-cart__link-to-cart">На главную</button>
        </div>
    </div>
    else page = <div className="filled-cart">
        <h2>Количество товаров в корзине: 1</h2>
        <div className="cart-product-section__2columns">
            <CartItemsList cartList={cart}/>
            <div className="c__section2">
                <div className="cart-section-summary">
                    <ul>
                        <li className="characteristics2">
                            <div>Ваша корзина</div>
                            <div></div>
                        </li>
                        <li className="characteristics2">
                            <div>Товары({cartCountSummary})</div>
                            <div>{cartPriceSummary} ₽</div>
                        </li>
                        <li className="characteristics2">
                            <div>Скидка</div>
                            <div><span style={{color:'red'}}>0 ₽</span></div>
                        </li>
                        <li><hr></hr></li>
                        <li className="characteristics2">
                            <div>Общая стоимость</div>
                            <div>{cartPriceSummary} ₽</div>
                        </li>
                    </ul>
                    <button className="button-cart__link-to-cart">Оформить заказ</button>
                </div>
                <div className="product-page__info01">
                    <img src={SiteImages['icon_delivery']} className="product-page__info01__icon"></img>
                    <div>
                        <h3>Доставка по всему миру!</h3>
                        <p>Доставка курьером — <span style={{ fontWeight: 700 }}>от 399₽</span></p>
                        <p>Доставка в пункт выдачи — <span style={{ fontWeight: 700 }}>от 199₽</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    return (
        <div className="mainWrapper">
            {page}
        </div>
    )
}

/* function CartActive() {
    return <><h1>В корзине есть товары</h1></>
}
function CartDisabled() {
    return <><h1>В корзине пусто</h1></>
} */