import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import UsersPage from "./components/UsersPage";
import ResponsePage from "./components/ResponsePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="responses" element={<ResponsePage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
