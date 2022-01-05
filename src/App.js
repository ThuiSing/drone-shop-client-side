import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import CartProvider from "./Components/Context/CartProvider";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import AddProduct from "./Components/Pages/AdminDashboard/AddProduct/AddProduct";
import AdminDashboard from "./Components/Pages/AdminDashboard/AdminDashboard";
import MakeAdmin from "./Components/Pages/AdminDashboard/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Components/Pages/AdminDashboard/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Components/Pages/AdminDashboard/ManageProducts/ManageProducts";
import UpdateProduct from "./Components/Pages/AdminDashboard/ManageProducts/UpdateProduct/UpdateProduct";
import AdminRoute from "./Components/Pages/AdminRoute/AdminRoute";
import Cart from "./Components/Pages/Cart/Cart";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import UserOrders from "./Components/Pages/Dashboard/UserOrders/UserOrders";
import UserReview from "./Components/Pages/Dashboard/UserReview/UserReview";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import PrivateRoute from "./Components/Pages/PrivateRoute/PrivateRoute";
import Purchase from "./Components/Pages/Purchase/Purchase";
import Explore from "./Components/Pages/Shared/Explore/Explore";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore showAll={true} />} />
              <Route path="/explore" element={<Explore showAll={true} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              >
                <Route
                  path="/dashboard"
                  element={
                    <h3 className="text-2xl">
                      Payment System is Coming soon ....
                    </h3>
                  }
                />
                <Route path="my-orders" element={<UserOrders />} />
                <Route path="review" element={<UserReview />} />
              </Route>
              <Route
                path="/admin-dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              >
                <Route path="/admin-dashboard" element={<ManageAllOrders />} />
                <Route path="add-product" element={<AddProduct />} />
                <Route path="make-admin" element={<MakeAdmin />} />
                <Route path="manage-products" element={<ManageProducts />} />
                <Route path="manage-products/:id" element={<UpdateProduct />} />
              </Route>
              <Route
                path="/purchase/:id"
                element={
                  <PrivateRoute>
                    <Purchase />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
