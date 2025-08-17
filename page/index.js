import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { BasePage } from "@zeppos/zml/base-page";
import {
  FETCH_BUTTON,
  FETCH_RESULT_TEXT,
} from "zosLoader:./index.[pf].layout.js";

import services from "../app-side/services";

const logger = Logger.getLogger("fetch_api");
const { STATION_HISTORY_LATEST } = services;

let textWidget;
Page(
  BasePage({
    state: {},
    build() {
      hmUI.createWidget(hmUI.widget.BUTTON, {
        ...FETCH_BUTTON,
        click_func: (button_widget) => {
          logger.log("click button");
          this.fetchData();
        },
      });
    },
    fetchData() {
      this.request({
        method: STATION_HISTORY_LATEST,
      })
        .then((data) => {
          logger.log("receive data");
          const { result = {} } = data;
          const text = JSON.stringify(result);

          if (!textWidget) {
            textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
              ...FETCH_RESULT_TEXT,
              text,
            });
          } else {
            textWidget.setProperty(hmUI.prop.TEXT, text);
          }
        })
        .catch((res) => {});
    },
  })
);
