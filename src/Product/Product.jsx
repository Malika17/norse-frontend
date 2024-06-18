import React, { useState, useMemo, useCallback } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { addToCart } from "../redux/cartReducer";
import { useDispatch } from "react-redux";

const Product = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const handleQuantityDecrease = useCallback(() => {
    setQuantity((prev) => (prev === 0 ? 0 : prev - 1));
  }, []);

  const handleQuantityIncrease = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const handleAddToCart = useCallback(() => {
    if (quantity > 0) {
      dispatch(
        addToCart({
          id: data.id,
          title: data.attributes.title,
          desc: data.attributes.desc,
          price: data.attributes.price,
          img: data.attributes.img.data.attributes.url,
          quantity,
        })
      );
    }
  }, [dispatch, data, quantity]);

  const imgUrl = useMemo(() => {
    if (!data) return "";
    return `${process.env.REACT_APP_UPLOAD_URL}${data?.attributes[selectedImg]?.data?.attributes?.url}`;
  }, [data, selectedImg]);

  if (loading) return <div className="product">Loading...</div>;
  if (error) return <div className="product">Error loading product</div>;

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img?.data?.attributes?.url}`}
            alt="product_img1"
            onClick={() => setSelectedImg("img")}
          />
          <img
            src={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img2?.data?.attributes?.url}`}
            alt="product_img2"
            onClick={() => setSelectedImg("img2")}
          />
        </div>
        <div className="mainImg">
          <img src={imgUrl} alt="selected_product_img" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">${data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button onClick={handleQuantityDecrease}>-</button>
          {quantity}
          <button onClick={handleQuantityIncrease}>+</button>
        </div>
        <button className="add" onClick={handleAddToCart}>
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="link">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
