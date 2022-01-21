import Head from "next/head";
import React from "react";
import { Sidebar, Header, Footer } from "../index";
// -------------------------
export default function Layout({ children, title }) {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<div className='page-contaiener'>
				<Header />
				<div className='content-contaiener'>
					<main>{children}</main>
					<Footer />
				</div>
			</div>
		</>
	);
}
