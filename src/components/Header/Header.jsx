import styles from './Header.module.css'
import RockIcon from '../../assets/rocket.svg'

export const Header = () =>{
    return(
        <div >
            <header className={styles.header}>
                <img src={RockIcon} alt='logo'/> 
                <h1 className={styles.color1}>to</h1>
                <h1 className={styles.color2}>do</h1>
            </header>
        </div>
    )
}