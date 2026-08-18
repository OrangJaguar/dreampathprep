import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';
import { secrets } from 'base44:runtime';

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const payload = await req.json();

    // Verify password against stored secret
    const adminPassword = secrets.get("ADMIN_PASSWORD");
    if (!adminPassword) {
      return Response.json({ error: "Admin password not configured." }, { status: 500 });
    }
    if (payload?.password !== adminPassword) {
      return Response.json({ error: "Invalid password." }, { status: 401 });
    }

    // Fetch both record sets (newest first), up to 500 each
    const quizResponses = await base44.asServiceRole.entities.QuizResponse.list('-created_date', 500);
    const referrals = await base44.asServiceRole.entities.Referral.list('-created_date', 500);

    return Response.json({
      success: true,
      quizResponses: quizResponses || [],
      referrals: referrals || []
    });
  } catch (error) {
    console.error("getAdminData error:", error);
    return Response.json({ error: "An internal error occurred." }, { status: 500 });
  }
}