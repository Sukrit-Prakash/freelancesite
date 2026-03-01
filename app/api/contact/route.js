import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { name, email, budget, message } = await request.json();

        // Basic validation
        if (!name || !email || !message) {
            return Response.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email to YOU (the business owner)
        await transporter.sendMail({
            from: `"BloomScript Contact Form" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `New Project Inquiry from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 12px;">
                    <h2 style="color: #a78bfa; margin-top: 0;">New Contact Form Submission</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #94a3b8; font-size: 14px; width: 120px;">Name</td>
                            <td style="padding: 8px 0; font-weight: 600;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">Email</td>
                            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #818cf8;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">Budget</td>
                            <td style="padding: 8px 0;">${budget || "Not specified"}</td>
                        </tr>
                    </table>
                    <hr style="border: none; border-top: 1px solid #1e293b; margin: 20px 0;" />
                    <p style="color: #94a3b8; font-size: 14px; margin-bottom: 8px;">Project Description</p>
                    <p style="background: #1e293b; padding: 16px; border-radius: 8px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
            `,
        });

        // Auto-reply to the sender
        await transporter.sendMail({
            from: `"BloomScript Technologies" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "We received your message — BloomScript Technologies",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 12px;">
                    <h2 style="color: #a78bfa; margin-top: 0;">Thanks, ${name}! 👋</h2>
                    <p style="color: #94a3b8; line-height: 1.7;">
                        We've received your message and will get back to you within <strong style="color: #e2e8f0;">24 hours</strong>.
                    </p>
                    <p style="color: #94a3b8; line-height: 1.7;">
                        In the meantime, feel free to check out our work or book a free discovery call at
                        <a href="https://calendly.com/bloom-script-tech" style="color: #818cf8;">calendly.com/bloom-script-tech</a>.
                    </p>
                    <hr style="border: none; border-top: 1px solid #1e293b; margin: 24px 0;" />
                    <p style="color: #475569; font-size: 12px;">
                        BloomScript Technologies · bloom.script.tech@gmail.com
                    </p>
                </div>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return Response.json(
            { error: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}
