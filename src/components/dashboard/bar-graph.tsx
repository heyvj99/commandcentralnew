"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", area1: 186, area2: 80, area3: 120 },
  { month: "February", area1: 305, area2: 200, area3: 105 },
  { month: "March", area1: 237, area2: 120, area3: 103 },
  { month: "April", area1: 73, area2: 190, area3: 111 },
  { month: "May", area1: 209, area2: 130, area3: 107 },
  { month: "June", area1: 214, area2: 140, area3: 100 },
  { month: "July", area1: 214, area2: 140, area3: 90 },
  { month: "August", area1: 214, area2: 140, area3: 100 },
  { month: "September", area1: 214, area2: 140, area3: 110 },
  { month: "October", area1: 214, area2: 140, area3: 115 },
  { month: "November", area1: 214, area2: 140, area3: 120 },
  { month: "December", area1: 214, area2: 140, area3: 112 },
];

const chartConfig = {
  area1: {
    label: "District 1",
    color: "hsl(var(--chart-1))",
  },
  area2: {
    label: "District 2",
    color: "hsl(var(--chart-2))",
  },
  area3: {
    label: "District 3",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function BarGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area-wise Response Time</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="area1"
              stackId="a"
              fill="var(--color-area1)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="area2"
              stackId="a"
              fill="var(--color-area2)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="area3"
              stackId="a"
              fill="var(--color-area3)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Improved by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing response times by fire district for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
