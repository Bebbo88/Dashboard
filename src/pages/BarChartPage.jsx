import React from "react";
import BarChart from "../components/BarChart";
import Header from "../components/Header";

export default function BarChartPage() {
  return (
    <div>
      <Header
        title={"Bar Chart"}
        subTitle={"Simple Bar Chart Representation"}
      />
      <BarChart />
    </div>
  );
}
