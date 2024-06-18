import React, { useMemo } from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Memoize the subcategories query string
  const subCatsQuery = useMemo(
    () =>
      subCats
        .map((item) => `&[filters][subcategories][id][$eq]=${item}`)
        .join(""),
    [subCats]
  );

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCatsQuery}`
  );

  if (loading) return <div className="list">Loading...</div>;
  if (error) return <div className="list">Error loading data</div>;

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
