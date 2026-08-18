import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const payload = await req.json();

    // Validate required fields — reject incomplete/empty submissions
    if (!payload?.formData?.name?.trim() || !payload?.formData?.email?.trim() ||
        !payload?.formData?.phone?.trim() || !payload?.formData?.school?.trim()) {
      return Response.json({
        error: "Missing required fields."
      }, { status: 400 });
    }

    // Save to database
    const quizResponse = await base44.asServiceRole.entities.QuizResponse.create({
      name: payload.formData.name,
      email: payload.formData.email,
      phone: payload.formData.phone,
      school: payload.formData.school,
      grade_level: payload.answers.grade,
      career_clarity: payload.answers.career,
      academics: payload.answers.academics,
      narrative: payload.answers.narrative,
      financial_confidence: payload.answers.financial
    });

    return Response.json({
      success: true,
      id: quizResponse.id
    });
  } catch (error) {
    console.error("submitQuizResponse error:", error);
    return Response.json({
      error: "An internal error occurred while saving your response."
    }, { status: 500 });
  }
}