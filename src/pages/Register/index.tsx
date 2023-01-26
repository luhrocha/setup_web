import logo from '../../assets/logo.svg';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState, FormEvent } from 'react';
import { auth } from '../../services/firebase';
import { ArrowArcLeft, ArrowLeft, ArrowLineLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';

export function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user,loading, error] = useCreateUserWithEmailAndPassword(auth);

    function handleLogin(event: FormEvent){        
        event.preventDefault();       
        createUserWithEmailAndPassword(email, password)
    }

    if(loading){
        return <p>Loaging...</p>
    }

    if(user){
        return <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    }

    return(
        <div className='w-full max-w-4xl mx-auto flex gap-4'>
              <div className='w-[500px] p-10 mx-auto bg-zinc-800 rounded-lg '>
                <h2 className='text-3xl text-zinc-200 font-bold  pb-10 '>Crie sua conta</h2>
                <form className='mx-auto flex flex-col gap-4' >                    
                        <input type={'text'} id="name" name='name' placeholder="Digite seu nome" className='rounded-lg bg-zinc-900 border border-zinc-900 h-14 p-2'/>
                        <input 
                            type={'text'} id="email" name='email' placeholder="Digite seu email" className='rounded-lg bg-zinc-900 border border-zinc-900 h-14 p-2'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" id="password" name="password" placeholder='Digite uma senha' className='rounded-lg bg-zinc-900 border border-zinc-900 h-14 p-2'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input type="password" id="password" name="password" placeholder='Confirme sua senha' className='rounded-lg bg-zinc-900 border border-zinc-900 h-14 p-2'/>
                  
                        <p className='py-5 text-sm text-center text-zinc-300'>
                            Ao se registrar, você concorda com os nossos <a href="" className='text-violet-500 font-bold'>termos de uso</a> e nossa <a href="" className='text-violet-500 font-bold'>política de privacidade</a>.
                        </p>
                    <button 
                        type='button'
                        onClick={handleLogin}
                        className='w-full border mx-auto border-violet-700 bg-violet-800 text-center font-semibold rounded-lg px-6 py-4 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background'
                    >                  
                        Cadastrar
                    </button> 
                </form>
        </div>

            <div className='p-10 w-full h-full mx-auto flex flex-col items-start gap-20 '>
                <img src={logo} alt="Habits" />

                <div className='text-zinc-200 text-2xl leading-tight font-semibold '>
                    Crie e monitore hábitos no seu dia-a-dia. <br/> 
                    Um passo de cada vez e você alcança sua meta!!
                </div> 
                
                    <Link to={'/'} className="flex items-center justify-center gap-3 text-lg text-zinc-300 ">
                    <ArrowLeft weight='bold' className='text-violet-500'/>
                    Voltar para o Login
                    </Link>
            </div>                        
         </div> 
    )
}