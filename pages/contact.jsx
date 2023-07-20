import React from "react";
// components
import Image from "next/image";
import { Layout } from "../src/components/index";

import ContactForm from "../src/components/contactPage/ContactForm";
import styles from "../styles/pages/Contact.module.scss";
import { Collapse } from "antd";
const { Panel } = Collapse;
// styles

// ------------------------

export default function Contact() {
	// test
	return (
		<Layout title='Contact Page'>
			<div
				style={{ position: "relative", width: "100%", height: "338px" }}
			>
				<Image
					src='https://website-content.nyc3.digitaloceanspaces.com/images/contact.jpeg'
					alt='hero '
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className={styles.inner_container}>
				<div className={styles.title_container}>
					<h1 className={`${styles.main_title} font_tino_regular`}>
						Contact
					</h1>
				</div>

				<Collapse className={styles.collapse_container}>
					<Panel header='About' key='1'>
						<p>
							Florida Essential Healthcare Partnerships (FEHP) is a 501(c)(4) advocacy and education non-profit organization created to support sound Medicaid policy with a key focus on Medicaid supplemental payments and Medicaid managed care directed payment programs. FEHP was created to advocate and educate members on issues impacting Medicaid financing, including changes in legislation, regulations and guidance from federal and state government, and opportunities for additional reimbursement. FEHP supports policies that strengthen the health care safety-net system, and improve access to, and the availability, delivery, efficiency, and funding of, quality healthcare services within the State of Florida.
						</p>
					</Panel>
					<Panel header='FEHP Board' key='2'>
						<p>
						    FEHP allows Florida’s nonpublic hospitals to have a
							collective voice before all levels of government
							focused on sound Medicaid policy. FEHP represents a
							broad collection of Florida providers. The members
							of FEHP are:
						</p>
						<div
							className={`${styles.board_container} font_nunito_regular`}
						>
							<div>
								<div>
									<span>Acadia |</span>
									<span>AdventHealth |</span>
									<span>Ascension Florida |</span>
									<span>Baptist Health Jacksonville |</span>
									<span>Baptist South Florida</span>
								</div>
								<div>
									{" "}
									<span>Community Health Services |</span>
									<span>Health First |</span>
									<span>Nicklaus Children's |</span>
									<span>Tenet |</span>
								</div>
								<div>
									<span> Orlando Health |</span>
									<span> Tampa General Hospital |</span>
									<span>UF Health Shands Hospital |</span>
									<span>Universal Health Services</span>
								</div>
							</div>
						</div>
					</Panel>
				</Collapse>
				<h3 className={styles.sub_title}>Contact</h3>

				<div className={styles.form_container}>
					<div className={styles.contact_form_text}>
						<p className={styles.text_italic}>
							If you have any questions that we haven’t been able
							to answer or you would like more information about
							Florida’s DPP, we would love to hear from you!
							Please complete the form at the bottom of this page
							and a member of our team will be in touch.
						</p>
					</div>

					<ContactForm />
				</div>
			</div>
		</Layout>
	);
}
