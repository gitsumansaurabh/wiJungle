import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsync } from "./dataSlice";
import React, { useEffect } from "react";
import { Bar, Radar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

export default function SrcIp() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);

  const value = ["138.68.3.71", "67.207.67.2", "198.199.99.226"];

  const freq = value.map((x) => {
    let temp = 0;
    data.forEach((d) => {
      if (d.src_ip === x) {
        temp++;
      }
    });
    return temp;
  });

  return (
    <div className="w-full h-80 px-4 py-4 my-2 grid place-items-center bg-white border border-solid border-gray-300 rounded-md">
      <Radar
        data={{
          labels: value,
          datasets: [
            {
              label: "Src_ip Frequency",
              data: freq,
              backgroundColor: ["rgba(102, 179, 255, 0.8)"],
              borderRadius: 0,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Src_ip",
            },
          },
        }}
      />
    </div>
  );
}
