import React from 'react';
import ReactDOM from 'react-dom';


const Button=({handleClick, name})=>{
  return (
    <button onClick={handleClick}>{name}</button>
  )
}
const Statistic=({count,name})=>{
  return (
    <tr>
    <td>{name}</td> 
    <td>{count}</td>
    </tr>
 )
}
const Statistics=({good,neutral,bad,all,average,positive})=>{
  if(all===0){
    return(
      <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </div>
      )
  }
  return(
    <>
      <h1>statistics</h1>
      <table>
        <thead>
        <Statistic count={good} name='good'/>
        <Statistic count={neutral} name='neutral'/>
        <Statistic count={bad} name='bad'/>
        <Statistic count={all} name="all"/>
        <Statistic count={average} name='average'/>
        <Statistic count={positive} name='positive'/>
        </thead>
      </table>
    </>
  )
}

const App=()=>{
  const [good,setGood]=React.useState(0);
  const [neutral,setNeutral]=React.useState(0)
  const [bad,setBad]=React.useState(0);
  const [average,setAverage]=React.useState('');
  const [positive,setPositive]=React.useState('');

  const countPositive=(good,neutral,bad)=>{
    return (good/(good+neutral+bad))*100+'%';
  }

  const countAverage=(good,neutral,bad)=>{
    return (good-bad)/(good+neutral+bad);
  }
  const handleGood=()=>{
    setGood(good+1);
    setAverage(countAverage(good+1,neutral,bad));
    setPositive(countPositive(good+1,neutral,bad));
  }
  const handleNeutral=()=>{
    setNeutral(neutral+1);
    setAverage(countAverage(good,neutral+1,bad));
    setPositive(countPositive(good,neutral+1,bad));
  }
  const handleBad=()=>{
    setBad(bad+1);
    setAverage(countAverage(good,neutral,bad+1));
    setPositive(countPositive(good,neutral,bad+1));
  }

  return(
    <div>
      <h1>give feedback</h1>
        <Button handleClick={handleGood} name='good'/>
        <Button handleClick={handleNeutral} name='neutral'/>
        <Button handleClick={handleBad} name='bad'/>
        <Statistics good={good} neutral={neutral} bad={bad} all={good+neutral+bad} average={average}
        positive={positive}/>   
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))