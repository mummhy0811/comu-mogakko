import React, { useState } from 'react';
import Day5 from './day5';
import Layout from './day5_layout';
import Calc from './day5_Calc';

function App() {
  const [number, setNumber]=useState(1);

  function plus_btn(){
      setNumber(number+1);
  }
  function minus_btn(){
      setNumber(number-1);
  }
  return (
    <Layout>
      <Calc number={number}/>
      <Day5 onClick={plus_btn} text="UP"/>
      <Day5 onClick={minus_btn} text="DOWN"/>
    </Layout>
  );
}

export default App;
