import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import LoginPage from '../pages/LoginForm';
import MainApp from '../pages/MainApp';

function AppContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Header />
        {!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <MainApp />}
      <Footer />
    </div>
  );
}

export default AppContainer;
