import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/about" rel="noopener noreferrer">
        About
      </Link>
    </div>
  )
}
