import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (amount, item) => {
        const product = { cantidad: amount, ...item }

        if (isInCart(product.id)) {
            addAmount(product)
            // console.log('ese producto ya esta')
        } else {
            setCart([...cart, product])
        }

    }

    const deleteToCart = (id) => {
        const filteredProds = cart.filter(prod => prod.id !== id)
        setCart(filteredProds)
    }

    const deleteAllToCart = () => setCart([])

    const isInCart = id => cart.some(prod => prod.id === id)

    const addAmount = (prod) => {
        const uptdatedCart = cart.map(prodInCart => {
            if(prodInCart.id === prod.id) {
                const updatedProduct = {
                    ...prodInCart,
                    cantidad: prodInCart.cantidad + prod.cantidad
                }
                return updatedProduct;
            } else {
                return prodInCart;
            }
        })
        setCart(uptdatedCart)
    }

    const cartItemCounter = () => {
        let acc = 0;
        cart.map(prod => acc += prod.cantidad)
        return acc;
    }

    const totalPrice = () => {
        let acc = 0;
        cart.map(prod => acc += prod.cantidad * prod.precio)
        return acc;
    }

    const subtractQuantity = (id) => {
        const updatedCart = cart.map(prod => {
            if ((prod.id === id && prod.cantidad > 1)) {
                const updatedProduct = {
                    ...prod, cantidad: prod.cantidad - 1
                }
                return updatedProduct;
            } else {
                return prod;
            }
        })
        setCart(updatedCart)
    }

    const addQuantity = (id) => {
        const updatedCart = cart.map(prod => {
            if((prod.id === id && prod.cantidad < prod.stock)) {
                const updatedProduct = {
                    ...prod, cantidad: prod.cantidad + 1
                }
                return updatedProduct;
            } else {
                return prod;
            }
        })
        setCart(updatedCart)
    }
    
    return (
        <CartContext.Provider value={{cart, addToCart, deleteToCart, deleteAllToCart, cartItemCounter, totalPrice, subtractQuantity, addQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider