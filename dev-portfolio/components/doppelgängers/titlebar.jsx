import Image from 'next/image'; 
import styles from '../styles/titlebar_mod.css'; 

export default function titlebar() {
    return (
        <section className = {styles.titlebar}>
            
            <Image
            src="assets/vscode_icon.svg"
            alt="vscode icon"
            height={15}
            width={15}
            className={styles.icon} /*specifies an icon, not in css */
            />

        <div className={styles.items}>
            <p>File</p>
            <p>Edit</p>
            <p>Selection</p>
            <p>View</p>
            <p>Go</p>
            <p>Run</p>
            <p>Terminal</p>
        </div>

        </section>

      );
  };