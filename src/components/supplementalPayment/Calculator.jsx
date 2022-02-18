import React, { useState } from "react";
// components
import styles from "./Calculator.module.scss";
import { Select, Input, Button } from "antd";
import { DollarCircleOutlined, CloseOutlined } from "@ant-design/icons";
import ReactModal from "react-modal";
const { Option } = Select;
// styles

// ------------------------

export default function Calculator() {
	const [showModal, setShowModal] = useState(false);
	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const [fields, setFields] = useState({
		year: "2021",
		amount: "0",
		currentOption: "Non-Federal Share",
	});
	const [res, setRes] = useState({
		grossNumber: "0",
		federalNumber: "0",
		stateNumber: "0",
	});
	const PERCENTAGE = {
		2021: { fmap: 0.6816, multiplier: 2.14 },
		2022: { fmap: 0.6723, multiplier: 2.05 },
	};
	const onYearChange = (value) => {
		console.log(value);
		setFields({ ...fields, year: value });
	};
	const onAmountOptionChange = (value) => {
		setFields({ ...fields, currentOption: value });
	};
	const numberOnChange = (e) => {
		setFields({ ...fields, amount: e.target.value });
	};
	const onButtonClick = () => {
		console.log(fields);
		let grossNumber = 0;
		let federalNumber = 0;
		let stateNumber = 0;
		// const curFmap = 0.6;
		const curFmap = parseFloat(PERCENTAGE[fields.year].fmap);
		const curMultiplier = parseFloat(PERCENTAGE[fields.year].multiplier);
		if (fields.currentOption === "Non-Federal Share") {
			grossNumber = (parseFloat(fields.amount) / (1 - curFmap)).toFixed(
				2
			);

			federalNumber = parseFloat(grossNumber) - parseFloat(fields.amount);
			stateNumber = parseFloat(grossNumber) - parseFloat(federalNumber);
		} else {
			grossNumber = parseFloat(fields.amount).toFixed(2);

			federalNumber = (parseFloat(fields.amount) * (1 - curFmap)).toFixed(
				2
			);
			stateNumber = (
				parseFloat(grossNumber) - parseFloat(federalNumber)
			).toFixed(2);
		}

		setRes({
			grossNumber: grossNumber.toLocaleString(),
			federalNumber: federalNumber.toLocaleString(),
			stateNumber: stateNumber.toLocaleString(),
		});
	};

	return (
		<div className={styles.inner_container}>
			<div className={styles.calculator_container}>
				<div className={styles.calculator_left_container}>
					<h1>Supplemental Payment Calculator</h1>
					<div className={styles.calculator_infos}>
						<div className={styles.calculator_info_year}>
							<label> Year</label>
							<Select
								defaultValue='2021'
								style={{ width: 120 }}
								onChange={onYearChange}
							>
								<Option value='2021'>2021</Option>
								<Option value='2022'>2022</Option>
							</Select>
						</div>
						<div>
							<label>Non-Federal Share</label>
							<Select
								defaultValue='Non-Federal Share'
								style={{ width: "100%", marginBottom: "12px" }}
								onChange={onAmountOptionChange}
							>
								<Option value='Non-Federal Share'>
									Non-Federal Share
								</Option>
								<Option value='Gross Payment'>
									Gross Payment
								</Option>
							</Select>
							<Input
								placeholder='Enter desired payment'
								prefix={<DollarCircleOutlined />}
								type='number'
								onChange={numberOnChange}
							/>
						</div>
					</div>
					<Button
						disabled={
							parseFloat(fields.amount) == 0 ||
							fields.amount.length == 0
						}
						type='primary'
						shape='round'
						size='large'
						style={
							parseFloat(fields.amount) != 0 &&
							fields.amount.length > 0
								? {
										background: "#223668",
										border: "none",
								  }
								: {}
						}
						onClick={onButtonClick}
					>
						Calculate
					</Button>
					<Button
						type='primary'
						shape='round'
						size='large'
						style={{
							background: "#223668",
							border: "none",
							width: "100%",
						}}
						onClick={handleOpenModal}
					>
						Explained: State Medicaid Funding
					</Button>
				</div>
				<div className={styles.calculator_right_container}>
					<div className={styles.calculation_container}>
						{" "}
						<h3 className={styles.calculation_title}>
							{" "}
							{}Gross Payment
						</h3>
						<span className={styles.calculation_number}>
							$ {res.grossNumber}
						</span>
					</div>
					<div className={styles.calculation_container}>
						{" "}
						<h3 className={styles.calculation_title}>
							{" "}
							{fields.currentOption === "Non-Federal Share"
								? "Federal Share"
								: "Non-Federal Share"}
						</h3>
						<span className={styles.calculation_number}>
							$ {res.federalNumber}
						</span>
					</div>
					<div className={styles.calculation_container}>
						{" "}
						<h3 className={styles.calculation_title}>
							{" "}
							Net Reimbursement
						</h3>
						<span className={styles.calculation_number}>
							$ {res.stateNumber}
						</span>
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
				<div className={styles.calculator_explanation_container}>
					<h2>Summary &amp; Examples:</h2>{" "}
					<p>
						The FMAP for each state defines the percentage shares of
						federal and state funding for Medicaid payments
						associated with a particular federal fiscal year
						(October 1 – September 30). If FMAP is 0.60 the federal
						share of a Medicaid payment will be 60%, and the state
						share will be 40%. In other words, in order to obtain
						federal Medicaid assistance, the state must contribute
						40 cents of each Medicaid dollar paid to a service
						provider. If FMAP is 0.60, and the state contributes $1
						toward a Medicaid payment, the federal share will be
						$1.50, for a total payment of $2.50. Thus the state
						receives a return on this dollar of 150% or a multiple
						of 1.5–sometimes referred to as the multiplier.
					</p>{" "}
					<h2>State Medicaid Funding:</h2>{" "}
					<p>
						The state portion of Medicaid payments is assumed by the
						federal authorities to be based on state and/or local
						government revenues. Routine Medicaid payments typically
						are funded through state legislative appropriations, as
						are some supplemental payments. However, many states
						fund part of their Medicaid programs through local
						governmental entities such as cities, counties, and
						hospital districts, These local governmental entities
						may implement Local Provider Participation Funds (LPPFs)
						or take other measures to raise funds allocated to
						support the nonfederal share of the Medicaid program. In
						such cases, the “state” portion of the Medicaid payment
						is sent to the state from the local entity by means of
						an on-line Inter- Governmental Transfer (IGT).
					</p>{" "}
					<h2>The Basic Formulas Revisited:</h2>{" "}
					<h3>MEDICAID PAYMENT = STATE $ / (1 – FMAP)</h3>{" "}
					<ul>
						<li>
							Example: At FMAP = .60, a state share of $1,000,000
							would support a total Medicaid payment of $1,000,000
							/ (1 – .60) = $1,000,000 / .40 = $2,500,000
						</li>
					</ul>{" "}
					<h3>THE MULTIPLIER = FMAP / (1 – FMAP)</h3>{" "}
					<ul>
						<li>
							At FMAP = .60, the multiplier is .60 / (1 – .60) =
							.60 / .40 = 1.5. Thus a state contribution of
							$1,000,000 would generate a federal contribution of
							$1,000,000 * 1.5 = $1,500,000.
						</li>
					</ul>{" "}
					<h3>REQUIRED STATE $ = MEDICAID PAYMENT * (1 – FMAP)</h3>{" "}
					<ul>
						<li>
							At FMAP = .60, a Medicaid payment of $1,000,000
							would require a state share of $1,000,000 x (1 –
							.60) = $1,000,000 x .40 = $400,000.
						</li>
					</ul>{" "}
					<h3>CALCULATOR TERMINOLOGY</h3>{" "}
					<ul>
						<li>
							“Net” refers to the payment amount that is the
							federal share only (sometimes referred to as the
							“fed match”)
						</li>{" "}
						<li>
							“Gross” refers to the entire payment amount that
							includes both federal and state shares
						</li>
					</ul>
				</div>
				<CloseOutlined
					className='modal_close_icon'
					onClick={handleCloseModal}
				/>
			</ReactModal>
		</div>
	);
}
