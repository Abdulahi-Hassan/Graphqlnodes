import UserCreate from "./components/CreateUser";
import { Route, Routes } from "react-router-dom";
import UserUpdate from "./components/UpdateUser";
import User from "./components/User";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/createuser" element={<UserCreate />} />
        <Route path="/updateuser/:id" element={<UserUpdate />} />
        <Route path="/user" element={<User />} />
        <Route
          path="*"
          element={
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              Not found
            </h1>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}
export default App;
