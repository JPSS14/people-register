"use client";
import { MainForm } from "./components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainForm />
    </main>
  );
}
