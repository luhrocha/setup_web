import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning();
const minimunSumaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimunSumaryDatesSize - summaryDates.length;

type Summary = Array <{
    id: string;
    date: string;
    amount: number;
    completed:number;
}>

export function SummaryTable(){
    const [summary, setSummary] = useState<Summary>([]);

    useEffect(() => {
        api.get('/summary').then(response => setSummary(response.data))
    }, [])

    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {
                    weekDays.map((item, index) => {
                        return(
                            <div key={`${item}-${index}`} className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center">
                                {item}
                            </div>
                        )
                    })
                }             
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {
                    summaryDates.map(date => {

                        const dayInSummary = summary.find(day => {
                            return dayjs(date).isSame(day.date, 'day')
                        })

                        return (
                            <HabitDay 
                                key={date.toString()} 
                                date={date}
                                amount={dayInSummary?.amount} 
                                completed={dayInSummary?.completed}
                            />
                        )
                    })
                }

                {
                    amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, index) => {
                        return (
                            <div key={index} className="w-10 h-10 bg-zinc-900 border-2 opacity-40 border-zinc-800 rounded-lg cursor-not-allowed" />                            
                        )
                    })
                }          

            </div>
        </div>
    );
}