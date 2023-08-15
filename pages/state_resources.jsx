import React from "react";
// components
import Image from "next/image";
import { Layout, Calculator } from "../src/components/index";
import hero_sec_img from "../public/resources.jpeg";
import styles from "../styles/pages/State_resource.module.scss";
import { Collapse } from "antd";
const { Panel } = Collapse;

// ------------------------

export default function HospitalMap() {
	return (
		<Layout title='FEHP - Resources'>
			<div
				style={{ position: "relative", width: "100%", height: "338px" }}
				className={styles.hero_img}
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
					Resources
				</h1>

				<Collapse className={styles.collapse_container}>
					<Panel header=' State Resources' key='1'>
						<div className={styles.info_container}>
							<a
								href='/SMMC Region map.pdf'
								target='_blank'
								className='font_nunito_regular'
							>
								Statewide Medicaid Managed Care Map
							</a>

							<a
								href='https://ahca.myflorida.com/'
								target='_blank'
								className='font_nunito_regular'
							>
								Agency for Healthcare Administration
							</a>
						</div>
					</Panel>
					<Panel header=' Federal Resources' key='2'>
						<div className={styles.info_container}>
							<a
								href='https://www.cms.gov/'
								target='_blank'
								className='font_nunito_regular'
							>
								Centers for Medicare & Medicaid Services
							</a>
							<a
								href='https://www.hhs.gov/'
								target='_blank'
								className='font_nunito_regular'
							>
								U.S. Department of Health & Human Services
							</a>
						</div>
					</Panel>
					{/* <Panel header='FEHP Resources' key='3'>
						<h3
							className={`${styles.sub_title} font_nunito_regular`}
						>
							Supplemental Payment Calculator
						</h3>
						<Calculator />
					</Panel> */}
				</Collapse>
			</div>
		</Layout>
	);
}
