import { hash } from "./HMAC";

/**
 * Retrieves a token from the Deye API using settingsStorage.
 * @param {object} settingsStorage - The ZeppOS settingsStorage object.
 * @returns {Promise<string>} - Resolves to the access token.
 */
export async function getToken(settingsStorage) {
  const appId = settingsStorage.getItem("deye_app_id") || "";
  const baseurl = settingsStorage.getItem("deye_url") || "";
  const appSecret = settingsStorage.getItem("deye_app_secret") || "";
  const email = settingsStorage.getItem("deye_email") || "";
  const password = settingsStorage.getItem("deye_password") || "";

  const passwordWith256 = hash(password);

  const url = `${baseurl}/account/token?appId=${appId}`;
  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    appSecret,
    email,
    companyId: "0",
    password: passwordWith256,
  };

  try {
    const response = await fetch({
      url,
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    const result = typeof response.body === "string" ? JSON.parse(response.body) : response.body;
    const token = result?.accessToken || result?.data?.token;
    if (!token) {
      throw new Error(`Token not found in response: ${JSON.stringify(result)}`);
    }
    return token;
  } catch (err) {
    console.log("Error retrieving token:", err);
    throw err;
  }
}