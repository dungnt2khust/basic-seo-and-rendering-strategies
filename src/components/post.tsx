import { getPost } from "@/apis/components/pose-api";
import { post } from "@/models/post";
import React, { useEffect, useMemo, useState } from "react";

type Props = {
    postData: post
};

export function Post({postData}: Props) {
	return (
		<div className="post">
			<hr className="m-y-10" />
			<h1 className="post__title">{postData.title}</h1>
			<h3 className="post__description m-t-10">{postData.description}</h3>
			<img
				className="m-t-10"
				src={postData.imageUrl}
				alt={postData.title}
				width="100%"
				height="auto"
			/>
		</div>
	);
}
