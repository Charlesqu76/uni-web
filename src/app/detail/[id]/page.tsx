import { getroll } from "@/fetch/course";
import Link from "next/link";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { code, name, firstname, lastname, year, semester, teacherid } =
    await getroll(id);
  return (
    <div className="flex flex-col">
      <Link href={"/course/" + code}>
        {code} {name}
      </Link>
      <Link href={"/teacher/" + teacherid}>
        {firstname} {lastname}
      </Link>
      <div>
        {year} {semester}
      </div>
    </div>
  );
};

export default Detail;
