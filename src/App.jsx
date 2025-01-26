import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { Cadastro } from './components/Cadastro/Cadastro'




export const App = () => {
  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
          
          <Cadastro />
          {/* <div className={styles.wrapper}>
            <h1>Hellow</h1>
          </div> */}
      </div>
    </div>
      
      

  )
}

