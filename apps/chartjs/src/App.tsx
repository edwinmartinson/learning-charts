import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  defaults,
} from "chart.js";

import AreaChart from "./components/charts/AreaChart";
import LineChart from "./components/charts/LineChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import BarChart from "./components/charts/BarChart";
import PieChart from "./components/charts/PieChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

defaults.maintainAspectRatio = true;
defaults.responsive = true;

defaults.plugins.title.display = false;
defaults.plugins.legend.position = "bottom";

export default function App() {
  return (
    <main className="mx-auto max-w-4xl py-10">
      <Tabs className="gap-6" defaultValue="AREA">
        <TabsList>
          <TabsTrigger value="AREA">Area Chart</TabsTrigger>
          <TabsTrigger value="LINE">Line Chart</TabsTrigger>
          <TabsTrigger value="BAR">Bar Chart</TabsTrigger>
          <TabsTrigger value="PIE">Pie Chart</TabsTrigger>
          <TabsTrigger value="RADIAL">Radial Chart</TabsTrigger>
        </TabsList>

        <TabsContent value="AREA">
          <AreaChart />
        </TabsContent>
        <TabsContent value="LINE">
          <LineChart />
        </TabsContent>
        <TabsContent value="BAR">
          <BarChart />
        </TabsContent>
        <TabsContent value="PIE">
          <PieChart />
        </TabsContent>
        <TabsContent value="RADIAL"></TabsContent>
      </Tabs>
    </main>
  );
}
