import Lottie from "lottie-react";
import lottieSignin from "../../assets/lotte/lotte-signin";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
      const { signInUser} = useContext(AuthContext);
      const location = useLocation();
      const navigate = useNavigate();
      const from = location?.state || '/';

      const handleSignin = e =>{
            e.preventDefault();
            const form = e.target;
            const email =form.email.value;
            const password = form.password.value;
            console.log( email, password)
            // Password Validation You must  be do it

            // Signup the user with firebase
            signInUser(email, password)
            .then(result =>{
              console.log('create', result.user);
              // Redirect to home page
              navigate(from)
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
                  <Lottie animationData={lottieSignin}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border">
                  <h1 className="text-4xl font-bold p-5 ">Sign In now!</h1>
                  <form onSubmit={handleSignin} className="card-body">
                    <fieldset className="fieldset">
                      <label className="fieldset-label">Email</label>
                      <input type="email" name="email" className="input" placeholder="Email" />
                      <label className="fieldset-label">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Password"
                      />
                      <button type="submit" className="btn btn-neutral mt-4">Sign In</button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </>
      );
};

export default SignIn;