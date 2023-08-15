import React, { useState } from "react";
// components
import { Layout, Calculator } from "../src/components/index";
import Link from "next/link";

// styles
import styles from "../styles/pages/Home.module.scss";
import ReactModal from "react-modal";
import Image from "next/image";
import { CloseOutlined } from "@ant-design/icons";
// ------------------------

export default function Home() {
	const [showModal, setShowModal] = useState(false);
	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};
	return (
		<Layout title='FEHP - Home'>
			<div
				style={{ position: "relative", width: "100%", height: "338px" }}
			>
				<Image
					src='/home-min.jpeg'
					alt='hero '
					layout='fill'
					objectFit='cover'
				/>
			</div>

			<div className={styles.main_text_container}>
				<div className={styles.info_container}>
					<div className={styles.text_title}>
						<h3 className='font_nunito_heavy'>
							WHO WE ARE
						</h3>
						<div className={styles.span_container}>
							<span />
							<span />
						</div>
					</div>
					<p className='content-text text_justify'>
						Florida Essential Healthcare Partnerships (FEHP) is an
						advocacy and education non-profit organization created
						by Florida’s nonpublic hospitals to be a collective
						voice before all levels of government to promote sound
						Medicaid policy. The need for collective effort by
						Florida hospitals to advocate for essential funding has
						never been greater.
						<br />
						<br />
						Nonpublic hospitals not only provide vital health care
						services, but they also provide the local community with
						thousands of jobs and millions of dollars in economic
						activity. Implementation of the Medicaid Directed
						Payment Program (DPP) will help support the financial
						stability and viability of Florida hospitals and the
						access to health care they provide Floridians.
						<br />
						<br />
						The DPP has been endorsed by Governor DeSantis and
						Florida’s legislative leadership as a top priority and
						innovative solution to a difficult problem. With
						successful rollout in Year 1, the program brought $1.2
						billion in federal funding to the state. Year 2 presents
						an opportunity to grow and expand the reach of this
						important program. By helping Florida taxpayers bring
						some of the money they pay the federal government back
						into the state, this innovative solution ensures that
						Florida can continue being a national leader in health
						care and medical service.
					</p>
					{/* <span className='content-text'>
						Donald Lee, President
					</span>

					<br />
					<span className='content-text'>
						Florida Essential Healthcare Partnerships
					</span> */}
					<br />
					<Link href='/dpp_101'>
						<a
							className='content-text'
							style={{ fontStyle: "italic", fontSize: "14px" }}
						>
							{" "}
							Click here to learn more about the DPP
						</a>
					</Link>
				</div>
				<div className={styles.info_container_right}>
					<div className={styles.text_title}>
						<h3 className='font_nunito_heavy'>POLICY WATCH</h3>
						<div className={styles.span_container}>
							<span />
							<span />
						</div>
					</div>

					<div>
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
					<br />
					<div>
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
					<br />
					<div>
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
					<br />
					<div>
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
					<br />
					<div>
						<a
							href='https://bullpenstrategygroup.box.com/v/fehp-managed-care'
							target='_blank'
							className='font_nunito_regular'
						>
							Medicaid Managed Care Proposed Rule Comment Letters
						</a>{" "}
						{/* <span className='font_nunito_light'>
							{" "}
							– Miami’s Community News (09/13/2021)
						</span> */}
					</div>
				</div>
			</div>
			<div className={styles.spotlight_container}>
				<div className={styles.text_title}>
					<h3 className='font_nunito_heavy'>SPOTLIGHT</h3>
					<div className={styles.span_container}>
						<span />
						<span />
					</div>
				</div>
				<div className={styles.spotlight_inner_container}>
					<div className={styles.spotlight_info_container}>
						<h5 className={styles.spotlight_info_title}>
							EDUCATION
						</h5>

						<Link href='/dpp_101'>
							<a className='content-text'> DPP 101</a>
						</Link>
						<Link href='/lppf_101'>
							<a className='content-text'> LPPF 101</a>
						</Link>
						<Link href='/education'>
							<a className='content-text'> Medicaid 101</a>
						</Link>
					</div>
					<div className={styles.spotlight_info_container}>
						<h5 className={styles.spotlight_info_title}>
							STATE & FEDERAL RESOURCES
						</h5>

						<a
							href='https://ahca.myflorida.com/'
							target='_blank'
							className='content-text'
						>
							Agency for Healthcare Administration
						</a>
						<a
							href='https://www.cms.gov/'
							target='_blank'
							className='content-text'
						>
							Centers for Medicare & Medicaid Services
						</a>
						<a
							href='https://www.hhs.gov/'
							target='_blank'
							className='content-text'
						>
							U.S. Department of Health & Human Services
						</a>
					</div>
					<div className={styles.spotlight_info_container}>
						<h5 className={styles.spotlight_info_title}>
							FEHP RESOURCES
						</h5>

						<button onClick={handleOpenModal}>
							<span
								className='font_nunito_regular'
								style={{ color: "#1890ff" }}
							>
								Supplemental Payment Calculator
							</span>
						</button>
					</div>
				</div>
			</div>
			<ReactModal
				isOpen={showModal}
				contentLabel='Calculator'
				onRequestClose={handleCloseModal}
				shouldCloseOnOverlayClick={true}
				className='Modal'
				overlayClassName='Overlay'
			>
				<Calculator />
				<CloseOutlined
					className='modal_close_icon'
					onClick={handleCloseModal}
				/>
			</ReactModal>
		</Layout>
	);
}
