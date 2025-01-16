import "./LoginPage.css"

function LoginPage() { 
  return (
      <div className="login-container">
        
          <h2 className="login-title">Sign In</h2>

          <form className="login-form" action="">
              <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
              />
              <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
              />

              <button type="submit" className="btn">
                  Login
              </button>
          </form> 
      </div>
  );
}

export default LoginPage;