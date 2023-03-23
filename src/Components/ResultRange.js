import React from "react";

import GaugeChart from "react-gauge-chart";
const ResultRange = ({ score }) => {
  return (
    <GaugeChart
      id="gauge-chart4"
      nrOfLevels={10}
      arcPadding={0.1}
      cornerRadius={3}
      percent={score / 100}
      className="guagechart"
      textColor="#000"
    />
  );
};

export default ResultRange;
