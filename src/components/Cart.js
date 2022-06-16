import { observer } from "mobx-react-lite";
import productStore from "../Data/productStore";

//ABOUT
export const Cart = observer(() => {
    const clickForChoose = (i) => {
        productStore.AddToCart(i)
    }
    return(
        <>  
            {productStore.products.map(item => (
                <div  onClick={() => clickForChoose(item)} className="product productToCart">
                    {item.name} : {item.price}
                </div>
            ))}
        </>
    )
});