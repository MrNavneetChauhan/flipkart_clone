import { createContext,useState } from "react";

 export const UserContext = createContext();

 export const UserContextProvider = ({children})=>{
     const [user,setUser] = useState("");

    const updateUser = (username)=>{
        setUser(username)
    }

     return (
         <UserContext.Provider value={{user,updateUser}} >
            {children}
         </UserContext.Provider>
     )
 }