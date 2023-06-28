import { getPost } from "@/apis/components/pose-api";
import { BackHome, Post, Timer } from "@/components";
import { post } from "@/models/post";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
type Props = {
	postData: post
};

export default function ISR({postData}: Props) {
	const route = useRouter();
	if (route.isFallback) {
		return <h1>Loading...</h1>
	}

	return (
		<div className="container">
			<BackHome></BackHome>
            <Timer></Timer>
			<h1>ISR + revalidate: 10 + fallback: true</h1>
			<Post postData={postData}></Post>
		</div>
	);
}

export async function getStaticPaths() {
	return {
		paths: [
			{params: {postID: "lea11ziflg8xoiye"}}
		],
		fallback: true
	}
}

export async function getStaticProps(context : GetStaticPropsContext) {
	let id = context.params?.postID as string;
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(true);
		}, 1000);
	});
	const res = await getPost(id);
	return {
		props: {
			postData: res.data
		},
		revalidate: 10
	};
}