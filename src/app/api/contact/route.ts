// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate the required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the form submission (for development/testing)
    console.log('Contact form submission:', { name, email, subject, message });

    // In a production environment, you would send an email here
    // Example with Resend (commented out as it requires API key setup)
    /*
    import { Resend } from 'resend';
    
    // Initialize Resend with your API key
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Send the email
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <contact@wasimwestafrica.org>',
      to: ['recipient@example.com'], // Replace with your email
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    });
    
    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
    */

    // Return a success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully. In production, an email would be sent.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
