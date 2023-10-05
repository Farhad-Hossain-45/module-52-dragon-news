import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";




const Login = () => {
  const {logIn} = useContext(AuthContext)
  
  const handelLoginBtn = e => {
   
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email,password)
    logIn(email,password)
    .then(result =>{
      console.log(result)
    })
    .catch(error => {
      console.error(error)
    })
  }
  return (
    <div>
      <Navbar></Navbar>

      <h1 className="text-3xl font-black text-center mt-4">
        Login your account
      </h1>
      <form onSubmit={handelLoginBtn} className="lg:w-1/2 mx-auto md:w-3/4 ">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email address</span>
        </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          name="password"
          className="input input-bordered"
          required
        />
        {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
      </form>
      <p className="text-center mt-4">Do not Have An Account ? <Link className="text-blue-500 underline" to="/register" >Register</Link></p>
    </div>
  );
};

export default Login;
