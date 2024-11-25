import { Comment } from "@/components/comment";
import { getComments } from "@/fetch/comment";
import { getroll } from "@/fetch/course";
import Link from "next/link";
import dayjs from "dayjs";
import { SemesterCompnent } from "@/components/Semester";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const { code, name, firstname, lastname, year, semester, teacherid } =
    await getroll(id);

  const data = await getComments(id);
  return (
    <div className="flex flex-col">
      <Link href={"/course/" + code} className="flex flex-col">
        <span className="font-bold text-xl">{code}</span>
        <span>{name}</span>
      </Link>
      <Link href={"/teacher/" + teacherid}>
        {firstname} {lastname}
      </Link>
      <SemesterCompnent year={year} semester={semester} />
      <Comment rollId={id} />
      {data.map(({ content, create_at }, i) => (
        <div key={i} className="flex flex-col">
          {content}
          <span>{dayjs(create_at).format("YYYY/MM/DD h:m")}</span>
        </div>
      ))}
    </div>
  );
};

export default Detail;
