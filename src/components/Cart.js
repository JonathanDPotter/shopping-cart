import { items } from "./items.json";

const Cart = (props) => {
  const itemsArray = [];
  for (const [key, value] of Object.entries(props.itemsInCart)) {
    itemsArray.push([key, value]);
  }


  return (
    <div className="cart">
      {itemsArray.map((item) => {
        const [currItem] = items.filter(
          (obj) => obj.itemNumber === parseInt(item[0])
        );
        return (
          <div className="cart-item" key={currItem.itemNumber}>
            <h1>{currItem.name}</h1>
            <p>{item[1]}</p>
            <button>remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
