import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";


const Register = () => {
  const {createUser} = useContext(AuthContext)
  const handelRegisterBtn = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name,photo,email,password)

    createUser(email,password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.error(error)
    })
  }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl font-black text-center mt-4">
            Register your account
      </h1>
      <form onSubmit={handelRegisterBtn} className="lg:w-1/2 mx-auto md:w-3/4 ">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <input
          type="text"
          placeholder="name"
          name="name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input
          type="text"
          placeholder="Photo URL"
          name="photo"
          className="input input-bordered"
          required
        />
      </div>
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
        <button className="btn btn-primary">Register</button>
      </div>
      </form>
      <p className="text-center mt-4">Do not Have An Account ? <Link className="text-blue-500 underline" to="/login" >Login</Link></p>
        </div>
    );
};

export default Register;