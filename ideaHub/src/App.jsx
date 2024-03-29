import { useEffect, useState } from "react";
import { Header, Footer } from "./components/index.js";
import authService from "./appwrite/auth.js";
import { login, logout } from "./store/authSlice.js";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-700 justify-center">
      <div className="w-full block">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
