import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header className={styles.header}>Capputeeno</header>

      <main className={styles.main}>
        <h1>Content</h1>
      </main>

      <footer className={styles.footer}>&copy; 2023 T. J. Silva</footer>
    </>
  )
}
