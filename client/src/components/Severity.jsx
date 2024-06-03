import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsync } from "./dataSlice";
import React, { useEffect } from "react";
import { Bar, Doughnut, PolarArea, Bubble } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

export default function Severity() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);

  const value = ["2", "3"];

  const freq = value.map((x) => {
    let temp = 0;
    data.forEach((d) => {
      if (d.alert?.severity === x) {
        temp++;
      }
    });
    return temp;
  });

  return (
    <div className="w-full h-80 px-4 py-4 my-2 grid place-items-center bg-white border border-solid border-gray-300 rounded-md">
      <Bubble
        data={{
          labels: value,
          datasets: [
            {
              label: "Severity Frequency",
              data: freq,
              backgroundColor: ["rgba(58, 235, 52, 0.8)"],
              borderRadius: 5,
              pointRadius: 5,
              pointHoverRadius: 8,
            },
          ],
        }}
        options={{
          animation: true,
          plugins: {
            title: {
              text: "Severity",
            },
          },
        }}
      />
    </div>
  );
}
