import React, { useEffect, useMemo } from "react";
import { PulseChart } from "../../../charts/PulseChart";

export default function Graph({wrapperClass}: {wrapperClass: string;}) {
  const d3Chart = useMemo(() => {
    return new PulseChart('.' + wrapperClass)
  }, [wrapperClass]);

  useEffect(() => {
    d3Chart.create();
  }, [d3Chart]);

  return (
    <div className={wrapperClass}></div>
  );
}
