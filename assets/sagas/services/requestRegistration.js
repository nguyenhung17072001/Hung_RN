import axios from "axios"

export const register = async (email, password) => {
  await axios.post('http://restapi.adequateshop.com/api/authaccount/register', {
    email,
    password,

  });
};