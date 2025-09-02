import { google } from 'googleapis'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export class GoogleSheetsService {
  private sheets: any
  private auth: any

  constructor() {
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')

    if (!clientEmail || !privateKey) {
      throw new Error('Missing required Google Sheets credentials')
    }

    console.log('Client Email:', clientEmail)
    console.log('Private Key exists:', !!privateKey)
    console.log('Private Key starts with:', privateKey.substring(0, 50))

    // Try alternative approach with credentials object
    this.auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    this.sheets = google.sheets({ version: 'v4', auth: this.auth })
  }

  async appendContactFormData(data: ContactFormData): Promise<any> {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SHEET_ID
    
    if (!spreadsheetId) {
      throw new Error('Google Sheets ID not configured')
    }

    // GoogleAuth handles authentication automatically

    const currentDate = new Date().toISOString()
    
    const values = [
      [currentDate, data.name, data.email, data.subject, data.message]
    ]

    try {
      const response = await this.sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!A:E',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values
        }
      })

      return response.data
    } catch (error) {
      console.error('Error appending to Google Sheets:', error)
      throw error
    }
  }

  async initializeHeaders(): Promise<void> {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SHEET_ID
    
    if (!spreadsheetId) {
      throw new Error('Google Sheets ID not configured')
    }

    const headers = [['Timestamp', 'Name', 'Email', 'Subject', 'Message']]

    try {
      await this.sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Sheet1!A1:E1',
        valueInputOption: 'RAW',
        resource: {
          values: headers
        }
      })
    } catch (error) {
      console.error('Error initializing headers:', error)
      throw error
    }
  }
}