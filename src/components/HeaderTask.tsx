import { ListTask } from "../App";
import styles from "./HeaderTask.module.css";

export function HeaderTask({ listTask }: { listTask: ListTask[] }) {
	return (
		<>
			<div className={styles.task}>
				<div className={styles.taskCreated}>
					<p>Tarefas Criadas</p>
					<span>{listTask.length}</span>
				</div>
				<div className={styles.taskCompleted}>
					<p>Concluídas</p>
					<span>
						{listTask.filter((item) => item.isCompleted).length} de {listTask.length}
					</span>
				</div>
			</div>
			<div className={styles.line}></div>
		</>
	);
}
