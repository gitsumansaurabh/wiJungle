import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsync } from "./dataSlice";
import React, { useEffect } from "react";
import { Bar, Doughnut, Radar, Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

export default function Signature() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);

  const signature = [
    "ET SCAN Suspicious inbound to mySQL port 3306",
    "ET SCAN Potential VNC Scan 5900-5920",
    "ET SCAN Suspicious inbound to PostgreSQL port 5432",
    "ET SCAN Suspicious inbound to MSSQL port 1433",
    "ET SCAN Suspicious inbound to Oracle SQL port 1521",
    "ET SCAN Potential VNC Scan 5800-5820",
    "ET SCAN Potential SSH Scan",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 56",
    "ET SCAN Sipvicious Scan",
    "ET CINS Active Threat Intelligence Poor Reputation IP UDP group 76",
    "ET DROP Dshield Block Listed Source group 1",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 94",
    "ET SCAN Sipvicious User-Agent Detected (friendly-scanner)",
    "ET CINS Active Threat Intelligence Poor Reputation IP UDP group 24",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 32",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 79",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 62",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 5",
    "ET COMPROMISED Known Compromised or Hostile Host Traffic TCP group 46",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 86",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 93",
    "GPL SNMP public access udp",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 49",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 44",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 92",
    "ET CINS Active Threat Intelligence Poor Reputation IP UDP group 89",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 87",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 35",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 73",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 24",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 19",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 3",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 18",
    "ET CINS Active Threat Intelligence Poor Reputation IP UDP group 67",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 77",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 67",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 45",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 76",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 57",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 4",
    "ET POLICY GNU/Linux APT User-Agent Outbound likely related to package management",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 1",
    "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 36",
  ];

  const freq = signature.map((x) => {
    let temp = 0;
    data.forEach((d) => {
      if (d.signature === x) {
        temp++;
      }
    });
    return temp;
  });

  return (
    <div className="w-full h-80 px-4 py-4 my-2 grid place-items-center bg-white border border-solid border-gray-300 rounded-md">
      <Line
        data={{
          labels: signature,
          datasets: [
            {
              label: "Signature Frequency",
              data: freq,
              backgroundColor: "#0000ff",
              borderRadius: 5,
              borderColor: "#6666ff",
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
              text: "Signature",
            },
          },
        }}
      />
    </div>
  );
}
