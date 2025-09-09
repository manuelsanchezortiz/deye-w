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

  const url = `${baseurl}/station/history`;
  const token = await getToken(settingsStorage);

  const headers = {
    "Content-Type": "application/json",
    "Authorization": "bearer " + token,
  };

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const data = {
    stationId: stationId,   // Replace with your stationId in deyecloud
    granularity: 2,                  // The granularity of the telemetry data frame
    startAt: today.toISOString().split("T")[0],   // Start date (YYYY-MM-DD)
    endAt: tomorrow.toISOString().split("T")[0]   // End date (YYYY-MM-DD)
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

    /**
     * {
    "code": "1000000",
    "msg": "success",
    "success": true,
    "requestId": "bbfa72ac2cc8a740",
    "total": 1,
    "stationDataItems": [
        {
            "generationPower": null,
            "consumptionPower": null,
            "gridPower": null,
            "purchasePower": null,
            "wirePower": null,
            "chargePower": null,
            "dischargePower": null,
            "batteryPower": null,
            "batterySOC": null,
            "irradiateIntensity": null,
            "generationValue": 0.0,
            "generationRatio": 0.0,
            "gridRatio": 0.0,
            "chargeRatio": 0.0,
            "consumptionValue": 2.4,
            "consumptionRatio": null,
            "purchaseRatio": 62.5,
            "consumptionDischargeRatio": 37.5,
            "gridValue": 0.0,
            "purchaseValue": 6.6,
            "chargeValue": 5.1,
            "dischargeValue": 0.9,
            "fullPowerHours": 0.0,
            "irradiate": null,
            "theoreticalGeneration": null,
            "pr": null,
            "cpr": null,
            "timeStamp": null,
            "year": 2025,
            "month": 9,
            "day": 9
        }
    ]
}
     */

    console.log("getStationHistory Status:", status);
    var stationDataItem = result.stationDataItems && result.stationDataItems.length > 0 ? result.stationDataItems[0] : {};
    console.log("stationDataItem:", JSON.stringify(stationDataItem, null, 2));

    return stationDataItem;
  } catch (err) {
    console.log("Error fetching station latest:", err);
    throw err;
  }
}