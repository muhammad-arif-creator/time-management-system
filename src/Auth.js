const Auth = {
  isAuthenticated: false,
  Login() {
    this.isAuthenticated = true;
  },
  Logout() {
    this.isAuthenticated = false;
  },
  getAuth() {
    return this.isAuthenticated;
  },
};
export default Auth;
