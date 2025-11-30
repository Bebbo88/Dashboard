import React from "react";
import PieChart from "../components/PieChart";
import Header from "../components/Header";

export default function PoeChartPage() {
  return (
    <div>
      <Header
        title={"Poe Chart"}
        subTitle={"Simple Poe Chart Representation"}
      />
      <PieChart />
    </div>
  );
}
