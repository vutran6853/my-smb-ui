import styles from "./page.module.css"
import Button from "@mui/material/Button"

export default function Home() {
  return (
    <div className={styles.page}>
      <a href="/about" rel="noopener noreferrer">
        About
      </a>
    </div>
  )
}
