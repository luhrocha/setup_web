import { Link } from "react-router-dom";
import { Register } from "../../pages/Register";
import logo from './../../assets/logo.svg';

export function Login(){
    return(
        <div className='w-full max-w-4xl mx-auto flex gap-4'>
            <div className='w-[500px] p-10 mx-auto bg-zinc-800 rounded-lg '>
                <h2 className='text-3xl text-zinc-200 font-bold  pb-10 '>Faça seu login</h2>
                <form className='mx-auto flex flex-col gap-4' >                    
                        <input 
                            type={'text'} id="email" name='email' placeholder="Digite seu email" className='rounded-lg bg-zinc-900 border border-zinc-900 h-14 p-2'
                        />

                        <input 
                            type="password" id="password" name="password" placeholder='Digite uma senha' className='rounded-lg bg-zinc-900 border border-zinc-900 h-14 p-2'
                        />
                        <p className='text-violet-500 font-bold text-sm -mt-3'>Esqueci minha senha</p>
                        
                        <p className='py-5 text-sm text-center text-zinc-300'>
                            Não tem uma conta? <Link to={'/register'}><span className='text-violet-500 font-bold'>Registre-se</span></Link>
                        </p>
                    <button 
                        type='button'
                        className='w-full border mx-auto border-violet-700 bg-violet-800 text-center font-semibold rounded-lg px-6 py-4 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background'
                    >                  
                        Entrar
                    </button> 
                </form>
        </div>

            <div className='p-10 w-full h-full mx-auto flex flex-col items-start gap-20 '>
                <img src={logo} alt="Habits" />

                <div className='text-zinc-200 text-2xl leading-tight font-semibold '>
                    Crie e monitore hábitos no seu dia-a-dia. <br/> 
                    Um passo de cada vez e você alcança sua meta!!
                </div> 
                 
            </div>                        
         </div> 
    )
}