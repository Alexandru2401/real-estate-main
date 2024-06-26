import React, { useReducer} from 'react';
import './App.css';
import Footer from './main/Footer';
import Home from './main/Home';
import Navbar from './main/Navbar';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BuySection from './pages/BuySection';
import RentSection from './pages/RentSection'
import AddToFavourites from './components/AddToFavourites';
import { favouriteReducer, initialState } from './store/reducer';
import { FavouriteContext } from './store/context';
import { ContactUs } from './pages/ContactUs';
import PropertyDetails from './components/PropertyDetails';
function App () {
  
      const [state, dispatch] = useReducer(favouriteReducer, initialState);

      const favoriteContextValue = {
        state,
        dispatch
      }

  return (
    <FavouriteContext.Provider value={favoriteContextValue} >
    <div>
     <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/RentSection' element={<RentSection/>}></Route>
            <Route path='/BuySection' element={<BuySection/>}></Route>
            <Route path='/property/:id' element={<PropertyDetails />}></Route>
            <Route path='/AddToFavourites' element={<AddToFavourites/>}></Route>
            <Route path='/ContactUs' element={<ContactUs/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
    </FavouriteContext.Provider>
  );
}

export default App;
