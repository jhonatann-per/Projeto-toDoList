import styles from './Cadastro.module.css'

export const Cadastro = () =>{
    return (
        <footer className={styles.footer}>
            <form>
                <textarea name="cadastreTask" placeholder='Escreva sua Tarefa'/>
            </form>
        </footer>
    )
}