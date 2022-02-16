import Layout from './components/shared/Layout';
import styles from './App.css';
import React, { useState } from 'react';


function App() {
  const[check, toggleCheck]=useState(false);
  function onClick(){
    toggleCheck(!check);
  }

  return(
    <Layout>
      <div>
        { check ? <div className='liked'>좋아요 1개</div> : <div className='unliked'>좋아요 0개</div> }
        <button onClick={onClick}>좋아요</button>
      </div>
    </Layout>
  );
}

export default App;
