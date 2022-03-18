import logo from './logo.svg';
import './App.css';
const products =[
  {name:"Laptop", price:"76000"},
  {name:"Phone", price:"25000"},
  {name:"Watch", price:"12000"},
  {name:"Tab", price:"28000"}

]
function App() {
  return (
    <div className="App">
      {
        products.map(product=> <Product name={product.name} price={product.price} ></Product>)
      }
      {/* <Product name="Laptop" price="75000"></Product>
      <Product name="Phone" price="20000"></Product>
      <Product name="Watch" price="12000"></Product> */}
    </div>
  );
}
function Product(props){
  return(
    <div className="product">
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price} </p>
    </div>
  )
}

export default App;
