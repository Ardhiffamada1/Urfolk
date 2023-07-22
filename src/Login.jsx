import React, {useEffect, useState} from "react"

const [user, setUser] = useState([]);

const fetchData = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return setUser(data);
}

useEffect(() => {
    fetchData();
  },[])
  
const Login = () =>{
    return(
        <div>

        </div>
    )
}

export default Login