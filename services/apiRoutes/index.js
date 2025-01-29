export const routes = {
  loginWithEmail: () => "/api/authenticate/auth-api/mobile-email-signin",
  loginWithPhonenumber:()=> "/api/authenticate/auth-api/mobile-phone-signin",
  restaurantVerifyMail:()=> "/api/authenticate/auth-api/verify-email",
  signup:()=>"/api/authenticate/auth-api/owner-signup",
  logout:()=> "/api/authenticate/auth-api/logout",
  resendEmail:()=> "/api/authenticate/auth-api/resend-emailcode",
  googleAuth:()=>"",
  facebookAuth:()=>"",

};
