import React from 'react'

const CartItem = ({ product, changeQuantity }) => {

    return (
        <div className="cart-item">
            <img src={product.url} alt='cart-item' className="cart-item-image" />
            <div>
                <div>
                    <p className="item-title">{product.name}</p>
                    <span className="cart-item-price">$ {product.price}</span>
                </div>
                <div>
                    <p className="item-quantity">Quantity: <span>{product.quantity}</span></p>
                    <div>
                        <button className="quantity-btn" onClick={() => changeQuantity}>-</button>
                        <button className="quantity-btn" onClick={() => changeQuantity}>+</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItem