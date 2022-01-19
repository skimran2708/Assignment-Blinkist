import { ThemeProvider } from '@mui/material';
import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ExploreMenu from './components/organisms/ExploreMenu';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import BookDetailsPage from './pages/BookDetailsPage';
import EntrepreneurshipPage from './pages/EntrepreneurshipPage';
import LandingPage from './pages/LandingPage';
import theme from './themes/Theme';

export const UserContext = createContext(()=>{})

function App() {

  const [isOpen, setModal] = useState(false);

    const openExploreMenu=()=>{
        setModal(!isOpen)
    }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">

      <BrowserRouter>

        <UserContext.Provider value={openExploreMenu}>
          <Header />   
          <ExploreMenu open={isOpen} />
        </UserContext.Provider>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="entrepreneurship" element={<EntrepreneurshipPage />} />
          <Route path="bookDetails">
            <Route path=":title" element={<BookDetailsPage />} />
          </Route>
          <Route path="*" element={<LandingPage />} />
        </Routes>    

        <Footer />

      </BrowserRouter>

      </div>
    </ThemeProvider>
  );
}

export default App;
