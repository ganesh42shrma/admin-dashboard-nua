import Login from "./components/auth/login/index.jsx";
import Register from "./components/auth/register/index.jsx";

import Header from "./components/auth/header/index.jsx";
import Footer from "./components/Footer/footer.js";
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import DataTable from "./components/dashboard Home/DataTable.js";


function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <DataTable />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
    <Header />
    <div className="w-full h-screen flex flex-col">
      {routesElement}
    </div>
    <Footer /> {/* Include the Footer component here */}
  </AuthProvider>
  );
}

export default App;
