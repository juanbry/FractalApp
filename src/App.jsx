import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyOrders from './MyOrders';
import AddEditOrder from './AddEditOrder';

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (orders.length === 0) {
      setOrders([
        {
          id: 1564543,
          name: 'Chocolate',
          quantity: 21,
          price: 8.5,
          status: 'Pendiente'
        },
        {
          id: 25425723,
          name: 'Leche Gloria',
          quantity: 65,
          price: 5.5,
          status: 'Pendiente'
        },
        {
          id: 3573753,
          name: 'Avena 3 Ositos', 
          quantity: 39,
          price: 2.5,
          status: 'Pendiente'
        }
      ]);
    }
  }, [orders]);
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyOrders orders={orders} setOrders={setOrders} />} />
        <Route path="/add" element={<AddEditOrder orders={orders} setOrders={setOrders} />} />
        <Route path="/edit/:id" element={<AddEditOrder orders={orders} setOrders={setOrders} />} />
      </Routes>
    </Router>
  );
}

export default App;
