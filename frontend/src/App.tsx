import NavBar from "./scenes/navbar"
import HomePage from "./scenes/homePage"
import LoginPage from "./scenes/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store, { persistor }from "./redux/store"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import ShopPage from './scenes/shopPage'
import FooterPage from "./scenes/footer";
import CardPage from "./scenes/shopCard";
import { PokemonProvider} from "./context/ProductsProvider"
function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PokemonProvider>
          <NavBar />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/home" element={<HomePage />}/>
              <Route path="/shop" element={<ShopPage />}/>
              <Route path="/card" element={<CardPage />}/>
              <Route path="/contact" element={<HomePage />}/>
              <Route path="/login" element={<LoginPage />}/>
            </Routes>
          </Router>
          <FooterPage />
        </PokemonProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
