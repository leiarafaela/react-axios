import { useNavigate } from 'react-router-dom';
import './styles.css' 
import UserImage from '../assets/usuariosImg.png';

export default function Home(){
    const navigate = useNavigate();

    async function iniciar(event){
        navigate('/users');
    }

    return(
        <div className='inicio-container'>
            <section className='form'>
                <img src={UserImage} alt='users' id='img1' className='center'
                width="100" height="250"></img>
                <br></br>
                <form onSubmit={iniciar}>
                    <divbutton>
                        <button className='button' type='submit'>Ver Usuarios</button>
                    </divbutton>
                </form>
            </section>
        </div>
    )
}