import { useMemo } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { genDataSetv2 } from "@/utils/data";
import { formatDate } from "@/utils/format";
import { type ChartData } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function PieChart() {
  const dataSet = useMemo(() => genDataSetv2(), []);

  const data: ChartData<"pie"> = {
    labels: dataSet.map((data) => data.status),
    datasets: [
      {
        data: dataSet.map((data) => data.count),
        backgroundColor: [
          "oklch(72.3% 0.219 149.579)",
          "oklch(63.7% 0.237 25.331)",
          "oklch(55.1% 0.027 264.364)",
        ],
      },
    ],
  };

  return (
    <Card className="w-full py-0">
      <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:py-0!">
          <CardTitle>Pie Chart</CardTitle>
          <CardDescription>
            Example of an pie chart using Chart.js
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
        <Pie data={data} />
      </CardContent>
    </Card>
  );
}
