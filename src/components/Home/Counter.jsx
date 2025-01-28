import React from 'react';
import '../../assets/css/Home/Counter.css';
import CountUp from 'react-countup';
function Counter() {
  return (
    <div className='counter-main'>
      <div className="counter-card">
        <h1><CountUp end={12} /></h1>
        <p className='primary-sentence'>Happy <br/> Clients</p>
      </div>
      <div className="counter-card">
        <h1><CountUp end={7} /></h1>
        <p className='primary-sentence'>Ongoing <br/> Clients</p>
      </div>
      <div className="counter-card">
        <h1><CountUp end={9} /></h1>
        <p className='primary-sentence'>Completed <br/> Websites</p>
      </div>
      <div className="counter-card">
        <h1><CountUp end={6} /></h1>
        <p className='primary-sentence'>Handling <br/> Accounts</p>
      </div>
    </div>
  )
}

export default Counter
