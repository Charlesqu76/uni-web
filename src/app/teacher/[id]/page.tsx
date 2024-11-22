import { Book, Calendar } from "lucide-react";
import Link from "next/link";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = {
    firstName: "charles",
    lastName: "QU",
    list: [
      {
        courseId: 1,
        name: "Elec",
        code: "5620",
        year: 2024,
        semester: 1,
      },
      {
        courseId: 2,
        name: "Elec",
        code: "5620",
        year: 2024,
        semester: 1,
      },
    ],
  };
  return (
    <div>
      <div className="mb-4 text-3xl">
        {data["firstName"]} {data["lastName"]}
      </div>
      <div className="space-y-4">
        {data["list"].map(({ courseId, code, name, year, semester }, i) => (
          <div key={i} className="bg-gray-800 rounded p-2">
            <Link href={`/course/${courseId}`} className=" block mb-2">
              <div className="flex items-center space-x-2 mb-1">
                <Book />
                <span className="text-2xl">{code}</span>
              </div>

              <div className="text-xl">{name}</div>
            </Link>
            <div className="flex space-x-2">
              <Calendar />
              <span className="text-lg">
                {year} {semester}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
