import Image from "next/image";
import styles from "./page.module.css";
import Input from "@/component/Input";

export default function Home() {
  return (
    <main className={styles.main}>
      <Input />
    </main>
  );
}
