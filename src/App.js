import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [users, setUser] = useState();

  useEffect(() => {
    api
      .get("/usuarios")
      .then(({data}) => {setUser(data);
      console.log(users)
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
          {JSON.stringify(users)}
          
    </div>
  );
}