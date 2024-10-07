import OverviewCard from "@/components/dashboard/overview/overViewcard";
import RecentClient from "@/components/dashboard/overview/recentClient";
import RecentProject from "@/components/dashboard/overview/recentProject";
import { Button } from "@/components/ui/button";


export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <OverviewCard/>
        <OverviewCard/>
        <OverviewCard/>
        <OverviewCard/>
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
       <RecentProject/>
       <RecentClient/>


      </div>
      
    </main>
  );
}
