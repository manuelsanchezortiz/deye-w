import { BaseSideService } from "@zeppos/zml/base-side";
import { getToken } from "./token";
import { getStationHistoryLatest } from "./stationHistoryLatest";

import services from "./services";


async function fetchToken(res, settingsStorage) {
  try {
    const token = await getToken(settingsStorage);
    
    res(null, {
      result: {token: token},
    });
  } catch (error) {
    res(null, {
      result: "ERROR",
    });
  }
};

async function fetchStationHistoryLatest(res, settingsStorage) {
  try {
    const json = await getStationHistoryLatest(settingsStorage);
    
    res(null, {
      result: json,
    });
  } catch (error) {
    res(null, {
      result: "ERROR",
    });
  }
};


AppSideService(
  BaseSideService({
    onInit() {},

    onRequest(req, res) {
      console.log("=====>", req.method);
      if (req.method === services.STATION_HISTORY_LATEST) {
        fetchStationHistoryLatest(res, settings.settingsStorage);
      } else if (req.method === services.TOKEN) {
        fetchToken(res, settings.settingsStorage);
      }
    },

    onRun() {},

    onDestroy() {},
  })
);
