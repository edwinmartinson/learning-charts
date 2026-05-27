import AreaCard from "./components/charts/AreaCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import LineCard from "./components/charts/LineCard.tsx";
import BarCardv1 from "@/components/charts/BarCardv1.tsx";
import PieCard from "@/components/charts/PieCard.tsx";
import RadialCardv1 from "@/components/charts/RadialCardv1.tsx";

export default function App() {
  return (
    <main className="mx-auto max-w-4xl py-10">
      <Tabs className="gap-6" defaultValue="AREA">
        <TabsList>
          <TabsTrigger value="AREA">Area Chart</TabsTrigger>
          <TabsTrigger value="BAR">Bar Chart</TabsTrigger>
          <TabsTrigger value="LINE">Line Chart</TabsTrigger>
          <TabsTrigger value="PIE">Pie Chart</TabsTrigger>
          <TabsTrigger value="RADIAL">Radial Chart</TabsTrigger>
        </TabsList>

        <TabsContent value="AREA">
          <AreaCard />
        </TabsContent>
        <TabsContent value="BAR">
          <BarCardv1 />
        </TabsContent>
        <TabsContent value="LINE">
          <LineCard />
        </TabsContent>
        <TabsContent value="PIE">
          <PieCard />
        </TabsContent>
        <TabsContent value="RADIAL">
          <RadialCardv1 />
        </TabsContent>
      </Tabs>
    </main>
  );
}
