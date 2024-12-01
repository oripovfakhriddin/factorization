import { Fragment, useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import AdminLayoutPage from "./components/layout/admin";
import AdminDashboardPage from "./pages/admin/dashboard";
import { AuthContext } from "./context/auth";
import PageNotFound from "./pages/page-not-found";
import PolardRhoPage from "./pages/admin/polard-rho";
import KvadratQoldiqPage from "./pages/admin/kvadrat-qoldiq";
import FermaPage from "./pages/admin/ferma";

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
            <Route path="polard-rho" element={<PolardRhoPage />} />
            <Route path="kvadrat-qoldiq" element={<KvadratQoldiqPage />} />
            <Route path="ferma" element={<FermaPage />} />
            {/* <Route path="accounts" element={<AdminAccountPage />} /> */}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
