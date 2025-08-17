import { BaseSideService } from "@zeppos/zml/base-side";
import { getToken } from "./token";

async function fetchData(res, settingsStorage) {
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

AppSideService(
  BaseSideService({
    onInit() {},

    onRequest(req, res) {
      console.log("=====>,", req.method);
      if (req.method === "GET_DATA") {
        fetchData(res, settings.settingsStorage);
      }
    },

    onRun() {},

    onDestroy() {},
  })
);
