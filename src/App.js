import "./style.scss";
import Items from "./components/Items.js";

function App() {
  const addToCart = (event) => {
    const target = event.target.parentNode;
    console.log(target.dataset.vin);
  }
  return <Items className="items" addToCart={addToCart}/>;
}

export default App;
