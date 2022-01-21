import React, { useState } from "react";
// components
import Image from "next/image";
import { Layout, Calculator } from "../src/components/index";
import hero_sec_img from "../public/dpp-hero.jpeg";
import styles from "../styles/pages/Supplemental_payment.module.scss";

export default function SupplementalPayment() {
	return (
		<Layout title='Supplemental Payment 101'>
			{" "}
			<div
				style={{ position: "relative", width: "100%", height: "338px" }}
			>
				<Image
					src={hero_sec_img}
					alt='hero '
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<Calculator />
		</Layout>
	);
}
