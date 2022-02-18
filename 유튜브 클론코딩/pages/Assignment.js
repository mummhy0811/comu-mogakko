import Layout from '../components/shared/Layout';
import styles from './Assignment.module.css';
import React, { useState } from 'react';

function Assignment() {
    const[check, toggleCheck]=useState(false);
    function onClick(){
      toggleCheck(!check);
    }
  
    return(
      <Layout>
        <div className={styles.box}>
          { check ? <div className={styles.liked}>좋아요 1개</div> : <div className={styles.unliked}>좋아요 0개</div> }
          <button onClick={onClick}>좋아요</button>
        </div>
      </Layout>
    );
}

export default Assignment;