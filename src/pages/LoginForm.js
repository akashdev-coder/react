import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      onLogin();
    } else {
      alert('Please enter both username and password');
    }
};

  return ( 
          <section className="vh-100 backimg">
            <div className="container py-5 h-100 ">
              <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5">
                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form1Example13">Email address</label>
                      <input type="email" id="form1Example13" className="form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form1Example23">Password</label>
                      <input type="password" id="form1Example23" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="d-flex justify-content-around align-items-center mb-4">
                      {/* div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                        <label className="form-check-label" for="form1Example3"> Remember me </label>
                      </div> */}
                      <a href="#!">Forgot password?</a>
                      <button onClick={handleLogin} type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
  );
}

export default LoginPage;
