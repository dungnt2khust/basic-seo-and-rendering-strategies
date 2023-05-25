import { BackHome } from "@/components";
import React from "react";

type Props = {};

export default function SSR({}: Props) {
	return (
		<>
			<BackHome></BackHome>
			<div>SSR</div>
		</>
	);
}
