"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis, Legend } from "recharts";

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
} from "@/components/ui/chart";
const chartData = [
  { month: "January", currentYear: 186, previousYear: 80 },
  { month: "February", currentYear: 305, previousYear: 200 },
  { month: "March", currentYear: 237, previousYear: 120 },
  { month: "April", currentYear: 73, previousYear: 190 },
  { month: "May", currentYear: 209, previousYear: 130 },
  { month: "June", currentYear: 214, previousYear: 130 },
  { month: "July", currentYear: 134, previousYear: 112 },
  { month: "August", currentYear: 154, previousYear: 154 },
  { month: "September", currentYear: 140, previousYear: 123 },
  { month: "October", currentYear: 125, previousYear: 156 },
  { month: "November", currentYear: 135, previousYear: 132 },
  { month: "December", currentYear: 139, previousYear: 123 },
];

const chartConfig = {
  currentYear: {
    label: "Current Year",
    color: "hsl(var(--chart-1))",
  },
  previousYear: {
    label: "Previous Year",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function ResponseTime() {
  return (
    <Card className="card-container h-[500px] flex flex-col">
      <CardHeader className="shrink-0">
        <CardTitle>Response Time</CardTitle>
        <CardDescription>January - December 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 min-h-0">
        <div className="h-full w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Line
                dataKey="currentYear"
                type="natural"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={{
                  fill: "hsl(var(--chart-1))",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Line>
              <Line
                dataKey="previousYear"
                type="monotone"
                stroke="hsl(var(--chart-2))"
                strokeDasharray="5 5"
                strokeWidth={2}
                dot={{
                  fill: "hsl(var(--chart-2))",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Line>
              <Legend />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter className=" shrink-0 flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Improved by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing average response times for the last 12 months
        </div>
      </CardFooter>
    </Card>
  );
}
