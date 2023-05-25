import React, { useState } from 'react'
import "./quiz.css"
import { Quizdata } from '../data/Data'
import { QuizResult } from './quizResult';

function Quiz() {
   const[current,setCurrent]=useState(0);
   const[score,setScore]=useState(0);
   const[option,setOption]=useState(0);
   const[result,setResult]=useState(false)
   console.log(score)

    function handleNext()
    {
       
        updateScore();
        if(current<Quizdata.length-1)
        {

            
        setCurrent(current+1);
        
        setOption(0)
        }
        else{
            
            setResult(true)

        }
    }
    function tryAgain()
    {
        setCurrent(0)
        setScore(0)
        setOption(0)
        setResult(false)
    }

    function updateScore()
    {
        if(option==Quizdata[current].anwers)
        {
            setScore(score+1)
        }
        
    }
  return (
   
    <div className="container">

        <div className="miniContainer">
            {result?(
                <QuizResult score={score} totalScore={Quizdata.length} tryAgain={tryAgain}/>
            ):(
                <>
           <div className='question'>
            <span className='question-text'>{current+1+"."+Quizdata[current].question}</span>

            
            </div> 
           <div className='selectOptions'>
            {Quizdata[current].options.map((options,i)=>{

                return(
                    <button key={i} className={`btn-config ${option==i+1?"checked":null}`} onClick={()=>setOption(i+1)}>{options}</button>
                )

            })}
            </div> 
            <input type='button' className='btn-' value={"next"} onClick={handleNext}></input>
            </>)}
        </div>
        
   
   </div>
  )
}

export default Quiz