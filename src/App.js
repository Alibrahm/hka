import Home from "./pages/home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Customerprofile from "./pages/customerlog/Customerprofile";
import PaymentHistory from "./pages/payments/PaymentHistory";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>}/>
            <Route path="customer/:id">
              <Route index element={< Customerprofile/>}/>
              <Route path="payments"  element={<PaymentHistory/>}></Route>
            </Route>
          </Route> 
        
        </Routes>
    </BrowserRouter></>
  );
}

export default App;
