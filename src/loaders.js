const URL = 'https://carsapp-pgj8.onrender.com';


export const ServiceLoader = async () => {
    const res = await fetch(URL + "/service")
    const services = await res.json()
    console.log(services);
    return services
  }


  export const UserLoader = async () => {
    const res = await fetch(URL + "/user")
    const users = await res.json()
    return users
  }

export const SignUpLoader = async () => {
    const res = await fetch(URL + "/signup")
    const signups = await res.json()
    return signups
}