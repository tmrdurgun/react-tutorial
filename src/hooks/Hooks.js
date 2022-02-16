import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SignIn from './components/SignIn';

function Hooks() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedInStorage = window.localStorage.getItem('isLoggedIn');

    setIsLoggedIn(isLoggedInStorage === 'true');
  }, [])

  const handleLogOut = () => {
    window.localStorage.setItem('isLoggedIn', false);
    setIsLoggedIn(false);
  }

  const handleLogin = (params) => {
    if (params.email === 'tamer.durgun@mdpgroup.com' && params.password === '123123') {
      window.localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
    }
  };

  const renderWelcome = () => {
    return (
      <div id="welcome">
        <h3>Welcome to the jungle!! <button onClick={handleLogOut}>Log out</button></h3>

        <Link to="/hooks/todos">Check out your TO-DO list</Link>
      </div>
    )
  }

  return (
    <div className="Hooks">
      {isLoggedIn ? renderWelcome() : <SignIn handleLogin={handleLogin} />}
    </div>
  );
}

export default Hooks;
