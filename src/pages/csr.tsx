import { getPost } from "@/apis/components/pose-api";
import { BackHome, Post } from "@/components";
import { post } from "@/models/post";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
type Props = {
};


const CSR = (props: Props) => {
	const [postData, setPostData] = useState<post>({});
	useEffect(() => {
		getPost("lea11ziflg8xoixq").then((res) => {
			setTimeout(() => {
				setPostData(res.data);
			}, 1000);
		});
	}, []);

	return (
		<div className="container">
		<BackHome></BackHome>
			<h1>CSR</h1>
			<Post postData={postData}></Post>
		</div>
)};
export default dynamic(() => Promise.resolve(CSR), {
	ssr: false,
});
