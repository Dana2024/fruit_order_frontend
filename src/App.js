import React from 'react';
import './App.css';
import OrderForm from './components/OrderForm';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Order Your Favorite Fruit</h1>
        <OrderForm />
      </div>
    );
  }
}

export default App;
