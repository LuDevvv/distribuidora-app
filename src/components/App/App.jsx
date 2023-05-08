import { Link , Route , Routes } from "react-router-dom";
import { Home } from "../Home/Home.jsx";
import { Login } from "../Login/Login.jsx";
import { Bill } from "../Bill/Bill.jsx";
import { Category } from "../Category/Category.jsx";
import { Inventory } from "../Inventory/Inventory.jsx";
import { SalesHistory } from "../SalesHistory/SalesHistory.jsx";

export function App() {
  return (
    <main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/category" element={<Category />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sales-history" element={<SalesHistory />} />
      </Routes>

      <nav>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/bill'>Bill</Link></li>
          <li><Link to='/category'>Category</Link></li>
          <li><Link to='/inventory'>Inventory</Link></li>
          <li><Link to='/sales-history'>Sales History</Link></li>
        </ul>
      </nav>
    </main>
  )
}
