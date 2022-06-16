import productStore from "../Data/productStore";
export const Home = () => {
    const handleClick = () => {

    }
    const clickForChoose = (i) => {
        productStore.AddToCart(i)
    }
    return(
        <>
            <div className="buttons">
                <button>Fruits</button>
                <button>Vegetables</button>
                <button>Sweets</button>
                <button>Meat Products</button>
                <button>Milk Products</button>
                <button>Flour products</button>
            </div>
            <div className="wrapper">
                <section id='steezy'>
                        {productStore.products.map((item, key) => (
                        <div onClick={() => clickForChoose(item)} key={key} className="product">
                            <img src={item.img} alt="" />
                            {item.name} : {item.price}
                        </div>
                    ))}
                </section>
            </div>    
        </>
    )
};