
import {FormEvent, useState} from 'react'
import logoimg from '../assets/logo.png';
import "../styles/loginemail.css";


export const Login = () => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erroEmail, setErroEmail ] = useState("")
  const [erroSenha, setErroSenha] = useState("")
function logaUsuario (evento:FormEvent){
  evento.preventDefault()
  if(! email ){
    setErroEmail ('Por favor insira o Email')
  }
  if(! senha ){
    setErroSenha ('Por favor insira a Senha')
  }

} 
  return (
    <div className="container"> 
      <div className= "container-login">
        <div className="wrap-login">
          <form onSubmit={logaUsuario} className="login-form">
            <span className="login-form-title"> Bem vindo</span>
            <span className="login-form-title"> <img src={logoimg} alt="imglogogamashoes" /></span>

            <div className='wrap-input'> 
              <input className={email !== "" ? 'has-val input' :  'input'}
               type='email'
               value={email}
               onChange={e =>{
                setEmail(e.target.value)
                setErroEmail("")

                

               } }
               />
               
              <span className='focus-input' data-placeholder='Email'></span> 
             
              
            </div>
            {erroEmail && <span className='Weap-input-error'>{erroEmail}</span>}

            <div className='wrap-input'>
              <input className={senha !== "" ? 'has-val input' :  'input'} 
              type='password'
              value={senha}
              onChange={e =>{
                setSenha(e.target.value)
                setErroSenha("")

               } }
              />
             
              <span className='focus-input' data-placeholder='Senha'></span>
            </div>
            {erroSenha && <span className='Weap-input-error'>{erroSenha}</span>}

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Entrar</button>
            </div>

            <div className='texto-central'>
              <a className='txt1' href='#'>Criar Conta</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};


