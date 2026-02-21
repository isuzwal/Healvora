import { SectionCards } from "@/components/ui/section.cards";
import { ChartAreaInteractive } from "@/components/ui/chart-area-interactive";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 py-2 md:gap-6 md:py-4">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
    </div>
  );
}
