import nodemailer from "nodemailer";

// Escape user input before inserting it into email HTML
const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    })[c]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.name || !body.email || !body.message) {
            return Response.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }
        if (!EMAIL_RE.test(body.email)) {
            return Response.json(
                { error: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error("Contact form error: GMAIL_USER or GMAIL_APP_PASSWORD is not set");
            return Response.json(
                { error: "Failed to send message. Please try again." },
                { status: 500 }
            );
        }

        const name = escapeHtml(body.name);
        const email = escapeHtml(body.email);
        const budget = body.budget ? escapeHtml(body.budget) : "";
        const message = escapeHtml(body.message);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
            // Only relax cert checks locally (e.g. antivirus/proxy injecting a self-signed cert)
            ...(process.env.NODE_ENV !== "production" && {
                tls: { rejectUnauthorized: false },
            }),
        });

        // Email to YOU (the business owner)
        await transporter.sendMail({
            from: `"BloomScript Contact Form" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            replyTo: body.email,
            subject: `New Project Inquiry from ${body.name}`,
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
            to: body.email,
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
