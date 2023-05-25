import { getPost } from "@/apis/components/pose-api";
import { BackHome, Post, Timer } from "@/components";
import { post } from "@/models/post";
import { GetServerSidePropsContext } from "next";

type Props = {
	postData: post
};

export default function SSR({postData}: Props) {
	return (
		<div className="container">
			<BackHome></BackHome>
			<h1>SSR</h1>
            <Timer></Timer>
			<Post postData={postData}></Post>
		</div>
	);
}

export async function getServerSideProps(context : GetServerSidePropsContext) {
    context.res.setHeader('cache-control', 's-maxage=5');
	const res = await getPost("lea11ziflg8xoixq");
	return {
		props: {
			postData: res.data
		},
	};
}
