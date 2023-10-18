import AuthForm from '../components/AuthForm';
import {json, redirect} from "react-router-dom";

function AuthenticationPage() {
    return <AuthForm/>;
}

export default AuthenticationPage;

export const action = async ({request}) => {
    const params = new URL(request.url).searchParams;
    const mode = params.get('mode');

    if (mode !== 'login' && mode !== 'signup') {
        throw json({message: 'Unsupported mode.'}, {status: 422});
    }

    const data = await request.formData();
    const auth = {
        email: data.get('email'),
        password: data.get('password'),
    }

    const response = await fetch(`http://localhost:8080/${mode}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(auth)
    });

    if (response.status === 422 || response.status === 401) {
        return response;
    }

    if (!response.ok) {
        throw json({message: 'Could not authenticate user.'}, {status: 500});
    }

    const res = await response.json();
    const token = res.token;
    localStorage.setItem('auth', token);

    const expirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);
    localStorage.setItem('authExpiration', expirationDate.toISOString());

    return redirect('/');
}