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
          <div
            className="cart-item"
            key={currItem.itemNumber}
            data-vin={currItem.itemNumber}
            data-price={currItem.price}
          >
            <img src={currItem.image} alt="tool set" />
            <h1>{currItem.name}</h1>
            <p>${currItem.price}</p>
            <div className="icon-box" data-type="decrement" onClick={props.changeCart}>
              <svg className="fas fa-caret-left"></svg>
            </div>
            <span>{item[1]}</span>
            <div className="icon-box" data-type="increment" onClick={props.changeCart}>
              <svg className="fas fa-caret-right"></svg>
            </div>
            <div className="icon-box" data-type="remove" onClick={props.changeCart}>
              <svg className="fas fa-times"></svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
