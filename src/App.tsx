import { Fragment, useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import AdminLayoutPage from "./components/layout/admin";
import AdminDashboardPage from "./pages/admin/dashboard";
import AdminAccountPage from "./pages/admin/account";
import { AuthContext } from "./context/auth";
import PageNotFound from "./pages/page-not-found";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to={"/admin"} />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path="/admin"
            element={
              isAuthenticated ? <AdminLayoutPage /> : <Navigate to="/login" />
            }
          >
            <Route index element={<AdminDashboardPage />} />
            <Route path="accounts" element={<AdminAccountPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
