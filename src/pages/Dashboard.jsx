import React from "react";
import Row1 from "../components/Row1";
import Row2 from "../components/Row2";
import Row3 from "../components/Row3";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div>
      <Header title={"DASHBOARD"} subTitle={"Welcome to your dashboard"} />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}
