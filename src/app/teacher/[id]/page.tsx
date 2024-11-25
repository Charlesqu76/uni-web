import { SemesterCompnent } from "@/components/Semester";
import { getTeacher } from "@/fetch/teacher";
import { Book } from "lucide-react";
import Link from "next/link";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { teacherid, firstname, lastname, list = [] } = await getTeacher(id);
  if (!teacherid) {
    return <div>Not Found</div>;
  }
  return (
    <div>
      <div className="mb-4 text-3xl">
        {firstname} {lastname}
      </div>
      <div className="space-y-4">
        {list.map(({ code, name, year, semester }, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded p-2">
            <Link href={`/course/${code}`} className=" block mb-2">
              <div className="flex items-center space-x-2 mb-1">
                <Book />
                <span className="text-xl">{code}</span>
              </div>

              <div className="text-lg">{name}</div>
            </Link>
            <SemesterCompnent semester={semester} year={year} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
