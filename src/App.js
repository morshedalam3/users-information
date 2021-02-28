import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import information from './fake data/data.json';
import User from './components/Users/User';
import Cart from './components/Users/cart/Cart';

function App() {
  const [user, setUser] = useState([])
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setUser(information)
  },[])
  const addFriend = (user) =>{
      const newCart = [...cart, user]
      setCart(newCart)
  }
  return (
    <div className="App">
        <h1>Friend Loaded: {user.length}</h1>
        <h4>Total Friend:{cart.length}</h4>
        <Cart cart={cart}></Cart>
        <ul>
          {
            user.map(user => <User user={user} addFriend={addFriend}></User>)
          }
        </ul>
    </div>
  );
}

export default App;
