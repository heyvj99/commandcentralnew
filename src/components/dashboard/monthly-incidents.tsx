"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

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
  { month: "January", incidents: 186 },
  { month: "February", incidents: 305 },
  { month: "March", incidents: 237 },
  { month: "April", incidents: 73 },
  { month: "May", incidents: 209 },
  { month: "June", incidents: 214 },
  { month: "July", incidents: 186 },
  { month: "August", incidents: 305 },
  { month: "September", incidents: 237 },
  { month: "October", incidents: 73 },
  { month: "November", incidents: 209 },
  { month: "December", incidents: 214 },
];

const chartConfig = {
  incidents: {
    label: "Incidents",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function MonthlyIncidents() {
  return (
    <Card className="card-container h-[500px] flex flex-col">
      <CardHeader className="shrink-0">
        <CardTitle>Monthly Incidents</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 min-h-0">
        <div className="h-full w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart
              accessibilityLayer
              data={chartData}
              width={500}
              height={300}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="incidents" fill="hsl(var(--chart-2))" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter className="shrink-0 flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total emergency incidents for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
