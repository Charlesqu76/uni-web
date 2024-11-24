import { getTeachers } from "@/fetch/teacher";
import Link from "next/link";

const Teacher = async () => {
  const data = await getTeachers();

  return (
    <div>
      {data.map(({ teacherid, lastname, firstname }) => (
        <Link key={teacherid} href={"teacher/" + teacherid}>
          {lastname} {firstname}
        </Link>
      ))}
    </div>
  );
};

export default Teacher;
