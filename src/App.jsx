import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { Cadastro } from './components/Cadastro/Cadastro'

const tesks = [
  {
    id: 1,
    title: "Estudar React js",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Estudar Node Js",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Estudar Typescript",
    isCompleted: false,
  }
]

export const App = () => {

  return (
      <div>
        <Header />
        <Cadastro />
        {/* <div className={styles.wrapper}>
          <h1>Hellow</h1>
        </div> */}
      </div>
      

  )
}

