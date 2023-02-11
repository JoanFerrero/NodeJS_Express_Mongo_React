import NavBar from "./pages/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store, { persistor }from "./redux/store"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import FooterPage from "./pages/footer";
import { PokemonProvider} from "./context/ProductsProvider"
import React, { Suspense } from "react";
function App() {
  const HomePage = React.lazy(() => import('./pages/homePage'))
  const ShopPage = React.lazy(() => import('./pages/shopPage'))
  const LoginPage = React.lazy(() => import('./pages/loginPage'))
  const CardPage = React.lazy(() => import('./pages/shopCard'))

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={true}>
          <PokemonProvider>
            <NavBar />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/home" element={<HomePage />}/>
                <Route path="/shop" element={<ShopPage />}/>
                <Route path="/card" element={<CardPage />}/>
                <Route path="/contact" element={<HomePage />}/>
                <Route path="/login" element={<LoginPage />}/>
              </Routes>
            </BrowserRouter>
            <FooterPage />
          </PokemonProvider>
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
