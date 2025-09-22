import classes from "./SignUp.module.css";
import { Link } from "react-router";
const SignUp = () => {
  return (
    <div className={classes.login}>
      <Link>
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.Amtad6cu5WsYrZ3gC2IgGgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
          width="100px"
          alt=""
          color="black"
        />
      </Link>
      <div className={classes.loginContainer}>
        <h1>SignIn</h1>
        {/* form */}
        <form action="">
          <div>
            {" "}
            <label htmlFor="email" id="email">
              Email
            </label>
            <input type="email" />
          </div>
          <div>
            {" "}
            <label htmlFor="password" id="password">
              Password
            </label>
            <input type="password" />
          </div>

          <button className={classes.login_signinBtn}>Signin</button>
        </form>
        {/* agreement */}
        <p>
          By signing in you agree to the terms and condtions of the project
          amazon. Please check our privacy , cookies notice for further use
        </p>
        <button className={classes.login_registerBtn}>
          {" "}
          Create Amazon account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
