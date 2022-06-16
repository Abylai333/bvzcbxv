import {observer} from 'mobx-react-lite';
import productStore from "../Data/productStore";
//CART
export const Product = observer( () => {
    //to get id
    var res = 0
    productStore.cart.map(item => (res += item.price))
    return(
        <>
            <section id='steezy'>
                <div className="ItemsInCart">
                    {productStore.cart.map(item => (
                        <div className="product">                    
                            {item.name} : {item.price}
                        </div>
                    ))}      
                </div>
            </section>
            <div className="Price">
                <h3>{productStore.cart.length} товаров на сумму {res}</h3>
                <hr />
                <button>Оплатить</button>
            </div>
            
        </>
    )
})