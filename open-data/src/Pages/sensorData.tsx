import { useState, useEffect } from "react";
import { getData } from "../Models/Apis";
import { SensorDataInterface } from "../Utility/Interface";
import { BarChart } from "./Chart";

const SensorData = () => {
  const [sensorData, setSensorData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        //setLoading(true);
        const getSensorData: SensorDataInterface = await getData();
        const keys = Object.entries(getSensorData)
          .filter(
            ([key, value]) =>
              `${key}`[value] !== "undefined" && `${key}` !== "date"
          ) //has options
          .map(([key, value]) => `${key}`);

        const values = Object.entries(getSensorData)
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
        //setLoading(false);
      } catch (err) {
        //setLoading(false);
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
