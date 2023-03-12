import React from "react";

const CartItem = (props) => {

    const {name, price, qty} = props.product;
    const {
        product,
        onInscreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct,
    } = props;
    return (

        <div>
            <div className='cart'>
                <div className="SingleCart">
                    <div className="carts">
                        <img src={product.img} className='mainImage' />
                        <h1>{name}</h1>
                        <span><h4>Quantity: {qty}</h4></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="price">
                            <h2>Price: {price}</h2>
                            <img
                                alt="increase"
                                className="action-icons"
                                src="https://img.icons8.com/ios-glyphs/256/plus-2-math.png"
                                onClick={()=> onInscreaseQuantity(product)}
                            />
                            <img
                                alt="decrease"
                                className="action-icons"
                                src="https://img.icons8.com/material-rounded/256/minus-sign.png"
                                onClick={() => onDecreaseQuantity(product)}
                            />
                            <img
                                alt="delete"
                                className="action-icons"
                                src="https://img.icons8.com/ios-filled/256/delete.png"
                                onClick={() => onDeleteProduct(product.id)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;