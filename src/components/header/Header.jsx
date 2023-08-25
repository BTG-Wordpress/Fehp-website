import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import state_img from "../../../public/fehp-new-logo.png";
import { Sidebar } from "../index";
import Link from "next/link";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export default function Header() {
	const router = useRouter();
	const [flag, setFlag] = useState(false);

	useEffect(() => {
		setFlag(false);
	}, [router.asPath]);
	return (
		<div className={styles.container}>
			<Link href='/'>
				<div style={{ cursor: "pointer" }}>
					{" "}
					<Image
						src={state_img}
						alt='FEHP state '
						width={300}
						height={100}
					/>
				</div>
			</Link>
			<Sidebar />

			<div
				className={styles.menu_burger}
				onClick={() => setFlag((prev) => !prev)}
			>
				{flag ? (
					<CloseOutlined
						style={{
							color: "#223668",
							width: "24px",
							height: "24px",
						}}
					/>
				) : (
					<MenuOutlined
						style={{
							color: "#223668",
							width: "24px",
							height: "24px",
						}}
					/>
				)}
			</div>

			<Sidebar isMobileVersion={true} show={flag} />
		</div>
	);
}
