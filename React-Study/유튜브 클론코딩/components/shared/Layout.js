import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';

function Layout({ children, activeMenu }) {

  const [showMenu, setMenu] = useState(true);

  function onMenuClick(){
    setMenu(!showMenu);
  }

  return (
    <div className={styles.container}>
      <Header onMenuClick={onMenuClick}/>
      <div className={styles.layout}>
        {showMenu ? <Menu activeMenu={activeMenu} /> : <div></div> }
        <div className={ showMenu ? styles.contents : styles.noMenuContents}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;