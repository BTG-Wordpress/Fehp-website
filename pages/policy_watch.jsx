import React from "react";
// components
import Image from "next/image";
import { Layout } from "../src/components/index";
import hero_sec_img from "../public/policy_watch.jpeg";
import styles from "../styles/pages/PolicyWatch.module.scss";

// ------------------------

export default function HospitalMap() {
	return (
		<Layout title='Policy Watch'>
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
			<div className={styles.page_container}>
				<h1 className={`${styles.main_title} font_tino_regular`}>
					Policy Watch
				</h1>
				<div className={styles.info_container}>
					<div style={{ marginBottom: "6px" }}>
						<span className='font_nunito_regular'>
							Florida Tax Watch Medicaid DPP &nbsp;
						</span>
						<a
							href='https://floridataxwatch.org/Research/Full-Library/ArtMID/34407/ArticleID/19046/Addressing-the-Medicaid-Funding-Gap-Through-a-Directed-Payment-Program'
							target='_blank'
							className=' font_nunito_regular'
						>
							(Click Here to Download)
						</a>
						<span className='font_nunito_light'>
							{" "}
							&nbsp;(05/27/2021)
						</span>
					</div>
					<div style={{ marginBottom: "6px" }}>
						<a
							href='https://www.hernandosun.com/2021/09/06/county-approves-ordinance-taxing-local-hospitals-fill-federal-medicaid-reimbursement-gap/'
							target='_blank'
							className='font_nunito_regular'
						>
							County approves ordinance taxing local hospitals to
							fill federal Medicaid reimbursement gap{" "}
						</a>{" "}
						<span className='font_nunito_light'>
							{" "}
							– Hernando Sun (09/06/2021)
						</span>
					</div>
					<div style={{ marginBottom: "6px" }}>
						<a
							href='https://www.miamitodaynews.com/2021/09/07/county-throws-lifeline-to-hospitals-drowning-in-medicaid/#:~:text=Miami%2DDade%20County%20now%20has,take%20effect%20in%20ten%20days'
							target='_blank'
							className='font_nunito_regular'
						>
							County throws lifeline to hospitals drowning in
							Medicaid
						</a>{" "}
						<span className='font_nunito_light'>
							– Miami Today (09/07/2021)
						</span>
					</div>
					<div style={{ marginBottom: "6px" }}>
						<a
							href='https://communitynewspapers.com/biscayne-bay/local-hospitals-to-receive-additional-funds-to-serve-low-income-residents/'
							target='_blank'
							className='font_nunito_regular'
						>
							Local hospitals to receive additional funds to serve
							low income residents
						</a>{" "}
						<span className='font_nunito_light'>
							{" "}
							– Miami’s Community News (09/13/2021)
						</span>
					</div>
				</div>
			</div>
		</Layout>
	);
}
