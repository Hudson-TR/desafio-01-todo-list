import { useRef } from "react";
import styles from "./AddTask.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export function AddTask({ onAddTask }: { onAddTask: (task: string) => void }) {
	const task = useRef<HTMLInputElement | null>(null);
	function handleAddTask() {
		if (task.current?.value.trim()) {
			onAddTask(task.current.value);
			task.current.value = "";
		}
	}

	return (
		<div className={styles.task}>
			<input type="text" placeholder="Adicione uma nova Tarefa" ref={task} required />
			<button type="button" onClick={handleAddTask}>
				<span>Criar</span> <PlusCircle size={18} weight="bold" />
			</button>
		</div>
	);
}
