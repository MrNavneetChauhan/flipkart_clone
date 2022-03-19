import axios from "axios";
const url = "http://localhost:2022";

export const signupData = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("error at user's signup data");
  }
};

export const signInData = async (user) => {
  try {
      return await axios.post(`${url}/signin`,user)
  } catch (error) {
      console.log("please check your credentials")
  }
};
