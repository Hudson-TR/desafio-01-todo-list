import styles from "./ItemTask.module.css";
import { ListTask } from "../App";
import { Check, Trash } from "@phosphor-icons/react";

export function ItemTask({
	item,
	onCheckTask,
	onDeleteTask,
}: {
	item: ListTask;
	onCheckTask: (item: ListTask) => void;
	onDeleteTask: (item: ListTask) => void;
}) {
	function handleCheckTask() {
		item.isCompleted = !item.isCompleted;

		onCheckTask(item);
	}

	function handleDeleteTask() {
		onDeleteTask(item);
	}

	return (
		<div className={styles.itemTask}>
			<div className={styles.taskContent}>
				<input readOnly type="checkbox" checked={item.isCompleted} />
				<span
					className={`${styles.checkbox} ${item.isCompleted && styles.checkboxCheck}`}
					onClick={handleCheckTask}
				>
					{item.isCompleted && <Check size={12} weight="bold" />}
				</span>
				<p>{item.task}</p>
			</div>
			<button onClick={handleDeleteTask}>
				<Trash size={16} />
			</button>
		</div>
	);
}
