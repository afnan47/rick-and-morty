import { useState } from "react";

function Login({ onLoginSubmit }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUserNameChange = (e) => {

    const email = e.target.value;
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        setErrorMessage("Please enter a valid email id");
    }
    else {
        setErrorMessage("");
    }
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password.length < 8) {
        setErrorMessage("Please enter password of 8 characters");
    }
    else {
        setErrorMessage("");
    }
    setPassword(e.target.value);
  }

  return (
    <>
      <label>
        <p>Email</p>
        <input type="text" value={userName} onChange={handleUserNameChange} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <div>
        <button disabled={errorMessage !== "" || userName === "" || password === ""} onClick={onLoginSubmit}>
          Submit
        </button>
        <div style={{ color: "red" }} >{errorMessage}</div>
        
      </div>
    </>
  );
}
export default Login;
