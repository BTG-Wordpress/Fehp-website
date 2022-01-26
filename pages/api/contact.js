import nodemailer from "nodemailer";
export default async (req, res) => {
	const { name, email, message, phone } = req.body;
	console.log(req.body);
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: "boyanliuu@gmail.com",
			pass: "Ihcivyny123",
		},
	});

	try {
		const emailRes = await transporter.sendMail({
			from: email,
			to: "lbyybl1996@gmail.com",
			subject: `Contact form submission from ${name}`,
			html: `<p>You have a new contact form submission</p><br>
		  <p><strong>Name: </strong> ${name} </p><br>
		  <p><strong>Phone: </strong> ${phone} </p><br>
		  <p><strong>Message: </strong> ${message} </p><br>

		  `,
		});

		console.log("Message Sent");
		console.log(emailRes);
	} catch (err) {
		console.log(err);
	}

	res.status(200).json(req.body);
};