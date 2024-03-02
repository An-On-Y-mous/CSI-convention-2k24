import { google } from "googleapis";
import { config } from "dotenv";
import fs from "fs/promises"; // Import the fs module for reading the file asynchronously
config();

const scope = ["https://www.googleapis.com/auth/spreadsheets"];
const sheetId = "1IJYTaforePk8rYqjLZl2e5IWJzhOA_sG2MYr3aZw09s";

export default async function sheet(values) {
  // Read the content of the key file
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
