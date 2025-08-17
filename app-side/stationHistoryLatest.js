import { getToken } from "./token";

/**
 * Fetches the latest station data from the Deye API.
 * @param {object} settingsStorage - The ZeppOS settingsStorage object.
 * @returns {Promise<object>} - Resolves to the response JSON.
 */
export async function getStationHistoryLatest(settingsStorage) {

  console.log("Calling getStationHistoryLatest ...");

  const baseurl = settingsStorage.getItem("deye_url") || "";
  const stationId = settingsStorage.getItem("deye_station_id") || "";

  const url = `${baseurl}/station/latest`;
  const token = await getToken(settingsStorage);

  const headers = {
    "Content-Type": "application/json",
    "Authorization": "bearer " + token,
  };
  const data = {
    stationId,
  };

  try {
    const response = await fetch({
      url,
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    const status = response.status;
    const result = typeof response.body === "string" ? JSON.parse(response.body) : response.body;

    console.log("getStationHistoryLatest Status:", status);
    console.log("getStationHistoryLatest Result:", result);

    return result;
  } catch (err) {
    console.log("Error fetching station latest:", err);
    throw err;
  }
}