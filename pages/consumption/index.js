import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { BasePage } from "@zeppos/zml/base-page";
import { DEVICE_WIDTH, DEVICE_HEIGHT } from "../../utils/config/device";

import services from "../../app-side/services";

const logger = Logger.getLogger("fetch_api");


Page(
  BasePage({
    state: {
        stationDataItem : {}
    },
    onInit(params){        
      logger.log("Received raw params:", JSON.stringify(params));

      let parsedParams = params;
      if (typeof params === "string") {
        logger.log("Received params as string, attempting to parse");
        try {
          parsedParams = JSON.parse(params);
        } catch (e) {
          logger.log("Failed to parse params:", e);
        }
      }

      if (parsedParams && parsedParams.stationDataItem) {
        this.state.stationDataItem = parsedParams.stationDataItem;
        logger.log(
          "Assigned this.state.stationDataItem:",
          JSON.stringify(this.state.stationDataItem)
        );
      } else {
        logger.log("No stationDataItem found in params");
      }
    },
    build() {
      logger.log("receive data");
        // Ensure data exists before attempting to draw the chart
        logger.log("Received this.state.stationDataItem:", this.state.stationDataItem);
        if (this.state.stationDataItem ) {
          const chartData = this.state.stationDataItem;
          this.drawChart(chartData); // Call the drawing function with the fetched data
        } else {
          logger.log("Invalid data received");
        }
    },
    drawChart(data) {      
     logger.log("Drawing chart with totalConsumption:", data.consumptionValue);
     logger.log("Drawing chart with purchasedRatio:", data.purchaseRatio);
     logger.log("Drawing chart with batteryRatio:", data.consumptionDischargeRatio);
     logger.log("Drawing chart with generatedRatio:", 100 - data.purchaseRatio - data.consumptionDischargeRatio);

      // 1. Calculate the ratios and angles from the data
      const totalConsumption = data.consumptionValue;
      const purchasedRatio = data.purchaseRatio;
      const batteryRatio = data.consumptionDischargeRatio;
      const generatedRatio = 100 - purchasedRatio - batteryRatio;

      const purchasedAngle = (purchasedRatio / 100) * 360;
      const batteryAngle = (batteryRatio / 100) * 360;
      const generatedAngle = (generatedRatio / 100) * 360;

      const centerX = DEVICE_WIDTH / 2;
      const centerY = DEVICE_HEIGHT / 2;
      const radius = 80;
      const lineWidth = 15;

      // 2. Create the widgets dynamically
      // Arc for the gray background ring
      hmUI.createWidget(hmUI.widget.ARC, {
        x: centerX - radius,
        y: centerY - radius,
        radius: radius,
        line_width: lineWidth,
        start_angle: 0,
        end_angle: 360,
        color: 0x333333,
      });

      // Arc for "De comprada" (blue)
      hmUI.createWidget(hmUI.widget.ARC, {
        x: centerX - radius,
        y: centerY - radius,
        radius: radius,
        line_width: lineWidth,
        start_angle: 0,
        end_angle: purchasedAngle,
        color: 0x4A90E2,
      });

      // Arc for "De la batería" (orange)
      hmUI.createWidget(hmUI.widget.ARC, {
        x: centerX - radius,
        y: centerY - radius,
        radius: radius,
        line_width: lineWidth,
        start_angle: purchasedAngle,
        end_angle: purchasedAngle + batteryAngle,
        color: 0xF5A623,
      });

      // Arc for "De powerGen" (green)
      hmUI.createWidget(hmUI.widget.ARC, {
        x: centerX - radius,
        y: centerY - radius,
        radius: radius,
        line_width: lineWidth,
        start_angle: purchasedAngle + batteryAngle,
        end_angle: purchasedAngle + batteryAngle + generatedAngle,
        color: 0x417505,
      });  
    }
  })
);
