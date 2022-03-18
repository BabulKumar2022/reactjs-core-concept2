import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// const products =[
//   {name:"Laptop", price:"76000"},
//   {name:"Phone", price:"25000"},
//   {name:"Watch", price:"12000"},
//   {name:"Tab", price:"28000"}

// ]
// function App() {
//   return (
//     <div className="App">
//       {
//         products.map(product=> <Product name={product.name} price={product.price} ></Product>)
//       }
//       {/* <Product name="Laptop" price="75000"></Product>
//       <Product name="Phone" price="20000"></Product>
//       <Product name="Watch" price="12000"></Product> */}
//     </div>
//   );
// }
// function Product(props){
//   return(
//     <div className="product">
//       <h3>Name: {props.name} </h3>
//       <p>Price: {props.price} </p>
//     </div>
//   )
// }

function App(){
  return(
    <div className="App">
      <Counter></Counter>
      <ExtranalUser></ExtranalUser>
    </div>
  )
}
function ExtranalUser(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
     fetch('http://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data))
  }, []); 
  return(
    <div className="">
      <h2>Extranal User</h2> 
      <p>{users.length} </p>
      {
        users.map(user => <User name={user.name} email={user.email}></User> )
      }
    </div>
  )
}
function User(props){
  return(
    <div className='user-style'>
      <h3>Name:{props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}



function Counter(){
  const [count, setCount] = useState(0);
 
 const increaseCount = () =>{setCount(count + 1);}
 const decreaseCount = () =>{setCount(count - 1);}
 
  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return(
    <div className="">
      <h1>Count: {count} </h1>
      <button onClick={increaseCount }>Increase</button>
      <button onClick={decreaseCount }>Decrease</button>
    </div>
  )
}
export default App;
