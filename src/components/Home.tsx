import * as Dialog from '@radix-ui/react-dialog';
import { PersonSimple, Plus, User, X } from 'phosphor-react';
import logo from './../assets/logo.svg';
import { Register } from './Register';


export function Home(){    
           
    return(
        <div className='w-full max-w-4xl mx-auto flex gap-4'>
            <Register />

            <div className='p-10 w-full h-full mx-auto flex flex-col items-start gap-20 '>
                <img src={logo} alt="Habits" />

                <div className='text-zinc-200 text-2xl leading-tight font-semibold '>
                    Crie e monitore hábitos no seu dia-a-dia. <br/> 
                    Um passo de cada vez e você alcança sua meta!!
                </div> 
                <p className='text-zinc-100 text-xl'>
                    Já tem cadastro? Acesse sua <a href="" className='text-violet-500 font-bold'>conta aqui</a>.
                </p> 
            </div>                        
         </div> 
    )
}