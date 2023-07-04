import { getPost } from "@/apis/components/pose-api";
import { BackHome, Post } from "@/components";
import { post } from "@/models/post";
import Link from "next/link";

type Props = {
	postData: post
};

export default function SSR({postData}: Props) {
	return (
		<div className="container">
			<BackHome></BackHome>
			<h1>SSR</h1>
			<Link className="child-router" href='/ssr/maxage'>s-maxage=5</Link>
			<Link className="child-router" href='/ssr/maxage-stale'>s-maxage=5, stale-white-revalidate</Link>
			<Link className="child-router" href='/ssr/maxage-stale-value'>s-maxage=5, stale-white-revalidate=5</Link>
			<Post postData={postData}></Post>
		</div>
	);
}

export async function getServerSideProps() {
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(true);
		}, 1000);
	});
	const res = await getPost("axP24DD");
	return {
		props: {
			postData: res.data
		},
	};
}
