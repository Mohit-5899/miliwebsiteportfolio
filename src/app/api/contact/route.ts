import { NextResponse } from 'next/server'

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

    // Create URL-encoded form data for Google Apps Script
    const params = new URLSearchParams()
    params.append('name', name)
    params.append('email', email)
    params.append('subject', subject)
    params.append('message', message)

    // Google Apps Script URL - Updated with new deployment
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwvE78pVHgJk7z37Z1t8BIZUAdvNlHScQJct3VPqCWFhvfSrUa157HYF3MgmcK5thc/exec'

    // Send to Google Apps Script
    console.log('Sending to Google Apps Script:', scriptUrl)
    console.log('Form data:', { name, email, subject, message })
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    })

    console.log('Google Apps Script response status:', response.status)
    
    // Try to get the response text to see what Google Apps Script returned
    let responseText = ''
    try {
      responseText = await response.text()
      console.log('Google Apps Script response:', responseText)
    } catch (textError) {
      console.log('Could not read response text:', textError)
    }

    // Check if we got a successful response
    if (response.ok || response.status === 200) {
      return NextResponse.json(
        { 
          message: 'Form submitted successfully to Google Sheets',
          googleResponse: responseText 
        },
        { status: 200 }
      )
    } else {
      throw new Error(`Google Apps Script returned status ${response.status}: ${responseText}`)
    }

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}