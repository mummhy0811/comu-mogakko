import Layout from './components/shared/Layout';
import React, { useState } from 'react';


function App() {
  const[check, toggleCheck]=useState(false);
  function onClick(){
    toggleCheck(!check);
  }

  return(
    <Layout>
      <div>
        <button onClick={onClick}>좋아요</button>
        { check && <div>+1</div> }
      </div>
    </Layout>
  );
}

export default App;
