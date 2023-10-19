const nodemailer = require("nodemailer");

// module.exports = async (email, subject, text) => {
// 	try {
// 		const transporter = nodemailer.createTransport({
// 			host: process.env.HOST,
// 			service: process.env.SERVICE,
// 			port: Number(process.env.EMAIL_PORT)||587,
// 			secure: Boolean(process.env.SECURE)||false,
// 			auth: {
// 				user: process.env.USER,
// 				pass: process.env.PASS,
// 			},
// 		});

// 		await transporter.sendMail({
// 			from: process.env.USER,
// 			to: email,
// 			subject: subject,
// 			text: text,
// 		});
// 		console.log("email sent successfully");
// 	} catch (error) {
// 		console.log("email not sent!");
// 		console.log(error);
// 		return error;
// 	}
// };

const sendEmail=(email, subject, text)=>{
	console.log("sendEmail");
	let mailTransporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
		  user: process.env.EMAIL,
		  pass: process.env.PASS,
		},
	  });
	  console.log(process.env.USER);
	  console.log(process.env.PASS);
	let mailDetails = {
		from: "divyaba281103@gmail.com",
		to: email,
		subject: subject,
	  };
	if (text) {
		mailDetails.text = text;
	  }
	
	  mailTransporter.sendMail(mailDetails, function (err, data) {
		if (err) {
		  console.log("Error Occurs" + err);
		} else {
		  console.log("Email sent successfully");
		}
	  });
}
module.exports={sendEmail};