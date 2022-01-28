import React from "react";
// components
import Image from "next/image";
import { Layout } from "../src/components/index";
import faq_img1 from "../public/medical_101.jpeg";

import { Collapse } from "antd";
import styles from "../styles/pages/Education.module.scss";
const { Panel } = Collapse;
// styles

// ------------------------

export default function Education() {
	return (
		<Layout title='Education Page'>
			<div
				style={{ position: "relative", width: "100%", height: "338px" }}
			>
				<Image
					src='https://website-content.nyc3.digitaloceanspaces.com/images/education.jpeg'
					alt='hero '
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className={styles.inner_container}>
				<div className={styles.title_container}>
					<h1 className={styles.main_title}>Education</h1>
					<h3 className={styles.sub_title}>Medicaid 101</h3>
				</div>
				<Collapse className={styles.collapse_container}>
					<Panel header='What is Medicaid?' key='1'>
						<p>
							Medicaid is the nation's public health insurance
							program for low-income children, families, elders,
							and people with disabilities. As of September 2021,
							the Florida Medicaid program provides assistance to
							nearly 5 million Medicaid beneficiaries through a
							state-federal partnership. In addition to a vital
							source coverage, Medicaid payments and related
							programs support the state’s healthcare safety net
							and increases the state's capacity to address health
							challenges. <br /> <br />
							Medicaid plays an especially critical role for
							certain populations, providing coverage for
						</p>
						<ul>
							<li>nearly half of all births in many states</li>
							<li>83% of poor children,</li>
							<li>
								48% of children with special health care needs,
							</li>
							<li>
								45% of nonelderly adults with disabilities, and
							</li>
							<li>more than 6 in 10 nursing home residents.</li>
						</ul>
						<p>
							In fiscal year 2019-2020, Medicaid served more than
							3.81 million Medicaid-eligible Floridians— roughly
							18% of the state’s total population. Florida’s
							Medicaid program covers approximately:
						</p>

						<ul>
							<li>1 in 9 adults, ages 19-64;</li>
							<li> 3 in 7 children;</li>
							<li>4 in 7 nursing home residents;</li>
							<li>1 in 3 individuals with disabilities; and</li>
							<li>1 in 5 Medicare beneficiaries</li>
						</ul>
					</Panel>
					<Panel header='How is Medicaid Funded?' key='2'>
						<p>
							Medicaid is jointly financed by states and the
							federal government. The federal government matches
							state Medicaid spending, but the federal match rate
							varies by state based on a federal formula called
							The Federal Medical Assistance Percentage (FMAP).
							The FMAP ranges from 50% on the dollar to a high of
							78% for FY2022.
							<br />
							<br />
							In 2017, Medicaid was the second-largest item in
							state budgets. Federal Medicaid matching funds are
							the largest source of federal revenue (55.1%) in
							state budgets. Accounting for state and federal
							funds, Medicaid accounts of 26.5% of total state
							spending. Nationally, Medicaid pays for 1 in 6
							dollars in the healthcare system and 1 in 2 dollars
							in long-term services and support. <br />
							<br />
							States are obligated to contribute at least 40% of
							their Medicaid budget from state general revenue.
							The remaining 60% can come from other permissible
							sources, provided the sources are compliant with
							federal law. For example, states have some
							flexibility to use funding from transfers from local
							governments (intergovernmental transfers) or revenue
							collected from provider taxes and fees to help
							finance the state share of Medicaid. All states
							(except Alaska) have at least one provider tax in
							place, and many states have more than three.
							Provider taxes can also be known as assessments,
							fees, or mandatory payments—however regardless of
							name, all must be broad-based, uniform manner, where
							the governmental entity does not take any action to
							offset the costs of these payments or otherwise hold
							the providers harmless.
						</p>
						<a
							href='https://www.kff.org/medicaid/issue-brief/medicaid-financing-the-basics/'
							target='_blank'
						>
							<Image src={faq_img1} alt='medicaid financing' />
						</a>

						<span className='small-text'>
							Medicaid Financing: The Basics, KFF, May 07, 2021
						</span>
						<a
							href=' https://www.kff.org/medicaid/issue-brief/medicaid-financing-the-basics/'
							className='small-text'
							target='_blank'
						>
							{" "}
							https://www.kff.org/medicaid/issue-brief/medicaidfinancing-
							the-basics/ (12/17/21)
						</a>
					</Panel>
					<Panel header='What is FMAP?' key='3'>
						The Federal Medical Assistance Percentage (FMAP) is used
						to calculate the amount of federal share of state
						Medicaid program expenditures. The amount of FMAP varies
						from state to state and is updated annually.
						<br />
						<br />
						The FMAP formula is based on the ratio of the state per
						capita income to the national per capital income using
						the three most recent calendar years for which
						satisfactory data are available from the Department of
						Commerce, Bureau of Economic Analysis. The lower the
						state's average per capita income, the higher the FMAP.
						The higher the state's average per capita income, the
						lower the FMAP.
						<br />
						<br />
						All states receive at least 50% FMAP.
					</Panel>
					<Panel header='What is IGT?' key='4'>
						An intergovernmental transfer (IGT) is the transfer of
						funds from a governmental entity, such as counties,
						municipalities, local health care taxing districts, and
						providers operated by state or local governments. In
						Florida, IGTs are used to help fund the state’s share of
						Medicaid financing. The IGTs are combined with other
						state funds to draw down federal matching funds based on
						the FMAP. <br />
						<br />
						The Agency for Health Care Administration (ACHA) is
						responsible for collecting IGTs and adding those funds
						to the state’s share of the Medicaid funding in Florida.
					</Panel>
				</Collapse>
			</div>
		</Layout>
	);
}
