import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Sidebar({ isMobileVersion = false, show }) {
	const handleOnClick = () => {
		console.log("on click");
	};
	const mobileClassName = `${styles.mobile_sidebar_container}  ${
		show ? styles.show : ""
	}`;
	const router = useRouter();
	return (
		<div className={isMobileVersion ? mobileClassName : styles.container}>
			{/* <button onClick={handleOnClick}>En Español</button> */}
			<div
				className={
					router.pathname == "/"
						? `${styles.active} ${styles.link}`
						: styles.link
				}
			>
				<Link href='/'>
					<a> HOME</a>
				</Link>
			</div>

			<div
				className={
					router.pathname == "/dpp_101"
						? `${styles.active} ${styles.link}`
						: styles.link
				}
			>
				<Link href='/dpp_101'>
					<a>DPP</a>
				</Link>
			</div>
			<div
				className={
					router.pathname == "/education"
						? `${styles.active} ${styles.link}`
						: styles.link
				}
			>
				<Link href='/education'>
					<a> EDUCATION</a>
				</Link>
			</div>
			<div
				className={
					router.pathname == "/lppf_101"
						? `${styles.active} ${styles.link}`
						: styles.link
				}
			>
				<Link href='/lppf_101'>
					<a> LPPFs</a>
				</Link>
			</div>
			<div
				className={
					router.pathname == "/policy_watch"
						? `${styles.active} ${styles.link}`
						: styles.link
				}
			>
				<Link href='/policy_watch'>
					<a> NEWS</a>
				</Link>
			</div>
			<div className={styles.link}>
				<Link href='/state_resources'>
					<a> RESOURCES</a>
				</Link>
			</div>
			<div
				className={
					router.pathname == "/contact"
						? `${styles.active} ${styles.link}`
						: styles.link
				}
			>
				<Link href='/contact'>
					<a> CONTACT</a>
				</Link>
			</div>
		</div>
	);
}
