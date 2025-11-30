import React from "react";
import Geography from "../components/Geography";
import Header from "../components/Header";

export default function GeoChartPage() {
  return (
    <div>
      <Header
        title={"Geography "}
        subTitle={"Simple Giography Representation"}
      />
      <Geography />
    </div>
  );
}
