import Lottie from "lottie-react";
import lottieSignup from "../../assets/lotte/reg.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const SignUp = () => {
  const {createUser} = useContext(AuthContext);

      const handleSignUp = e =>{
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email =form.email.value;
            const password = form.password.value;
            console.log(name, email, password)
            // Password Validation You must  be do it

            // Signup the user with firebase
            createUser(email, password)
            .then(result =>{
              console.log('create', result.user)
            })
            .catch(error =>{
              console.log(error.message)
            })
      }

  return (
    <>
      <div className="hero min-h-[800px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96 lg:ml-6">
            <Lottie animationData={lottieSignup}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border">
            <h1 className="text-4xl font-bold p-5 ">Sign Up now!</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input type="text" name="name" className="input" placeholder="Name" />
                <label className="fieldset-label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button type="submit" className="btn btn-neutral mt-4">Sign up</button>
              </fieldset>
            </form>
           
           <div className="m-4 text-center"> <SocialLogin></SocialLogin></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
