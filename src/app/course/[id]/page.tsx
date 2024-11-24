import { getCourseDetail } from "@/fetch/course";
import { Book, Users, Calendar, StepForward } from "lucide-react";
import Link from "next/link";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { list = [], code, name } = await getCourseDetail(id);
  if (!code) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <Book />
          <h3 className="text-2xl font-bold"> {code}</h3>
        </div>
        <span className="text-lg">{name}</span>
      </div>
      <div className="flex flex-col space-y-4">
        {list?.map(
          (
            { teacherid, firstname, lastname, year, semester, rollid },
            index
          ) => (
            <div
              className="bg-gray-100 dark:bg-gray-800 px-1 py-2 rounded flex items-center justify-between"
              key={index}
            >
              <div key={index}>
                <Link
                  href={`/teacher/${teacherid}`}
                  className="flex items-center space-x-2 mb-2"
                >
                  <Users />
                  <span className="text-xl">
                    {firstname} {lastname}
                  </span>
                </Link>
                <div className="flex items-center space-x-2">
                  <Calendar />
                  <span>
                    {year} {semester}
                  </span>
                </div>
              </div>
              <Link href={"/detail/" + rollid}>
                <StepForward />
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Detail;
