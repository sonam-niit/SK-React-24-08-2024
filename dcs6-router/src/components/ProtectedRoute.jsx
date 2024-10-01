import { Navigate } from "react-router-dom";

function ProtectedRoute({isAuthenticated,children}){
    console.log(isAuthenticated);
    return isAuthenticated?children : <Navigate to='/login' />
}
export default ProtectedRoute;