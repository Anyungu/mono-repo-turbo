import { Point } from "@influxdata/influxdb-client";
import { influxContext } from "../../configs/influx-db-conntect";
import { WaterMeterDecoded } from "../../models/water-meter";
import { decodeBecoXWater } from "../../utils/bove";




const saveInfluxWaterData = (data: WaterMeterDecoded) => {

  let newDataPoint = new Point(data.device)
    .floatField("totalAmount", data.total)
    .stringField("payload", data.payload)
    .tag("device", data.device)



  //add all alarms
  Object.entries(data.alarms).forEach(([key, value]) => {
    newDataPoint.booleanField(key, value)
  })

  influxContext().writeApi.writePoint(newDataPoint)
};


export const handleWaterMeterdata = (data: string, device: string) => {

  const decoded: WaterMeterDecoded = decodeBecoXWater(data, device)
  saveInfluxWaterData(decoded)

}

