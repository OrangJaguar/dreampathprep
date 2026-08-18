import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';
import { secrets } from 'base44:runtime';

// Constant-time string comparison to mitigate timing attacks on the admin password
function timingSafeEqual(a, b) {
  const enc = new TextEncoder();
  const ab = enc.encode(String(a));
  const bb = enc.encode(String(b));
  if (ab.length !== bb.length) return false;
  let result = 0;
  for (let i = 0; i < ab.length; i++) {
    result |= ab[i] ^ bb[i];
  }
  return result === 0;
}

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const payload = await req.json();

    // Verify caller via shared secret (the app is public with no login,
    // so a shared secret is the correct protection mechanism here)
    const adminPassword = secrets.get("ADMIN_PASSWORD");
    if (!adminPassword) {
      return Response.json({ error: "Admin password not configured." }, { status: 500 });
    }
    if (!payload?.password || !timingSafeEqual(payload.password, adminPassword)) {
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