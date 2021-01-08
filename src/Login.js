import React, {useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        //Some fancy firebase login code......
    }
    const register = e =>{
        e.preventDefault();

        //Some fancy firebase register code......

    }

    return (
        <div className="login">
            <Link to='/'>
                <img 
                className="login__logo"
                src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button
                        type='submit'
                        onClick={signIn}
                        className='login__signInButton'>
                        Sign In
                    </button>
                </form>

                <p>
                En passant votre commande,
                vous acceptez les Conditions générales de vente d’Amazon. 
                Veuillez consulter notre Notice Protection de vos informations personnelles,
                notre Notice Cookies et notre Notice Annonces
                publicitaires basées sur vos centres d’intérêt.
                </p>
                <button
                    onClick={register} 
                    className='login__registerButton'>
                    Create Your Amazon account
                </button>
            </div>
        </div>
    )
}

export default Login
