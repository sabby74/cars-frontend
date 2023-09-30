const URL = 'https://carsapp-pgj8.onrender.com';


export const ServiceLoader = async () => {
  try{
    const res = await fetch(URL + "/service" , {  credentials: "include"})
    console.log(res);
    const services = await res.json()
    console.log(services);
    return services}
    catch(e){
      console.log(e);
    }
 return []
}
export const ShowLoader = async ({ params }) => {
  console.log(params, "ShowLoader");
  const res = await fetch(URL + "/service/" + params.id, { credentials: "include"});
  const service = await res.json();
  return service;
};


  export const UserLoader = async () => {
    const res = await fetch(URL + "/user")
    const users = await res.json()
    return users
  }

export const SignUpLoader = async () => {
    const res = await fetch(URL + "/user/signup")
    const signups = await res.json()
    return signups
}
