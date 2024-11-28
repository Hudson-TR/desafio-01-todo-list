import { Header } from "./components/Header";
import { HeaderTask } from "./components/HeaderTask";

import styles from "./App.module.css";
import "./global.css";
import { AddTask } from "./components/AddTask";
import { ItemTask } from "./components/ItemTask";
import { ClipboardText } from "@phosphor-icons/react";
import { useState } from "react";

export interface ListTask {
	id: number;
	task: string;
	isCompleted: boolean;
}

const listTasks: ListTask[] = [
	{
		id: 1,
		task: "Comprar o RocketseatOne",
		isCompleted: true,
	},
	{
		id: 2,
		task: "Estudar o conteúdo do modulo 1 do curso de React da Rocketseat",
		isCompleted: true,
	},
	{
		id: 3,
		task: "Terminar o projeto do curso de React",
		isCompleted: true,
	},
	{
		id: 4,
		task: "Finalizar o curso de React",
		isCompleted: false,
	},
];

function App() {
	const [tasks, setTasks] = useState([...listTasks]);

	function addTask(task: string) {
		const newTask: ListTask = {
			id: Math.random(),
			task,
			isCompleted: false,
		};

		setTasks([...tasks, newTask]);
	}

	function checkTask(item: ListTask) {
		const newTasks = tasks.map((task) => {
			if (task === item) {
				task.isCompleted = item.isCompleted;
			}
			return task;
		});

		setTasks(newTasks);
	}

	function deleteTask(item: ListTask) {
		const newTasks = tasks.filter((task) => task !== item);

		setTasks(newTasks);
	}

	return (
		<>
			<Header />
			<div className={styles.container}>
				<main>
					<AddTask onAddTask={addTask} />
					<HeaderTask listTask={tasks} />
					{tasks.length === 0 ? (
						<div className={styles.noTasks}>
							<ClipboardText size={56} />
							<strong>Você ainda não tem tarefas cadastradas</strong>
							<p>Crie tarefas e organize seus itens a fazer</p>
						</div>
					) : (
						<div>
							{tasks.map((task) => {
								return (
									<ItemTask
										key={task.id}
										item={task}
										onCheckTask={checkTask}
										onDeleteTask={deleteTask}
									/>
								);
							})}
						</div>
					)}
				</main>
			</div>
		</>
	);
}

export default App;
