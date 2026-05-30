import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, projectType, description, budget } = body;

    await resend.emails.send({
      from: "Eik and Stone <hello@andersbuild.com>",
      to: "info@eikandstone.com",
      replyTo: email,
      subject: `New Quote Request — ${projectType || "General Inquiry"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0f1f3d; padding: 24px 32px; border-top: 4px solid #2563a8;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">
              New Quote Request
            </h1>
          </div>
          
          <div style="background: #f4f2ee; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #dce8f5; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7880; width: 140px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #dce8f5; font-size: 15px; color: #0f1f3d;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #dce8f5; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7880;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #dce8f5; font-size: 15px; color: #0f1f3d;"><a href="mailto:${email}" style="color: #2563a8;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #dce8f5; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7880;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #dce8f5; font-size: 15px; color: #0f1f3d;"><a href="tel:${phone}" style="color: #2563a8;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #dce8f5; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7880;">Project Type</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #dce8f5; font-size: 15px; color: #0f1f3d;">${projectType}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #dce8f5; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7880;">Budget</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #dce8f5; font-size: 15px; color: #0f1f3d;">${budget}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7880; vertical-align: top; padding-top: 16px;">Description</td>
                <td style="padding: 12px 0; font-size: 15px; color: #0f1f3d; line-height: 1.7; padding-top: 16px;">${description || "No description provided"}</td>
              </tr>
            </table>
          </div>

          <div style="background: #0f1f3d; padding: 20px 32px;">
            <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 0;">
              Sent from andersbuild.com contact form
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}