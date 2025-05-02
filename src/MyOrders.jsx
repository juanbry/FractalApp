import { useNavigate } from "react-router-dom";
import "./App.css";

const MyOrders = ({ orders, setOrders }) => {
  const navigate = useNavigate();

  const handleDelete = (id, status) => {
    if (status === "Completed") return;
    const confirmDelete = window.confirm("¿Seguro de eliminar esta orden?");
    if (confirmDelete) {
      setOrders(orders.filter(order => order.id !== id));
    }
  };

  return (
    <div className="container">
      <h2>Mis Ordenes Fractal</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre del Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Precio Total</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>${order.price}</td>
                <td>${order.quantity * order.price}</td>
                <td>{order.status}</td> {}
                <td>
                  <button 
                    onClick={() => navigate(`/edit/${order.id}`)} 
                    disabled={order.status === "Completed"}
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => handleDelete(order.id, order.status)} 
                    disabled={order.status === "Completed"}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-button" onClick={() => navigate("/add")}>
        Añadir nueva orden
      </button>
      <footer style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.9rem", color: "#666" }}>
        Desarrollado por Juan Carranza
      </footer>
    </div>
  );
};

export default MyOrders;
