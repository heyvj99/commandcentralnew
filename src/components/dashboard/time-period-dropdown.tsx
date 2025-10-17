"use client";

import { ChevronDown } from "lucide-react";

export type TimePeriod = 
  | "last-7-days"
  | "last-30-days" 
  | "last-3-months"
  | "last-6-months"
  | "last-year"
  | "ytd";

interface TimePeriodDropdownProps {
  selectedPeriod: TimePeriod;
  onPeriodChange: (period: TimePeriod) => void;
}

const timePeriodOptions = [
  { value: "last-7-days" as const, label: "Last 7 Days" },
  { value: "last-30-days" as const, label: "Last 30 Days" },
  { value: "last-3-months" as const, label: "Last 3 Months" },
  { value: "last-6-months" as const, label: "Last 6 Months" },
  { value: "last-year" as const, label: "Last Year" },
  { value: "ytd" as const, label: "Year to Date" },
];

export function TimePeriodDropdown({ selectedPeriod, onPeriodChange }: TimePeriodDropdownProps) {
  return (
    <div className="relative">
      <select
        value={selectedPeriod}
        onChange={(e) => onPeriodChange(e.target.value as TimePeriod)}
        className="appearance-none bg-background border border-input rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
      >
        {timePeriodOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-muted-foreground" />
    </div>
  );
}
