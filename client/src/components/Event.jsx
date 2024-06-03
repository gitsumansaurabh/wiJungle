import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsync } from "./dataSlice";
import React, { useEffect } from "react";
import { Bar, Doughnut, Scatter, Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

export default function Event() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);

  const event = ["alert", "ssh", "dns", "fileinfo", "http"];

  const freq = event.map((x) => {
    let temp = 0;
    data.forEach((d) => {
      if (d.event_type === x) {
        temp++;
      }
    });
    return temp;
  });

  return (
    <div className="w-full h-80 px-4 py-4 my-2 grid place-items-center bg-white border border-solid border-gray-300 rounded-md">
      <Line
        data={{
          labels: event,
          datasets: [
            {
              label: "Event Frequency",
              data: freq,
              backgroundColor: ["rgba(255, 0, 0, 0.8)"],
              borderRadius: 5,
              borderColor: "#ff704d",
            },
          ],
        }}
        options={{
          // animations: {
          //   tension: {
          //     duration: 1000,
          //     easing: "linear",
          //     from: 1,
          //     to: 0,
          //     loop: true,
          //   },
          // },
          elements: {
            line: {
              tension: 0.5,
            },
          },
          plugins: {
            title: {
              text: "Event_Type",
            },
          },
        }}
      />
    </div>
  );
}
