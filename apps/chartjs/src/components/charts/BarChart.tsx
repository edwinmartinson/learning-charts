import { useMemo } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { genDataSetv1 } from "@/utils/data";
import { formatDate } from "@/utils/format";
import { type ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const dataSet = useMemo(() => genDataSetv1(), []);

  const data: ChartData<"bar"> = {
    labels: dataSet.map((data) => formatDate(data.date)),
    datasets: [
      {
        label: "Sent",
        data: dataSet.map((data) => data.sent),
        backgroundColor: "oklch(72.3% 0.219 149.579)",
      },
      {
        label: "Failed",
        data: dataSet.map((data) => data.failed),
        backgroundColor: "oklch(63.7% 0.237 25.331)",
      },
    ],
  };

  return (
    <Card className="w-full py-0">
      <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:py-0!">
          <CardTitle>Bar Chart</CardTitle>
          <CardDescription>
            Example of an bar chart using Chart.js
          </CardDescription>
        </div>

        <div className="flex flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6">
          <span className="text-muted-foreground text-xs">Total Messages</span>
          <span className="text-lg leading-none font-bold sm:text-3xl">
            {dataSet.length}
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <Bar
          options={{
            elements: {
              bar: {
                borderRadius: 4,
              },
            },
          }}
          data={data}
        />
      </CardContent>
    </Card>
  );
}
