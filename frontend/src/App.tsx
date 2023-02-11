import NavBar from "./scenes/navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store, { persistor }from "./redux/store"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import FooterPage from "./scenes/footer";
import { PokemonProvider} from "./context/ProductsProvider"
import React, { Suspense } from "react";
function App() {
  const HomePage = React.lazy(() => import('./scenes/homePage'))
  const ShopPage = React.lazy(() => import('./scenes/shopPage'))
  const LoginPage = React.lazy(() => import('./scenes/loginPage'))
  const CardPage = React.lazy(() => import('./scenes/shopCard'))

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={true}>
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
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
