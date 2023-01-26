import {Plus} from 'phosphor-react'
import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'
import './lib/day.js'
import { AppRoutes } from './routes/routes';

function App() {
    return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
            <AppRoutes /> 
        </div>
    </div >
    )
}

export default App
