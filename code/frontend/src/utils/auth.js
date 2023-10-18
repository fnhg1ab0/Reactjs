import {redirect} from 'react-router-dom';

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('authExpiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    return expirationDate.getTime() - now.getTime();
}

export function getAuthTokens() {
    const token = localStorage.getItem('auth');

    if (!token) {
        return null;
    }

    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
        return 'EXPIRED';
    }

    return token;
}

export const tokenLoaded = () => {
    return getAuthTokens();
}

export const checkAuth = () => {
    const token = getAuthTokens();
    if (!token) {
        return redirect('/auth?mode=login');
    }
    return null;
}