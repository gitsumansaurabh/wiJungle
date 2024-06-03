import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsync } from "./dataSlice";
import React, { useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

export default function Category() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);

  const category = [
    "Potentially Bad Traffic",
    "Attempted Information Leak",
    "Misc Attack",
    "Not Suspicious Traffic",
  ];

  const freq = category.map((x) => {
    let temp = 0;
    data.forEach((d) => {
      if (d.alert?.category === x) {
        temp++;
      }
    });
    return temp;
  });

  return (
    <div className="w-full h-80 px-4 py-4 my-2 grid place-items-center bg-white border border-solid border-gray-300 rounded-md">
      <Bar
        data={{
          labels: category,
          datasets: [
            {
              label: "Category Frequency",
              data: freq,
              backgroundColor: ["rgba(255, 153, 255, 0.8)"],
              borderRadius: 5,
              borderColor: ["rgba(230, 0, 230)"],
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Category",
            },
          },
        }}
      />
    </div>
  );
}
