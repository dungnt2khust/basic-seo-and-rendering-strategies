import { getPost } from "@/apis/components/pose-api";
import { BackHome, Post } from "@/components";
import { post } from "@/models/post";
type Props = {
	postData: post
};

export default function SSG({postData}: Props) {
	return (
		<div className="container">
			<BackHome></BackHome>
			<h1>SSG</h1>
			<Post postData={postData}></Post>
		</div>
	);
}

export async function getStaticProps() {
	const res = await getPost("lea11ziflg8xoixq");
	return {
		props: {
			postData: res.data
		},
	};
}
