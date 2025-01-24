import styles from './Cadastro.module.css'

export const Cadastro = () =>{
    return (
        <div className={styles.cadastro}>
            <form>
                <textarea name="cadastreTask" placeholder='Adicione uma nova tarefa'/>
                <button type="submit">Criar</button>
            </form>

            <div className={styles.tarefas}>
                <div className={styles.status}>
                    <div><span className={styles.span1}>Tarefas criadas </span></div>
                    <div><span className={styles.span2}>Concluidas </span></div>
                </div>
            </div>
            <footer className={styles.footer}>
                    <div className={styles.task}>
                        <input type="checkbox"/>
                        
                        <span>Integer urna interdum massa libero 
                        auctor neque turpis turpis semper. 
                        Duis vel sed fames integer.</span>
                    </div>
            </footer>
            
        </div>
    )
}