import styles from './Cadastro.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Trash, Check, ClipboardText, PlusCircle } from '@phosphor-icons/react';

const CampTaskVazio = () => {
    return (
        <div className={styles.campCadastroVazio}>
            <ClipboardText size={44} color="white" weight="thin"/>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
};

export const Cadastro = () => {
    const [cadastraTask, setCadastraTask] = useState('');
    const [task, setTask] = useState([]);
    const [countQuantidadeTask, setCountQuantidadeTask] = useState(0);
    const [countConcluidas, setCountConcluidas] = useState(0);
    const maxLength = 150; 
    const handleCadastraTask = (e) => {
        e.preventDefault();
        if (cadastraTask === '') {
            return alert('Campo vazio, por favor preencha o campo');
        } else {
            setTask([...task, { id: uuidv4(), text: cadastraTask, completed: false }]);
            setCadastraTask('');
            setCountQuantidadeTask(countQuantidadeTask + 1);
        }
    };

    const handleConcluiTask = (id) => {
        const updatedTasks = task.map((taskMarcadaItem) => {
            if (taskMarcadaItem.id === id) {
                if (!taskMarcadaItem.completed) {
                    setCountConcluidas((marcadaCount) => marcadaCount + 1);
                } else {
                    setCountConcluidas((marcadaCount) => marcadaCount - 1);
                }
                return { ...taskMarcadaItem, completed: !taskMarcadaItem.completed };
            }
            return taskMarcadaItem;
        });
        setTask(updatedTasks);
    };

    const handleDeleteTask = (id) => {
        const filteredTasks = task.filter((taskIten) => taskIten.id !== id);
        setTask(filteredTasks);
        setCountQuantidadeTask(filteredTasks.length);
        setCountConcluidas(filteredTasks.filter((taskIten) => taskIten.completed).length);
    };

    return (
        <div className={styles.cadastro}>
            <form className={styles.formContent} onSubmit={handleCadastraTask}>
                <textarea
                    value={cadastraTask}
                    onChange={(e) => setCadastraTask(e.target.value)}
                    name="cadastreTask"
                    placeholder="Adicione uma nova tarefa"
                    maxLength={maxLength}
                />
                <button type="submit">
                    <span>Criar</span>
                    <PlusCircle className={styles.icon} size={20} weight="bold" />
                </button>
            </form>

            <div className={styles.tarefas}>
                <div className={styles.status}>
                    <div>
                        <span className={styles.span1}>Tarefas criadas: </span>
                        <span className={styles.span3}>{countQuantidadeTask}</span>
                    </div>
                    <div className={styles.conclued}>
                        <span className={styles.span2}>Concluídas: </span>
                        <span className={styles.span3}>
                            {countConcluidas} de {countQuantidadeTask}
                        </span>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                {task.length === 0 && <CampTaskVazio />}
                {task.map((taskIten) => (
                    <div className={styles.task} key={taskIten.id}>
                        <div className={styles.contentTask}>
                            <div
                                className={`${styles.customCheckbox} ${
                                    taskIten.completed ? styles.checked : ''
                                }`}
                                onClick={() => handleConcluiTask(taskIten.id)}
                            >
                                {taskIten.completed && <Check size={14} color="white" />}
                            </div>
                            <span >{taskIten.text}</span> 
                            
                        </div>
                        <Trash
                            cursor="pointer"
                            size={24}
                            color="white"
                            onClick={() => handleDeleteTask(taskIten.id)}
                        />
                    </div>
                ))}
            </footer>
        </div>
    );
};
