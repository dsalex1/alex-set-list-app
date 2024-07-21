import { gapi } from 'gapi-script'

const CLIENT_ID = '252093619867-fgh2nphc8gbcdsljtib1ss69ctiaq0qj.apps.googleusercontent.com'
const API_KEY = 'AIzaSyDR5ik7GoUZA142kws0i-b6NtfUAivS0WM'
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
const SCOPES = 'https://www.googleapis.com/auth/drive.readonly'

// Initialize the Google API client
function initClient(resolve: () => void, reject: (error: any) => void) {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(() => {
      // Check if the user is already signed in
      if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
        resolve()
      } else {
        // If not signed in, prompt the user to sign in
        gapi.auth2
          .getAuthInstance()
          .signIn()
          .then(() => {
            resolve()
          })
      }
    })
    .catch((error: any) => {
      console.error('Error initializing Google API client', error)
      reject(error)
    })
}

type Entry = { id: string; name: string; mimeType: string; children?: Entry[] }

// Function to list PDF files in a specific folder
export async function listPdfFiles() {
  return getEntries('1Nm-TTrI-Q7KQ2z1PS2tF6r2g4zwtD2Nq')
}

async function getEntries(folderId: string) {
  const entries = (await gapi.client.drive.files
    .list({
      q: `'${folderId}' in parents`,
      fields: 'files(id, name, mimeType)', // mineType can be application/vnd.google-apps.folder' or 'application/pdf'
      pageSize: 200,
    })
    .then((response: any) => response.result.files)) as Entry[]

  for (const entry of entries) {
    if (entry.mimeType === 'application/vnd.google-apps.folder') {
      entry.children = await getEntries(entry.id)
    }
  }
  return entries
}

export function init() {
  return new Promise<void>((resolve, reject) => {
    gapi.load('client:auth2', () => initClient(resolve, reject))
  })
}
