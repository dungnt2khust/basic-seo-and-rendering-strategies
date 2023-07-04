import { BackHome } from "@/components";
import Link from "next/link";
import React from "react";

type Props = {};

export default function ISR({}: Props) {
	return (
		<div className="container">
			<BackHome></BackHome>
			<h1>ISR </h1>
			<Link
				className="child-router"
				href="/isr/fallback-false/axP24DD"
			>
				fallback:false
			</Link>
			<Link
				className="child-router"
				href="/isr/fallback-blocking/axP24DD"
			>
				fallback:blocking
			</Link>
			<Link className="child-router" href="/isr/fallback-true/axP24DD">
				fallback:true
			</Link>
		</div>
	);
}
