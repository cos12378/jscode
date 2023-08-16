
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import MyRoutes from './routes/MyRoutes';

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState("Signup")
  return (
    <div className="App">
      <MyRoutes></MyRoutes>
    </div>
  );
}

export default App;
