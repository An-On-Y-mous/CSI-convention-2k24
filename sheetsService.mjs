import { google } from "googleapis";
import { config } from "dotenv";
import fs from "fs/promises"; // Import the fs module for reading the file asynchronously
config();

const scope = ["https://www.googleapis.com/auth/spreadsheets"];
var sheetId = "1IJYTaforePk8rYqjLZl2e5IWJzhOA_sG2MYr3aZw09s";
const sheetLog = "13mNaMz4hrxJYDKyMKeVtMKQbm56BYVqejNFJcxmfT10";
export default async function sheet({ values, log }) {
  // Read the content of the key file
  if (log) sheetId = sheetLog;
  const keyFileContent = await fs.readFile("./sheet_cred.json", "utf8");

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(keyFileContent), // Parse the content of the key file
    scopes: scope,
  });

  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  const data = await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId: sheetId,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    range: "Sheet1",
    resource: {
      values: values,
    },
  });

  return data.status;
}
