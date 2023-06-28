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
				href="/isr/fallback-false/lea11ziflg8xoiye"
			>
				fallback:false
			</Link>
			<Link
				className="child-router"
				href="/isr/fallback-blocking/lea11ziflg8xoiye"
			>
				fallback:blocking
			</Link>
			<Link className="child-router" href="/isr/fallback-true/lea11ziflg8xoiye">
				fallback:true
			</Link>
		</div>
	);
}
