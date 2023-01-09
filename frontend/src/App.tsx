import NavBar from "./scenes/navbar"
import HomePage from "./scenes/homePage"
import LoginPage from "./scenes/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store, { persistor }from "./redux/store"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import ShopPage from './scenes/shopPage'
import FooterPage from "./scenes/footer";
import CardPage from "./scenes/shopCard.tsx";
function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/shop" element={<ShopPage />}></Route>
            <Route path="/card" element={<CardPage />}></Route>
            <Route path="/contact" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        </Router>
        <FooterPage />
      </PersistGate>
    </Provider>
  );
}

export default App;
