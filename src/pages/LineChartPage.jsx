import React from "react";
import LineChart from "../components/LineChart";
import Header from "../components/Header";

export default function LineChartPage() {
  return (
    <div>
      <Header
        title={"Line Chart"}
        subTitle={"Simple Line Chart Representation"}
      />
      <LineChart />
    </div>
  );
}
