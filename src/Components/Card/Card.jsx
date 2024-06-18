import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = React.memo(({ item }) => {
  const mainImgUrl = useMemo(
    () =>
      `${process.env.REACT_APP_UPLOAD_URL}${item.attributes.img.data.attributes.url}`,
    [item]
  );

  const secondImgUrl = useMemo(
    () =>
      `${process.env.REACT_APP_UPLOAD_URL}${item.attributes.img2.data.attributes.url}`,
    [item]
  );

  return (
    <div className="card">
      <Link className="link" to={`/product/${item.id}`}>
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img src={mainImgUrl} alt="cardImg1" className="mainImg" />
          <img src={secondImgUrl} alt="cardImg2" className="secondImg" />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </Link>
    </div>
  );
});

export default Card;
