const URL = 'http://localhost:7070';


export const ServiceLoader = async () => {

  const res = await fetch(URL + "/service", {
    credentials: "include",
  } )
  const services = await res.json()
  console.log(services);
  return services
}
export const ShowLoader = async ({ params }) => {
  console.log(params, "ShowLoader",);
  const res = await fetch(URL + "/service/" + params.id, {
    credentials: "include",
  });

  const service = await res.json();
  return service;
};


  export const UserLoader = async () => {
    const res = await fetch(URL + "/user",{
      credentials: "include",
    })
    const users = await res.json()
    return users
  }

export const SignUpLoader = async () => {
    const res = await fetch(URL + "/user/signup", {
      credentials: "include",
    })
    const signups = await res.json()
    return signups
}
