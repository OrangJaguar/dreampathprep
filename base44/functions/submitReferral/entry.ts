import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const payload = await req.json();
    const f = payload?.formData || {};

    // Validate required fields
    const required = [
      'referee_first_name', 'referee_last_name', 'referee_email', 'referee_phone',
      'friend_first_name', 'friend_last_name', 'friend_email', 'friend_phone',
      'friend_graduation_year'
    ];
    for (const field of required) {
      if (!String(f[field] ?? '').trim()) {
        return Response.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Save to database
    const referral = await base44.asServiceRole.entities.Referral.create({
      referee_first_name: f.referee_first_name,
      referee_last_name: f.referee_last_name,
      referee_email: f.referee_email,
      referee_phone: f.referee_phone,
      friend_first_name: f.friend_first_name,
      friend_last_name: f.friend_last_name,
      friend_email: f.friend_email,
      friend_phone: f.friend_phone,
      friend_graduation_year: f.friend_graduation_year
    });

    return Response.json({ success: true, id: referral.id });
  } catch (error) {
    console.error("submitReferral error:", error);
    return Response.json({ error: "An internal error occurred while saving your referral." }, { status: 500 });
  }
}