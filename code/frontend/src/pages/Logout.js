import {redirect} from "react-router-dom";

export const action = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('authExpiration');
    return redirect('/');
}