import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
      <Head>
        <title>Basic SEO and Rendering Strategies</title>
        <link rel="sitemap" href="https://basic-seo-and-rendering-strategies.vercel.app/sitemap.xml" />
      </Head>
			<main className={`${styles.main} ${inter.className}`}>
        <h1>Basic SEO and Rendering Strategies</h1>
				<div className={styles.grid}>
					<Link href={"/seo"} className={styles.card}>
						<h2>
							SEO <span>-&gt;</span>
						</h2>
            <p>Search Engine Optimization</p>
					</Link>
          <Link href={"/csr"} className={styles.card}>
						<h2>
							CSR <span>-&gt;</span>
              <p>Client Site Rendering</p>
						</h2>
					</Link>
          <Link href={"/ssr"} className={styles.card}>
						<h2>
							SSR <span>-&gt;</span>
              <p>Server Site Rendering</p>
						</h2>
					</Link>
          <Link href={"/ssg"} className={styles.card}>
						<h2>
							SSG <span>-&gt;</span>
              <p>Static Site Generation</p>
						</h2>
					</Link>
          <Link href={"/isr"} className={styles.card}>
						<h2>
							ISR <span>-&gt;</span>
              <p>Incremental Static Regeneration</p>
						</h2>
					</Link>
					
				</div>
			</main>
		</>
	);
}
