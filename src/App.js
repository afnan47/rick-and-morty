import { useState } from "react";
import { Login, Search } from "./components";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginSubmit = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-wrapper">
      {isLoggedIn ? <Search /> : <Login onLoginSubmit={onLoginSubmit} />}
    </div>
  );
}

export default App;
