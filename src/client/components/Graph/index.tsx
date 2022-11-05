import axios from "axios";
import React, { useEffect, useState } from "react";
import { PulseChart } from "../../../charts/PulseChart";

export default function Graph({wrapperClass}: {wrapperClass: string;}) {
  const [data, setData] = useState(null);

  const getData = async function() {
    const axiosData = await axios.get('/api/pulse/by-domain') as any;

    const preparedData = axiosData.data['stackoverflow.com'].map((d: {
        timestamp: string,
        value: number
      }) => ({
        date: new Date(d.timestamp),
        value: +d.value
      }));
    setData(preparedData);
  };


  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      const d3Chart = new PulseChart('.' + wrapperClass, data)
      d3Chart.create();
    }
  }, [data]);

  return (
    <div className={wrapperClass}></div>
  );
}
