import styles from './Hello.module.css'
function Hello(){
    return (
        <div className={styles.body}>        
            <h1 className={styles.title}>크림(KREAM)</h1>
            <h3 className={styles.middle}>한정판 거래의 FLEX</h3>
            <div>스니커즈부터 럭셔리 아이템까지 한정판을 거래하는 가장 확실한 방법, KREAM</div>
        </div>
    );

}
export default Hello;