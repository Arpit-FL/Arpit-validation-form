import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SuccessPage from "./Components/SuccessPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
