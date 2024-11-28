import styles from "./Header.module.css";
import rocketLogo from "../assets/rocket.svg";

export function Header() {
	return (
		<header className={styles.header}>
			<img src={rocketLogo} alt="Logo" />
			<div>
				<span className={styles.to}>to</span>
				<span className={styles.do}>do</span>
			</div>
		</header>
	);
}
