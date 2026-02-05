import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const payload = await req.json();

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

        // Get access token for Google Sheets
        const accessToken = await base44.asServiceRole.connectors.getAccessToken("googlesheets");

        // Create spreadsheet row data
        const timestamp = new Date().toISOString();
        const rowData = [
            timestamp,
            payload.formData.name,
            payload.formData.email,
            payload.formData.phone,
            payload.formData.school,
            payload.answers.grade,
            payload.answers.career,
            payload.answers.academics,
            payload.answers.narrative,
            payload.answers.financial
        ];

        // Append to Google Sheet
        const sheetId = Deno.env.get("GOOGLE_SHEET_ID");
        console.log("Sheet ID:", sheetId);
        console.log("Access Token:", accessToken ? "Present" : "Missing");
        console.log("Row Data:", rowData);
        
        const sheetResponse = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Responses!A:J:append?valueInputOption=RAW`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    values: [rowData]
                })
            }
        );

        console.log("Google Sheets Response Status:", sheetResponse.status);
        const responseText = await sheetResponse.text();
        console.log("Google Sheets Response:", responseText);

        if (!sheetResponse.ok) {
            throw new Error(`Google Sheets error: ${responseText}`);
        }

        return Response.json({ 
            success: true,
            id: quizResponse.id,
            sheetResponse: responseText
        });
    } catch (error) {
        return Response.json({ 
            error: error.message 
        }, { status: 500 });
    }
});