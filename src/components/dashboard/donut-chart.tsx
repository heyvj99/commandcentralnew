"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "Structure Fires", visitors: 275, fill: "hsl(var(--chart-1))" },
  { browser: "Medical Emergencies", visitors: 200, fill: "var(--color-chart-2)" },
  { browser: "Vehicle Accidents", visitors: 187, fill: "var(--color-chart-3)" },
  { browser: "Hazardous Materials", visitors: 173, fill: "var(--color-chart-4)" },
  { browser: "Other", visitors: 90, fill: "var(--color-chart-5)" },
];

const chartConfig = {
  visitors: {
    label: "Incidents",
  },
  "Structure Fires": {
    label: "Structure Fires",
    color: "hsl(var(--chart-1))",
  },
  "Medical Emergencies": {
    label: "Medical Emergencies",
    color: "hsl(var(--chart-2))",
  },
  "Vehicle Accidents": {
    label: "Vehicle Accidents",
    color: "hsl(var(--chart-3))",
  },
  "Hazardous Materials": {
    label: "Hazardous Materials",
    color: "hsl(var(--chart-4))",
  },
  "Other": {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function DonutChart() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Major Causes of Incidents</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              verticalAlign="bottom"
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm items-start">
        <div className="flex items-start gap-2 font-medium leading-none">
          Structure fires increased by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing incident breakdown for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
