import { useEffect, useState } from "react";
import { Header, Footer } from "./components/index.js";
import authService from "./appwrite/auth.js";
// import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
function App() {
  const [loading, setLoading] = useState(false);
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
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400 justify-center">
      <div className="w-full block">
        <Header />
        <main>{/* TODO:  <Outlet /> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
