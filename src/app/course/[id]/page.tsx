import { Book, Users, Calendar } from "lucide-react";
import Link from "next/link";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = {
    id,
    name: "Model based software engineer",
    code: "ELEC5620",
    list: [
      {
        teacherId: 1,
        firstName: "charles",
        lastName: "qu",
        year: 2024,
        semester: 1,
      },
      {
        teacherId: 3,
        firstName: "charles",
        lastName: "qu",
        year: 2024,
        semester: 1,
      },
    ],
  };
  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <Book />
          <h3 className="text-2xl font-bold"> {data["code"]}</h3>
        </div>
        <span className="text-lg">{data["name"]}</span>
      </div>
      <div className="flex flex-col space-y-4">
        {data["list"].map(
          ({ teacherId, firstName, lastName, year, semester }, index) => (
            <div key={index} className="bg-gray-800 px-1 py-2 rounded">
              <Link
                href={`/teacher/${teacherId}`}
                className="flex items-center space-x-2 mb-2"
              >
                <Users />
                <span className="text-xl">
                  {firstName} {lastName}
                </span>
              </Link>
              <div className="flex items-center space-x-2">
                <Calendar />
                <span>
                  {year} {semester}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Detail;
