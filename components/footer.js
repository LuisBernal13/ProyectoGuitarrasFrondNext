import Link from "next/link"
import styles from '../styles/footer.module.css'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
            <Link href="/">
                INICIO
            </Link>
            <Link href="/nosotros">
                NOSOTROS
            </Link>
            <Link href="/tienda">
                TIENDA
            </Link>
            <Link href="/blog">
                BLOG
            </Link>
        </nav>
        <p className={styles.copyright}>TODOS LOS DERECHOS RESERVADOS {new Date().getFullYear()} </p>
      </div>
    </footer>
  )
}
