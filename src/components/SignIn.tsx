import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";

export function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user,loading, error] = useCreateUserWithEmailAndPasswordd(auth);

    
    return(
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
                        className='w-full border mx-auto border-violet-700 bg-violet-800 text-center font-semibold rounded-lg px-6 py-4 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background'
                    >                  
                        Cadastrar
                    </button> 
                </form>
        </div>
    )
}