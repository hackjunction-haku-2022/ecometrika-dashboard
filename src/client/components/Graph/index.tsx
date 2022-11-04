import React, { useEffect, useMemo } from "react";
import { D3Chart } from "../../../d3/D3Chart";

export default function Graph({wrapperClass}: {wrapperClass: string;}) {
  const d3Chart = useMemo(() => {
    return new D3Chart('.' + wrapperClass)
  }, [wrapperClass]);

  useEffect(() => {
    d3Chart.create();
  }, [d3Chart]);

  return (
    <div className={wrapperClass}></div>
  );
}
