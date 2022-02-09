const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export default async (req, res) => {
	const { firstName, lastName, email, message, organizationName } =
		req.body.input;
	const formatMessage = `
	Organization Name: ${organizationName === "" ? "none" : organizationName}\r\n
	First Name: ${firstName}\r\n
	Last Name: ${lastName}\r\n
	Email: ${email}\r\n
	message: ${message}\r\n
	
	`;

	const msg = {
		to: "fehp@fehp.org", // Change to your recipient
		from: "hello@fehp.org", // Change to your verified sender
		subject: "New FEHP Message",
		text: formatMessage,
		html: formatMessage.replace(/\r\n/g, "<br/>"),
	};

	sgMail
		.send(msg)
		.then(() => {
			console.log("Email sent");
		})
		.catch((error) => {
			return res
				.status(error.statusCode || 500)
				.json({ error: error.message });
		});

	return res.status(200).json({ error: "" });
};
