import { useState, useEffect, useContext } from "react";
import "./TemplatePage.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../component/contexts";

export const TemplatePage = ({ prodType = [], title, titleClass }) => {
  const [cart, setCart] = useContext(CartContext);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAddToCart = (item) => {
    if (cart.find((prod) => prod.id === item.id)) {
      console.log("Product is already in the cart");
      return;
    }

    setLoading(item.id);
    setTimeout(() => setLoading(null), 3000);

    setCart((prevCart) => [
      ...prevCart,
      {
        id: item.id,
        image: item.image,
        name: item.name,
        price: item.price,
        price_id: item.price_id,
      },
    ]);
  };

  return (
    <div className="page_wrapper">
      <h1 className={`title ${titleClass || ""}`}>{title}</h1>
      <div className="gridWrapper">
        {prodType.map((prod) => {
          const isLoading = loading === prod.id;
          const isInCart = cart.find((item) => item.id === prod.id);
          return (
            <div key={prod.id} className="product_item">
              <Link to={`/product/${prod.id}/${prod.name}`}>
                <div className="prodImg_container">
                  <div
                    className="product_img"
                    style={{
                      backgroundImage: `url(${prod.image})`,
                    }}
                  ></div>
                </div>
              </Link>

              <div className="product_info">
                <h3>{prod.name}</h3>
                <p className="ratingValue">
                  <span className="fa fa-star checked"></span> {prod.rating}
                </p>
                <span className="prodInfoText">{prod.info}</span>
              </div>

              <div className="product_paymentInfo">
                {prod.onSale ? (
                  <div>
                    <s>Price: ${prod.price}</s>
                    <p>Sale Price: ${prod.salePrice}</p>
                  </div>
                ) : (
                  <p>Price: ${prod.price}</p>
                )}
                <button
                  className="addCartButton"
                  disabled={isLoading || isInCart}
                  onClick={() => handleAddToCart(prod)}
                >
                  {isLoading ? (
                    <i className="fa fa-spinner fa-spin"></i>
                  ) : isInCart ? (
                    <span>Added to cart</span>
                  ) : (
                    <span>Add to Cart</span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
