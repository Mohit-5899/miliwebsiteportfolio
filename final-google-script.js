function doPost(e) {
  try {
    // Your Google Spreadsheet ID (from the sheet URL)
    var SPREADSHEET_ID = "1S-NetIMG_5lJXn14aaiMhV-nYjejPzmIZziNUj5glwY";
    
    // Get the spreadsheet by ID
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Try to get the "Form Responses" sheet, create if it doesn't exist
    var sheet = spreadsheet.getSheetByName("Form Responses");
    if (!sheet) {
      // Create the sheet if it doesn't exist
      sheet = spreadsheet.insertSheet("Form Responses");
      
      // Add headers
      sheet.appendRow([
        "Timestamp",
        "Name", 
        "Email",
        "Subject",
        "Message"
      ]);
      
      // Format headers
      sheet.getRange(1, 1, 1, 5).setFontWeight("bold");
    }
    
    // Get form data
    var formData = e.parameter;
    var timestamp = new Date();
    
    // Log the received data for debugging
    console.log("Received form data:", formData);
    
    // Validate that we have the required data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      throw new Error("Missing required form data: " + JSON.stringify(formData));
    }
    
    // Add data to sheet
    sheet.appendRow([
      timestamp,
      formData.name,
      formData.email,
      formData.subject,
      formData.message
    ]);
    
    // Log success
    console.log("Data saved successfully to sheet:", formData.name, formData.email);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      "result": "success",
      "message": "Data saved successfully to Google Sheets",
      "rowsAdded": 1,
      "timestamp": timestamp,
      "data": {
        "name": formData.name,
        "email": formData.email,
        "subject": formData.subject
      }
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    // Log the error for debugging
    console.error("Error in doPost:", error);
    
    // Return detailed error response
    return ContentService.createTextOutput(JSON.stringify({
      "result": "error",
      "error": error.toString(),
      "message": "Failed to save data to spreadsheet",
      "errorDetails": {
        "name": error.name,
        "message": error.message
      }
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    "status": "working", 
    "message": "Google Apps Script is deployed and ready",
    "timestamp": new Date(),
    "version": "3.0",
    "spreadsheetId": "1S-NetIMG_5lJXn14aaiMhV-nYjejPzmIZziNUj5glwY"
  })).setMimeType(ContentService.MimeType.JSON);
}