// utils/auth.js
export const isUserLoggedIn = () => {
    const token = localStorage.getItem('authToken');
    return !!token; // Returns true if the token exists, otherwise false
  };
  