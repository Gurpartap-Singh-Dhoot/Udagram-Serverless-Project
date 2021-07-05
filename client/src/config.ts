// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '9egpt3n89d'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-kg0u67xp.eu.auth0.com',            // Auth0 domain
  clientId: 'yh2H3toMYmPAB6CzHxN48JcvS0tS5G71',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
