import { Line } from "react-chartjs-2";

const LineChart = (props: any) => {
  const data = {
    labels: props.date,
    datasets: [
      {
        label: "Sensor-1",
        data: props.sensor1,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.1)",
      },
      {
        label: "Sensor-2",
        data: props.sensor2,
        fill: false,
        backgroundColor: "rgb(0, 128, 0)",
        borderColor: "rgb(0, 128, 0,0.1)",
      },
      {
        label: "Sensor-3",
        data: props.sensor3,
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.1)",
      },
      {
        label: "Sensor-4",
        data: props.sensor4,
        fill: false,
        backgroundColor: "rgb(0, 0, 255)",
        borderColor: "rgba(0, 0, 255, 0.1)",
      },
    ],
  };
  return (
    <div>
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Sensor Data",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
