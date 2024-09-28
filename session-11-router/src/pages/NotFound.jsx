import { useLocation } from "react-router-dom";

function NotFound() {

    const location =useLocation();
    const path= location.pathname.split('/')[1];
    return ( 
        <div className="mt-3">
            <h3>Path "{path}" which you are trying to access not found..!!</h3>
            <img src="https://yoast.com/app/uploads/2016/10/404_error_checking_FI.jpg"
            height="350" className="w-100" alt="pagenotfound"/>
        </div>
     );
}

export default NotFound;