import Image from "next/image";
import Link from 'next/link'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Link href="/kitchensink">Kitchensink</Link>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
