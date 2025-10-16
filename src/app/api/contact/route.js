import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const formData = await req.formData();
    const name = formData.get("name") || "Anonymous";
    const email = formData.get("email");
    const message = formData.get("message");
    const file = formData.get("attachment");

    if (!email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.CONTACT_RECEIVER,
      subject: `New contact from ${name}`,
      text: message,
      attachments: file
        ? [
            {
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()),
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
      }
    );
  }
};
