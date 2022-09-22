import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Ninja</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus, quos, cum dolores corrupti tenetur minima dolorem facilis illo ratione numquam aspernatur et, error tempore cupiditate. Excepturi dolore debitis ea?</p>
        <Link href="/ninjas">
          <a className={styles.btn}> See more Ninjas</a>
        </Link>
      </div>
    </>
  )
}
