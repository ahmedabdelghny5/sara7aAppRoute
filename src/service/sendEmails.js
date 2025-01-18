

import nodemailer from "nodemailer";


export const sendEmail = async (to, subject, html, attachments) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.email,
            pass: process.env.password,
        },
    });

    await transporter.sendMail({
        from: `"3b8ny👻" <${process.env.email}>`,
        to: to ? to : "ahmedabdelghny5@gmail.com",
        subject: subject ? subject : "Hello",
        html: html ? html : "<b>Hello world?</b>",
        attachments: attachments ? attachments : []
    });

}