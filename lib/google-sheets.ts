import { google } from "googleapis";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;

function getAuth() {
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!key) throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY not set");
  const creds = JSON.parse(key);
  return new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function appendRow(values: string[]) {
  if (!SHEET_ID) throw new Error("GOOGLE_SHEET_ID not set");
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Sheet1!A:A",
    valueInputOption: "RAW",
    requestBody: { values: [values] },
  });
}

export async function getRows(range = "Sheet1!A:K") {
  if (!SHEET_ID) throw new Error("GOOGLE_SHEET_ID not set");
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range,
  });
  return res.data.values || [];
}
