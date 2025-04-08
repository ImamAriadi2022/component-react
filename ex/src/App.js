import logo from './logo.svg';
import './App.css';
import TemperatureGauge from './components/Geuge'; // Tambahkan impor komponen
import React from 'react';
import GaugeChart from 'react-gauge-chart';
import GaugeChartComponent from './components/Gauge2'; // Impor komponen GaugeChartComponent

function App() {
  return (
    <div className="App">
      {/* Tambahkan komponen TemperatureGauge di sini */}
      <TemperatureGauge />
      <div className="App">
      <h2 style={{ textAlign: "center" }}>Gauge Chart Demo</h2>
      <GaugeChartComponent />
    </div>
    </div>
  );
}

export default App;