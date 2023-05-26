import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [seoData, setSeoData] = useState({
		title: "Basic SEO and Rendering Strategies",
		description:
			"Demo về basic SEO và Rendering Strategies với những kiến thức bổ ích cho lập trình viên",
		domain: "basic-seo-and-rendering-strategies.vercel.app",
		url: "https://basic-seo-and-rendering-strategies.vercel.app",
		image:
			"https://hrchannels.com/uptalent/attachments/images/20220107/161241164_SEO-Leader-la-ai-5.jpg",
	});
	return (
		<>
			<Head>
				<link
					rel="sitemap"
					href="https://basic-seo-and-rendering-strategies.vercel.app/sitemap.xml"
				/>
				<title>{seoData.title}</title>
				<meta name="google-site-verification" content="VnZYix1U2Zt9tR6YvZW5CjPQ_WCo_b8iHJMItch0fik" />
				<meta name="description" content={seoData.description} />
				<meta name="robots" content="index,follow"></meta>
				<meta property="og:site_name" content={seoData.domain}></meta>
				<meta property="og:url" content={seoData.url}></meta>
				{/* <meta property="og:type" content="website"></meta> */}
				<meta property="og:type" content="article"></meta>
				<meta property="og:title" content={seoData.title}></meta>
				<meta property="og:rich_attachment" content="true"></meta>
				<meta property="og:description" content={seoData.description}></meta>
				<meta property="og:image" content={seoData.image}></meta>
				<meta property="og:image:height" content="354"></meta>
				<meta property="og:image:width" content="600"></meta>

				<meta name="twitter:card" content="summary_large_image"></meta>
				<meta property="twitter:domain" content={seoData.domain}></meta>
				<meta property="twitter:url" content={seoData.url}></meta>
				<meta name="twitter:title" content={seoData.title}></meta>
				<meta name="twitter:description" content={seoData.description}></meta>
				<meta name="twitter:image" content={seoData.image}></meta>
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
