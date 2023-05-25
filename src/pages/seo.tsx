import { BackHome } from "@/components";
import Head from "next/head";
import React, { useState } from "react";

type Props = {};

export default function SEO({}: Props) {
	const [seoData, setSeoData] = useState({
		title: "SEO trang web của bạn nhanh chóng với chỉ 200k",
		description: "Chỉ với 200k bạn sẽ đưa trang web của mình lên top 3 và người dùng không thể cưỡng lại mà click vào ngay !!!",
		domain: "basic-seo-and-rendering-strategies.vercel.app",
		url: "https://basic-seo-and-rendering-strategies.vercel.app",
		image: "https://i2-vnexpress.vnecdn.net/2023/05/25/img9870-1685008777817179348867-8081-7648-1685015830.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=AcV_qGgyjlbt-sitijfLhQ"
	});
	return (
		<>
			<Head>
				<title>{seoData.title}</title>
				<meta
					name="description"
					content={seoData.description}
				/>
				<meta name="robots" content="index,follow"></meta>
				<meta property="og:site_name" content={seoData.domain}></meta>
				<meta property="og:url" content={seoData.url}></meta>
				{/* <meta property="og:type" content="website"></meta> */}
				<meta property="og:type" content="article"></meta>
				<meta
					property="og:title"
					content={seoData.title}
				></meta>
				<meta property="og:rich_attachment" content="true"></meta>
				<meta
					property="og:description"
					// @ts-ignore 
					itemprop="description"
					content={seoData.description}
				></meta>
				<meta
					property="og:image"
					// @ts-ignore 
					itemprop="thumbnailUrl"
					content={seoData.image}
				></meta>
				<meta property="og:image:height" content="354"></meta>
				<meta property="og:image:width" content="600"></meta>

				<meta name="twitter:card" content="summary_large_image"></meta>
				<meta property="twitter:domain" content={seoData.domain}></meta>
				<meta
					property="twitter:url"
					content={seoData.url}
				></meta>
				<meta
					name="twitter:title"
					content={seoData.title}
				></meta>
				<meta
					name="twitter:description"
					content={seoData.description}
				></meta>
				<meta
					name="twitter:image"
					content={seoData.image}
				></meta>
			</Head>
			<BackHome></BackHome>
			<h1>Content</h1>
		</>
	);
}
