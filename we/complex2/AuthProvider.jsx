import React,{createContext, useState} from "react";

export const AuthContext= createContext();

export const AuthProvider=({children})=>{

    const [token,setToken]=useState(false);

    const Signupform=async(form)=>{
            //console.log(form);
          try{
              let res=await fetch (`https://reqres.in/api/register`,{
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({
                    email:form.email,
                    password:form.password
                  }),
              })
              let data= await res.json();
          // console.log(data.token);
              setToken(data.token);
            
          }catch(e){
              console.log(e);
          }
    };

    const logout=()=>{
        setToken("");
    };

   return(
       <AuthContext.Provider value={{Signupform,logout,token}}>
           {children}
       </AuthContext.Provider>
   );
};