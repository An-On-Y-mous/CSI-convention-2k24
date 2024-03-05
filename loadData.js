import { google } from "googleapis";
import fs from "fs/promises";
const scope = ["https://www.googleapis.com/auth/spreadsheets"];
var sheetId = "1Lv9ryH5pc4aCy6GKBj6DnLYpWYbEe3_wnfeC1kLcwa8";

import { addDoc, collection } from "firebase/firestore";
import { db } from "./src/lib/firebase.js";
const collectionRef = collection(db, "convention-2k24");

const addEntry = async (options) => {
  try {
    await addDoc(collectionRef, options);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error; // Rethrow the error to handle it in the caller function if needed
  }
};

(async () => {
  const keyFileContent = await fs.readFile("./sheet_cred.json", "utf8");

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(keyFileContent), // Parse the content of the key file
    scopes: scope,
  });

  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "Sheet1",
  });
  const values = data.data.values;

  values.forEach(async (val, index) => {
    const options = {
      id: index + 10000,
      name: val[2],
      college: val[3],
      number: val[4],
      email: val[5],
      LunchToken: 0,
    };
    await addEntry(options);
  });
})();
