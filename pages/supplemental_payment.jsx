import React, { useState } from "react";
// components
import Image from "next/image";
import { Layout, Calculator } from "../src/components/index";

export default function SupplementalPayment() {
	return (
		<Layout title='Supplemental Payment 101'>
			{" "}
			<div
				style={{ position: "relative", width: "100%", height: "338px" }}
			>
				<Image
					src='https://website-content.nyc3.digitaloceanspaces.com/images/dpp-hero.jpeg'
					alt='hero '
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<Calculator />
		</Layout>
	);
}
