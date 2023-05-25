import { getPost } from "@/apis/components/pose-api";
import { BackHome, Post, Timer } from "@/components";
import { post } from "@/models/post";
import { GetStaticPropsContext } from "next";
type Props = {
	postData: post
};

export default function ISR({postData}: Props) {
	return (
		<div className="container">
			<BackHome></BackHome>
            <Timer></Timer>
			<h1>ISR + revalidate: 10 + fallback: blocking</h1>
			<Post postData={postData}></Post>
		</div>
	);
}

export async function getStaticPaths() {
	return {
		paths: [
			{params: {postID: "lea11ziflg8xoixq"}}
		],
		fallback: 'blocking'
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
