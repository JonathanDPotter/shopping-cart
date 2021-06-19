import { items } from "./items.json";

const Items = (props) => {
  return (
    <div className="items">
      {items.map((obj) => {
        return (
          <div className="item" key={obj.itemNumber}>
            <div className="image-name">
              <img src={obj.image} alt="tool set" />
              <h1>${obj.price / 100}</h1>
              <h2>
                {obj.brand} {obj.name}
              </h2>
            </div>
            <p>item# {obj.itemNumber}</p>
            <ul>
              <li>{obj.description[0]}</li>
              <li>{obj.description[1]}</li>
              <li>{obj.description[2]}</li>
            </ul>
            <form id="qty" data-vin={obj.itemNumber} data-price={obj.price}>
              <label htmlFor="quantity">qty</label>
              <input
                type="number"
                name="quantity"
                id="quantity-input"
                defaultValue="1"
                min="1"
                max="10"
              />
              <button type="submit" onClick={props.addToCart}>
                add to cart
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
