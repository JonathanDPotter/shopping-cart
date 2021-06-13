import { items } from "./items.json";

const itemNumbers = items.map((obj) => obj.itemNumber);

const Cart = (props) => {
  return (
    <div className="cart">
      <h1>This is the Cart</h1>
      <span></span>
    </div>
  );
};

export default Cart;
