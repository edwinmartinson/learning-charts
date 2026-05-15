import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { genDataSetv2 } from "@/utils/data";
import {
  ChartContainer,
  type ChartConfig,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { PieChart, Pie } from "recharts";

const chartConfig = {
  sent: {
    label: "Delivered",
    color: "oklch(72.3% 0.219 149.579)",
  },
  failed: {
    label: "Failed",
    color: "oklch(63.7% 0.237 25.331)",
  },
  blocked: {
    label: "Blocked",
    color: "oklch(55.1% 0.027 264.364)",
  },
} satisfies ChartConfig;

export default function PieCard() {
  const dataSet = useMemo(() => genDataSetv2(), []);

  return (
    <Card className="w-full py-0">
      <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:py-0!">
          <CardTitle>Pie Chart</CardTitle>
          <CardDescription>
            Example of an pie chart using Recharts
          </CardDescription>
        </div>

        <div className="flex flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6">
          <span className="text-muted-foreground text-xs">Total Days</span>
          <span className="text-lg leading-none font-bold sm:text-3xl">
            {dataSet.length}
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig}>
          <PieChart accessibilityLayer>
            <ChartTooltip
              content={<ChartTooltipContent nameKey={"status"} hideLabel />}
            />
            <Pie
              data={dataSet}
              dataKey={"count"}
              nameKey={"status"}
              stroke={"0"}
              // innerRadius={120}
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="var(--foreground)"
                  >
                    {payload.count}
                  </text>
                );
              }}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="status" />}
              // className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
