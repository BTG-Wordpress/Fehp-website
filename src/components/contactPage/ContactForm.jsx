import React, { useState } from "react";
import { Form, Input, Button, Typography, Spin, notification } from "antd";
import styles from "../../../styles/pages/Contact.module.scss";

const NOTIFICATION_DETAILS = {
	success: {
		message: "Message Submitted!",
		description:
			"We've got your information. Our team will get in touch you shortly!",
	},
	error: {
		message: "Something went wrong!",
		description: "Please try again later or email us to tehp@tehp.org",
	},
};
const ContactForm = () => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const showNotification = (type, details) => {
		notification[type]({
			message: details.message,
			description: details.description,
		});
	};
	const handleSubmission = React.useCallback(
		(result) => {
			if (result.error) {
				showNotification("error", NOTIFICATION_DETAILS.error);
			} else {
				showNotification("success", NOTIFICATION_DETAILS.success);
				form.resetFields();
			}
		},
		[form]
	);

	const UseContactUs = async (data) => {
		const url = "http://localhost:3000/api/contact";

		const submitRequest = async (reqBody) => {
			try {
				const res = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ input: reqBody }),
				});
				const json = await res.json();
				return { response: json, error: undefined };
			} catch (error) {
				return { response: undefined, error: error };
			}
		};

		return await submitRequest(data);
	};
	const onSubmit = React.useCallback(async () => {
		let values;
		try {
			values = await form.validateFields();
			console.log(values);
		} catch (errorInfo) {
			return;
		}
		setLoading(true);
		const result = await UseContactUs(values);
		handleSubmission(result);
		setLoading(false);
	}, [form, handleSubmission]);

	return (
		<div className={styles.contact_form}>
			<Spin spinning={loading}>
				<Form
					name='contact-us'
					layout='vertical'
					form={form}
					style={{
						marginTop: 20,
						paddingBottom: 10,
						width: "100%",
					}}
				>
					<Form.Item
						label='Organization Name'
						name='organizationName'
						style={{
							width: "100%",
						}}
					>
						<Input placeholder='Organization Name' />
					</Form.Item>
					<Form.Item
						label='First Name'
						name='firstName'
						required
						tooltip='This is a required field'
						style={{
							width: "100%",
						}}
						rules={[
							{
								required: true,
								message: "Please enter your first name!",
							},
						]}
					>
						<Input placeholder='First Name' />
					</Form.Item>
					<Form.Item
						label='Last Name'
						name='lastName'
						required
						tooltip='This is a required field'
						rules={[
							{
								required: true,
								message: "Please enter your last name!",
							},
						]}
					>
						<Input placeholder='Last Name' />
					</Form.Item>
					<Form.Item
						label='Email'
						name='email'
						required
						tooltip='This is a required field'
						rules={[
							{
								required: true,
								message: "Please enter your email!",
								type: "email",
							},
						]}
					>
						<Input placeholder='Email' />
					</Form.Item>
					<Form.Item
						label='Type your message here'
						name='message'
						required
						tooltip='This is a required field'
						rules={[
							{
								required: true,
								message: "Message is a required field!",
							},
						]}
					>
						<Input.TextArea
							placeholder='Message ...'
							autoSize={{ minRows: 4, maxRows: 6 }}
						/>
					</Form.Item>
					<Form.Item>
						<Button type='primary' onClick={onSubmit}>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Spin>
		</div>
	);
};

export default ContactForm;
