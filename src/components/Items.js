import { items } from "./items.json";

const Items = (props) => {
  return (
    <div className="items">
      {items.map((obj) => {
        return (
          <div className="item" key={obj.itemNumber} data-vin={obj.itemNumber}>
            <div className="image-name">
              <img src={obj.image} alt="tool set" />
              <h1>${obj.price}</h1>
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
            <button onClick={props.addToCart}>
              add to cart <i className="fas fa-cart-plus"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
