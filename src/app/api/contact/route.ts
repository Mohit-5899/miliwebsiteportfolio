import { NextResponse } from 'next/server'
import { GoogleSheetsService } from '@/lib/google-sheets'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Initialize Google Sheets service
    const sheetsService = new GoogleSheetsService()

    // Append data to Google Sheets
    console.log('Sending to Google Sheets:', { name, email, subject, message })
    
    const response = await sheetsService.appendContactFormData({
      name,
      email,
      subject,
      message
    })

    console.log('Google Sheets response:', response)

    return NextResponse.json(
      { 
        message: 'Form submitted successfully to Google Sheets',
        sheetsResponse: response 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error)
    return NextResponse.json(
      { error: 'Failed to submit form to Google Sheets' },
      { status: 500 }
    )
  }
}