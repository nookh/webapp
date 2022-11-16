import React, { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";
import "../ProductList/ProductList.css";

const products = [
  { id: 1, title: "Джинсы", price: 5000, description: "Чёрные джинсы Polo" },
  { id: 2, title: "Куртка", price: 8000, description: "Кожаная, с подкладом" },
  {
    id: 3,
    title: "Клатч",
    price: 12000,
    description: "Синий клатч Louis Vuitton",
  },
  {
    id: 4,
    title: "Ботинки",
    price: 15000,
    description: "Чёрные ботинки Dr Martens",
  },
  {
    id: 5,
    title: "Очки",
    price: 5500,
    description: "Ray Ban белые, солнцезащитные",
  },
  { id: 6, title: "Шапка", price: 3000, description: "Зимняя, меховая" },
];

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  });
};
const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg } = useTelegram();
  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];
    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    }
  };
  return (
    <div className={"list"}>
      {products.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className={"item"} />
      ))}
    </div>
  );
};

export default ProductList;
