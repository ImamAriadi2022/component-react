import React from "react";
import GaugeChart from "react-gauge-chart";

const GaugeChartComponent = () => {
  const value = 89; // Ubah sesuai nilai dinamis jika diperlukan
  const percentValue = value / 100;

  return (
    <div style={{ width: "350px", margin: "0 auto" }}>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={100}
        arcsLength={[percentValue, 1 - percentValue]}
        colors={["#1E90FF", "#e6e6e6"]}
        percent={percentValue}
        arcPadding={0.01}
        cornerRadius={3}
        needleColor="#464A4F"
        needleBaseColor="#464A4F"
        textColor="#000000"
        formatTextValue={() => `${value}`}
      />
      <p style={{ textAlign: "center", marginTop: "-20px", fontWeight: "bold" }}>
        # of Opportunities
      </p>
    </div>
  );
};

export default GaugeChartComponent;
