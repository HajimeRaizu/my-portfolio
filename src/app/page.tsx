import TaskBar from "@/components/taskbar";
import Desktop from "@/components/desktop";

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh] bg-[rgb(91,44,117)]">
      <Desktop />
      <TaskBar />
    </div>
  );
}
