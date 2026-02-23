import { ChartAreaInteractive } from "@/components/ui/chart-area-interactive";
import { UserSectionCards } from "@/components/ui/user-sections-card";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 py-2 md:gap-6 md:py-4">
      <UserSectionCards />
      <div className="px-4 lg:px-6"></div>
    </div>
  );
}
