import React, { useState } from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { Calculator } from "../index";
import { CloseOutlined } from "@ant-design/icons";
import ReactModal from "react-modal";

// ------------------------
export default function Footer() {
	const [showModal, setShowModal] = useState(false);
	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<footer className={styles.container}>
			<div className={styles.footer_info_container}>
				<div className={styles.footer_sub_container}>
					<h3 className='font_nunito_heavy'>DPP</h3>
					<Link href='/dpp_101'>
						<a className='font_nunito_regular'>DPP 101</a>
					</Link>
					<a className='font_nunito_regular'>News</a>
				</div>

				<div className={styles.footer_sub_container}>
					<h3 className='font_nunito_heavy'>Education</h3>
					<Link href='/education'>
						<a className='font_nunito_regular'>Medicaid 101</a>
					</Link>

					<button onClick={handleOpenModal}>
						<span
							className='font_nunito_regular'
							style={{ color: "#1890ff" }}
						>
							Supplemental Payments 101
						</span>
					</button>
				</div>

				<div
					className={`${styles.footer_sub_container} ${styles.footer_sub_container_third}`}
				>
					<h3 className='font_nunito_heavy'>LPPFs</h3>

					<Link href='/lppf_101'>
						<a className='font_nunito_regular'> LPPF 101</a>
					</Link>
					<Link href='/lppf_101'>
						<a className='font_nunito_regular'>
							{" "}
							LPPF Ordinances & Resolutions
						</a>
					</Link>
				</div>

				<div className={styles.footer_sub_container}>
					<h3 className='font_nunito_heavy'>News</h3>
					{/* <a>FEHP Press Releases</a> */}
					<Link href='/policy_watch'>
						<a className='font_nunito_regular'> Policy Watch</a>
					</Link>
				</div>

				<div className={styles.footer_sub_container}>
					<h3 className='font_nunito_heavy'>Resources</h3>
					<a
						href='/SMMC Region map.pdf'
						target='_blank'
						className='font_nunito_regular'
					>
						SMMC Region Map
					</a>
					<a
						href='https://ahca.myflorida.com/'
						target='_blank'
						className='font_nunito_regular'
					>
						Agency for Healthcare Administration
					</a>
					<a
						href='https://www.cms.gov/'
						target='_blank'
						className='font_nunito_regular'
					>
						CMS
					</a>
					<a
						href='https://www.hhs.gov/'
						target='_blank'
						className='font_nunito_regular'
					>
						HHS
					</a>
				</div>

				<div
					className={`${styles.footer_sub_container} ${styles.footer_sub_container_last}`}
				>
					<h3 className='font_nunito_heavy'>Contact</h3>
					<Link href='/contact'>
						<a className='font_nunito_regular'> About</a>
					</Link>
					<Link href='/contact'>
						<a className='font_nunito_regular'> FEHP Board</a>
					</Link>
					<Link href='/contact'>
						<a className='font_nunito_regular'> Contact</a>
					</Link>
				</div>
			</div>
			<span className={styles.date_text}>
				© {new Date().getFullYear()} Florida Essential Healthcare
				Partnerships
			</span>
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
		</footer>
	);
}
