import { useState } from "react";
import { MonthlyIncidents } from "@/components/dashboard/monthly-incidents";
import MetricCards from "@/components/dashboard/metric-cards";
import ResponseTime from "@/components/dashboard/response-time";
import BarGraph from "@/components/dashboard/bar-graph";
import DonutChart from "@/components/dashboard/donut-chart";
import { TimePeriodDropdown, TimePeriod } from "@/components/dashboard/time-period-dropdown";

export default function Dashboard() {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<TimePeriod>("last-6-months");

  const handleTimePeriodChange = (period: TimePeriod) => {
    setSelectedTimePeriod(period);
  };

  return (
    <div className="dashboard-container w-full p-4 h-full overflow-y-scroll flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Fire Department Analytics</h1>
            <p className="text-muted-foreground">Real-time insights into emergency response operations and incident management</p>
          </div>
          <TimePeriodDropdown 
            selectedPeriod={selectedTimePeriod}
            onPeriodChange={handleTimePeriodChange}
          />
        </div>
      </div>
      
      <MetricCards />
      <div className="flex flex-row gap-2 w-full">
        <div className="flex-1">
          <BarGraph />
        </div>
        <div className="flex-1 h-full">
          <DonutChart />
        </div>
      </div>
      <MonthlyIncidents />
      <ResponseTime />
    </div>
  );
}
