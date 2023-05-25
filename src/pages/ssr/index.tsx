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
			<Link className="child-router" href='/ssr/maxage'>s-maxage</Link>
			<Link className="child-router" href='/ssr/maxage-stale'>s-maxage + stale-white-revalidate</Link>
			<Link className="child-router" href='/ssr/maxage-stale-value'>s-maxage + stale-white-revalidate-value</Link>
			<Post postData={postData}></Post>
		</div>
	);
}

export async function getServerSideProps() {
	const res = await getPost("lea11ziflg8xoixq");
	return {
		props: {
			postData: res.data
		},
	};
}
