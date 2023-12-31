import './App.css';
import {Outlet} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Outlet></Outlet>
    </AuthContextProvider>
  );
}

export default App;
