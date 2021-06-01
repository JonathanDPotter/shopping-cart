import { items } from "./items.json";


const Items = (props) => {
  return items.map((obj) => {
    return (
      <div>
        <img src={obj.image} alt="tool set" />
        <h1>{obj.price }</h1>
        <h2>
          {obj.brand} {obj.name}
        </h2>
        <p>item# {obj.itemNumber}</p>
        <ul>
          <li>{obj.description[0]}</li>
          <li>{obj.description[1]}</li>
          <li>{obj.description[2]}</li>
        </ul>
      </div>
    );
  })
}

export default Items;