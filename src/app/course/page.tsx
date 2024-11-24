import { getCourses } from "@/fetch/course";
import Link from "next/link";

const Course = async () => {
  const data = await getCourses();
  return (
    <div>
      {data.map(({ courseid, code, name }) => (
        <Link href={`/course/${code}`} key={courseid}>
          {code} {name}
        </Link>
      ))}
    </div>
  );
};

export default Course;
