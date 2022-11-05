import axios from "axios";
import React, { useEffect, useState } from "react";
import { PulseChart } from "../../../charts/PulseChart";

export default function LastPulseGraph({wrapperClass}: {wrapperClass: string;}) {
  const [data, setData] = useState(null);
  const [chart, setD3chart] = useState<any>(null);
  const [siteName, setSitename] = useState('');

  const getData = async function() {
    const axiosData = await axios.get('/api/pulse/by-domain/latest') as any;

    const preparedData = axiosData.data.map((d: {
        timestamp: string,
        value: number,
        domain: string;
      }) => ({
        date: new Date(d.timestamp),
        value: +d.value
      }));

    setSitename(axiosData.data[0]?.domain)
    setData(preparedData);
  };


  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data && !chart) {
      const d3Chart = new PulseChart('.' + wrapperClass, data, siteName)
      setD3chart(d3Chart);
      d3Chart.create();
    }
  }, [data, chart]);

  return (
    <div className={wrapperClass}></div>
  );
}
