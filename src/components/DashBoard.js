import React from "react";
import Navbar from "./Navbar";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./DashBoard.css";
import AssetBalance from "./AssetBalance";
import GrowthRate from "./GrowthRate";
import MajorInvestments from "./MajorInvestments";
import Financial from "./Financial";
import AvgExpenses from "./AvgExpenses";
import Button from "@material-ui/core/Button";
function DashBoard() {
  const data = [
    {
      name: "1",
      years: "100",
    },
    {
      name: "2",
      years: "300",
    },
    {
      name: "3",
      years: "500",
    },
    {
      name: "4",
      years: "700",
    },
    {
      name: "5",
      years: "900",
    },
    {
      name: "6",
      years: "1100",
    },
    {
      name: "7",
      years: "1300",
    },
  ];

  return (
    <div style={{display: 'flex',justifyContent: 'center'}}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="dash-div">
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          <BarChart width={800} height={350} data={data} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
            <Legend />
            <Bar dataKey="years" fill="blue" barSize={50} />
          </BarChart>
          {/* </ResponsiveContainer> */}
        </div>
        <div className="container">
          <AssetBalance
            heading="Asset Balance"
            enter="Enter amount"
            amount="1,25,000"
            updated="Last Updated"
          />
          <GrowthRate
            heading="Growth Rate"
            enter="Enter Growth Rate"
            amount="9.3%"
            updated="Inflation"
            per="6%"
          />
          <MajorInvestments
            heading="Major Investments"
            enter="Returns Generated per month"
            amount="1,25,000"
          />
          <Financial
            heading="Financial Independence"
            enter="Age"
            amount="45 Years"
            updated="Optimized"
          />
          <AvgExpenses
            heading="Average Expenses"
            enter="Amount"
            amount="25,000"
            updated="3 months average"
          />
        </div>
      </div>
      <div className="sidebar">
        <div className="cont1">
          <div className="btn">
            <Button
              style={{
                backgroundColor: "blue",
                color: "white",
                marginTop: "90%",
                marginLeft: "25%",
              }}
            >
              Learn Now
            </Button>
          </div>
        </div>
        <div className="cont2">
          <div className="btn">
            <Button
              style={{
                backgroundColor: "blue",
                color: "white",
                marginTop: "90%",
                marginLeft: "25%",
              }}
            >
              Track Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
