import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";



const PrivetRoute = ({children}) => {
      const {user, loading} = useContext(AuthContext);
      const location = useLocation();

      if(loading){
            return <div className="text-center my-6"><span className="loading loading-ring loading-xl text-primary"></span></div>
      }

      if(user){
            return children;
      }


      return <Navigate to='/signin' state={location?.pathname} replace></Navigate>
};

export default PrivetRoute;