import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function Shop() {
  const [items, setItems] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://covid-shop-mcs.herokuapp.com/");
        const data = await response.json();
        if (data) {
          setItems(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!items) {
    return null;
  }

  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          desc={item.desc}
          image={item.image}
        />
      ))}
    </div>
  );
}
