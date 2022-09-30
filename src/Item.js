import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { name, desc, image } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div>
      <img src={image} alt={name} />
      <div className="ml-2.5">
        <h2 className="text-3xl">{name}</h2>
        <p>{desc}</p>
      </div>
      <div className="mb-12 flex items-center">
        <button
          className="bg-white text-black border-2 border-lightGray py-1 px-5 min-w-[50] text-base rounded cursor-pointer mx-2
          transition-opacity duration-200 ease-out shadow-[1px_1px_1px_rgba(0,0,0,0.2)]
          active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px hover:opacity-80
          disabled:opacity-40 disabled:cursor-not-allowed"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="text-base">{total ? total : ""}</h3>
        <button className="bg-white text-black border-2 border-lightGray py-1 px-5 min-w-[50] text-base rounded cursor-pointer mx-2
          transition-opacity duration-200 ease-out shadow-[1px_1px_1px_rgba(0,0,0,0.2)]
          active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px hover:opacity-80
          disabled:opacity-40 disabled:cursor-not-allowed" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
