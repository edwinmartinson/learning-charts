import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { genDataSetv1 } from "@/utils/data";
import {
  ChartContainer,
  type ChartConfig,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { LineChart, XAxis, Line, CartesianGrid, LabelList } from "recharts";
import { GitCommitVertical } from "lucide-react";

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

export default function LineCard() {
  const dataSet = useMemo(() => genDataSetv1(), []);

  const formatDate = (value: string) => {
    const date = new Date(value);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="w-full py-0">
      <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:py-0!">
          <CardTitle>Line Chart</CardTitle>
          <CardDescription>
            Example of an line chart using Recharts
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
          <LineChart data={dataSet} accessibilityLayer layout="horizontal">
            <CartesianGrid vertical strokeDasharray={"5.5"} />
            <Line
              dataKey={"sent"}
              type={"natural"}
              fill="var(--color-sent)"
              stroke="var(--color-sent)"
              activeDot={{r: 6}}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
            <Line
              dataKey={"failed"}
              type={"natural"}
              fill="var(--color-failed)"
              stroke="var(--color-failed)"
              activeDot={{r: 6}}

            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
            {/*<Line*/}
            {/*  dataKey={"blocked"}*/}
            {/*  type={"natural"}*/}
            {/*  fill="var(--color-blocked)"*/}
            {/*  stroke="var(--color-blocked)"*/}
            {/*  dot={({ cx, cy, payload }) => {*/}
            {/*    if (cx == null || cy == null) {*/}
            {/*      return null;*/}
            {/*    }*/}
            {/*    const r = 24;*/}
            {/*    return (*/}
            {/*      <GitCommitVertical*/}
            {/*        key={payload.date}*/}
            {/*        x={cx - r / 2}*/}
            {/*        y={cy - r / 2}*/}
            {/*        width={r}*/}
            {/*        height={r}*/}
            {/*        fill="hsl(var(--background))"*/}
            {/*        stroke="var(--color-blocked)"*/}
            {/*      />*/}
            {/*    );*/}
            {/*  }}*/}
            {/*/>*/}
            <XAxis
              dataKey={"date"}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatDate}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              labelFormatter={(value) => formatDate(value)}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
