import React from 'react'

export const QuizResult = (props) => {
  return (
    <div className='miniContainer1'>
       <div> Score:{props.score}<br/>
        Total Score:{props.totalScore}
        </div>
        <button className='btn-' onClick={props.tryAgain} >retry</button>
    </div>

    
  )
}
