import React from "react";
// components
import Image from "next/image";
import Map from "../src/components/map/Map.jsx";
import { stateInfo } from "../data/data";
import path from "path";
import { Layout } from "../src/components/index";
import fs from "fs/promises";
import hero_sec_img from "../public/lppf.jpeg";
import styles from "../styles/pages/Lppf.module.scss";
import { Collapse } from "antd";
const { Panel } = Collapse;
import Link from "next/link";
// styles

// ------------------------

export async function getStaticProps(context) {
	const filePath = path.join(process.cwd(), "data", "fl-counties.json");
	// "geojson-fl-counties.json"
	const jsonData = await fs.readFile(filePath);
	const mapJsonData = JSON.parse(jsonData);
	// console.log(mapJsonData);

	const set = new Set();

	for (let i of stateInfo) {
		set.add(i.county);
	}
	const newFeatures = mapJsonData.features.filter((ele) =>
		set.has(ele.properties.NAME)
	);

	mapJsonData.features = newFeatures;
	return {
		props: {
			stateData: stateInfo,
			countiesData: mapJsonData,
		},
	};
}
export default function HospitalMap({ stateData, countiesData }) {
	return (
		<Layout title='LPPF 101'>
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
			<div className={styles.title_container}>
				<h1 className={`${styles.main_title} font_tino_regular`}>
					Local Provider Participation Funds (LPPFs)
				</h1>
				<h1 className={`${styles.sub_title} font_nunito_regular`}>
					LPPF 101
				</h1>
				<div className={styles.span_container}>
					<span />
					<span />
				</div>
			</div>
			<Collapse className={styles.collapse_container}>
				<Panel header='What is an LPPF?' key='1'>
					<p className='font_nunito_light'>
						A Local Provider Participation Fund (LPPF) ordinance
						allows a local government to impose a uniform, non-ad
						valorem special assessment on hospitals that have a
						property interest in the jurisdiction. <br /> <br />
						Funds collected through the LPPF assessments are sent to
						the state through &nbsp;
						<Link href='/education'>
							<a className='font_nunito_light'>IGTs</a>
						</Link>
						&nbsp; to support the non-federal share of increased
						Medicaid managed-care payments for eligible hospitals.
						This non- federal share receives a federal match.
						<br /> <br />
						Currently, 15 Florida counties have adopted ordinances
						establishing LPPFs to help contribute to the non-federal
						share. They range from Escambia to Miami-Dade and
						include 8 of the 11 Medicaid Managed Care Regions in the
						State.
					</p>
					<p
						style={{ textDecoration: "underline" }}
						className='font_nunito_light'
					>
						<Link href='/education'>
							<a className='font_nunito_light'>
								Click here to learn more about how Medicaid is
								funded.
							</a>
						</Link>

						<br />
						<Link href='/education'>
							<a className='font_nunito_light'>
								Click here to learn more about the role of LPPFs
								in the DPP.
							</a>
						</Link>
					</p>
				</Panel>
			</Collapse>
			<div className={styles.title_container}>
				<h3 className={`${styles.main_title} font_tino_regular`}>
					LPPF Map and Local Resources
				</h3>
				<div className={styles.span_container}>
					<span />
					<span />
				</div>
			</div>
			<Map stateData={stateData} countiesData={countiesData} />
		</Layout>
	);
}
