import React, { useEffect, useState } from "react";
import api from "./services/api";


export default function Usuario() {
  const [users, setUsers] = useState();

  useEffect(() => {
    api
    .get("/usuarios")
    .then(({data}) => {
        setUsers(data)
        console.log(users)
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div>
        {JSON.stringify(users)}
    </div>
  )
}
