import classes from "./SignUp.module.css";
import { Link, useNavigate } from "react-router";
import { auth } from "../../utils/firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState, useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider.jsx";
import { Type } from "../../utils/action.type.js";
import { ClipLoader } from "react-spinners";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);
  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    // firebase authentication
    if (e.target.name == "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password);
      setLoading({ ...loading, signUp: true })
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
  console.log(user);
  return (
    <div className={classes.login}>
      <Link to="/">
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
            <label htmlFor="email" id="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div>
            <label htmlFor="password" id="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>

          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login_signinBtn}
          >
            {loading.signIn ? <ClipLoader color="#333" /> : "Signin"}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing in you agree to the terms and condtions of the project
          amazon. Please check our privacy , cookies notice for further use
        </p>
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login_registerBtn}
        >
          {loading.signUp ? (
            <ClipLoader color="#333" />
          ) : (
            " Create Amazon account"
          )}
        </button>
        {error && (
          <small style={{ padding: "20px", color: "red" }}>{error}</small>
        )}
      </div>
    </div>
  );
};

export default SignUp;
