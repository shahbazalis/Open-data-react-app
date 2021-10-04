import { useState, useEffect } from "react";
import { getSensorData } from "../models/apis";
import { SensorDataInterface } from "../utility/interface";
import { BarChart } from "./Chart";

const SensorData = () => {
  const [sensorData, setSensorData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const getData: SensorDataInterface = await getSensorData();
        const keys = Object.entries(getData)
          .filter(
            ([key, value]) =>
              `${key}`[value] !== "undefined" && `${key}` !== "date"
          ) //has options
          .map(([key, value]) => `${key}`);

        const values = Object.entries(getData)
          .filter(
            ([key, value]) =>
              `${key}`[value] !== "undefined" && `${key}` !== "date"
          ) //has options
          .map(([key, value]) => `${value}`);

        setSensorData({
          labels: keys.map((key) => key),
          datasets: [
            {
              label: "Value",
              data: values.map((value) => value),
              backgroundColor: [
                "#000080",
                "#800000",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
            },
          ],
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      <BarChart chartData={sensorData} />
    </div>
  );
};

export default SensorData;
