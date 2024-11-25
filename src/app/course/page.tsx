import { Input } from "@/components/ui/input";
import { getCourses } from "@/fetch/course";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "course",
};

const Course = async () => {
  const data = await getCourses();
  return (
    <div className="py-2">
      <div className="mb-2">
        <Input />
      </div>

      {data.map(({ courseid, code, name }) => (
        <Link href={`/course/${code}`} key={courseid}>
          <div className="flex items-center justify-between p-4 mb-3 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group">
            <div className="font-medium">
              <div className="text-gray-800">{code}</div>
              <div className="text-gray-600">{name}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Course;
