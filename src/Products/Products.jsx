import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../Components/List/List";
import useFetch from "../hooks/useFetch";
import "./Products.scss";
import sectionImg from "./sectionImg.jpg";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data } = useFetch(
    `/subcategories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <img className="catImg" src={sectionImg} alt="" />
        <List catId={catId} subCats={selectedSubCats} />
      </div>
    </div>
  );
};

export default Products;
