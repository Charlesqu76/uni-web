import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";

const Header = () => {
  return (
    <div className="w-full h-16 sticky top-0 p-1 bg-slate-100 flex justify-between items-center">
      <div className="space-x-2">
        <Link href="/course">Course</Link>
        <Link href="/teacher">teacher</Link>
      </div>
      <Avatar className="h-full max-h-10 w-fit">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          className="object-contain"
        />
      </Avatar>
    </div>
  );
};

export default Header;
