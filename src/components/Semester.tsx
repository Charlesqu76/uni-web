import { Semester } from "@/types/semster";
import { Calendar } from "lucide-react";

export const SemesterCompnent = ({ semester, year }: Semester) => {
  return (
    <div className="flex items-center space-x-2">
      <Calendar />
      <span className="text-lg">{year}</span>
      <span className="text-lg">{semester}</span>
    </div>
  );
};
