import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function Users(){
    const [users, setUsers] = useState();
    const navigate = useNavigate();

    async function home(event){
        navigate('/');
    }

    function allUsers(){
        api
        .get("/usuarios")
        .then((res) => {
            setUsers(res.data)
            console.log(users)
            })
        .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);   
        });
    }

    useEffect(() => {
        allUsers();
        // eslint-disable-next-line
    }, []);

    return(
        <div className="user-container">
            <h1>Relação de usuarios</h1>
            <ul>
                {users?.map(user =>(
                    <li key={user.id}>
                        <b>Nome: </b>{user.nome}<br></br>
                        <b>Email: </b>{user.email}<br></br>
                        <b>Cel: </b>{user.cel}<br></br>
                    </li>
                ))}
            </ul>
            <br></br>
            <form onSubmit={home}>
                <divbuttonuser>
                    <button className='button' type='submit'>Voltar</button>
                </divbuttonuser>
            </form>
                       
        </div>
    )
}