import React from "react";
// components
import Image from "next/image";
import { Layout } from "../src/components/index";
import { Collapse } from "antd";
import styles from "../styles/pages/Education.module.scss";
const { Panel } = Collapse;
import dpp_img from "../public/dpp.png";
// styles

// ------------------------

export default function Education() {
	return (
		<Layout title='DPP Page'>
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
			<div className={`${styles.inner_container} dpp_page`}>
				<div className={styles.title_container}>
					<h1 className={`${styles.main_title} font_tino_regular`}>
						Directed Payment Program (DPP)
					</h1>
					<div className={styles.video_container}>
						{" "}
						<video height='400' controls>
							<source
								src='https://website-content.nyc3.digitaloceanspaces.com/videos/Florida%20DPP%20V2.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
					</div>

					<h3 className={`${styles.sub_title} font_nunito_regular`}>
						DPP 101
					</h3>
				</div>
				<Collapse className={styles.collapse_container}>
					<Panel header='What is the Hospital Medicaid DPP?' key='1'>
						<p className='font_nunito_light'>
							In April 2021, the federal government approved
							Florida’s application for a Medicaid managed care
							Directed Payment Program (DPP) that will benefit
							Florida communities with more funding for health
							care providers that serve Medicaid patients. <br />{" "}
							<br />
							The Hospital Medicaid DPP is a supplemental payment
							program that provides essential funding to hospitals
							in Florida.
						</p>
					</Panel>
					<Panel header='Why is the Medicaid DPP important?' key='2'>
						<p className='font_nunito_light'>
							In Florida, hospitals are only reimbursed
							approximately $0.60 for every $1.00 they spend to
							care for Medicaid patients. The difference between
							the actual cost to provide care to a Medicaid
							beneficiary and the payment the hospital receives in
							reimbursement is the “Medicaid shortfall.” Before
							the COVID-19 pandemic, Florida’s Medicaid total
							shortfall amounted to $2.33 billion per year. The
							impact of the pandemic exacerbated this problem. The
							shortfall for Florida's hospitals now totals over $4
							billion, bringing the crisis to a boiling point. The
							DPP makes additional funding available to address
							the financial uncertainty caused by the shortfall.
							In 2021 alone, the DPP will bring a total of $1.2
							billion in federal dollars to most regions in
							Florida to help close the Medicaid shortfall.
							<br />
							<br />
							The state share of the Hospital Medicaid payment
							arrangement is partially funded through provider
							assessments levied by local governments. This
							ensures that the non-federal share for the DPP is
							paid by hospitals, not by increasing taxes on
							Florida residents. The assessment is based on the
							amount needed to fund the cost of the rate increases
							to the hospitals in that area. Revenue from the
							special assessment is deposited into a Local
							Provider Participation Fund (LPPF) and is matched
							with federal funds to provide Florida hospitals with
							supplemental Medicaid reimbursement to offset the
							shortfall.
						</p>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<a href='/SMMC Region map.pdf' target='_blank'>
								<Image src={dpp_img} alt='dpp' />
							</a>
						</div>
						<p className='font_nunito_light'>
							The DPP has been endorsed by Governor DeSantis and
							Florida’s legislative leadership as a top priority
							and an innovative solution to a difficult problem
						</p>
					</Panel>
				</Collapse>
				<div className={styles.title_container}>
					<h3 className={`${styles.sub_title} font_nunito_heavy`}>
						News
					</h3>
				</div>
				<Collapse className={styles.collapse_container}>
					<Panel header='Year 1 (2021)' key='1'>
						<p className='font_nunito_light'>
							In November 2020, Governor DeSantis included in his
							recommended budget direction for the Agency for
							Health Care Administration (AHCA) to seek approval
							from the federal government for the hospital
							Medicaid directed payment program and license for
							AHCA to request authorization from the legislature
							to move funds to implement the new program. The
							legislature adopted the Governor’s recommendation in
							both budget proviso and the budget implementing
							bill. As a result, AHCA was able to make the program
							a reality for Florida’s hospitals. <br /> <br />
							Since obtaining federal approval in April 2021,
							Florida’s DPP was successfully implemented by local
							governments across the state, ranging from Escambia
							to Miami-Dade. All public hospitals participated in
							Year 1. In addition, 15 local jurisdictions passed
							ordinances establishing non-ad valorem special
							assessments on nonpublic hospitals, facilitating
							their region’s participation in the program. As a
							result of these efforts, private hospitals in 8 of
							Florida’s 11 Medicaid managed care regions will reap
							the benefits of a uniform rate increase in
							reimbursement for Medicaid services for services
							provided from October 1, 2020 through September 30,
							2021.
						</p>
					</Panel>
					<Panel header='Year 2 (2022)' key='2'>
						<p className='font_nunito_light'>
							In advance of Florida’s 2022 legislative session,
							Governor DeSantis once again included in his
							recommended budget implementing bill authorization
							for AHCA to seek legislative authority to move funds
							to effectuate the program. The Governor’s budget can
							be accessed &nbsp;
							<a
								href='http://www.freedomfirstbudget.com/PDFLoader.htm?file=HomeFY23.pdf'
								target='_blank'
								className=' font_nunito_regular'
							>
								HERE
							</a>
							.
							<br />
							<br />
							Regarding the DPP, the recommendations state:
						</p>
						<p
							style={{ textDecoration: "underline" }}
							className='font_nunito_light'
						>
							[T]he Agency for Health Care Administration may
							submit a budget amendment, subject to the notice,
							review and objection procedures of s. 216.177,
							Florida Statutes, for the hospital direct payment
							program.
						</p>
						<p className='font_nunito_light'>
							With the legislature’s adoption of this
							recommendation, the program is once again poised for
							success—and geographic expansion—in Year 2.
						</p>
					</Panel>
				</Collapse>
			</div>
		</Layout>
	);
}
