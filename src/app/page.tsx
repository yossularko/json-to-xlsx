import ExcelExport from "@/components/ExportExcel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 max-w-5xl px-4 py-8 mx-auto h-screen">
      <div className="flex-1">
        <h1 className="text-4xl my-6">JSON to Excel</h1>
        <ExcelExport />
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
        <span className="text-neutral-500">Developed by:</span>
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/31251805?v=4&size=64"
              alt="Muhammad Yos Sularko"
            />
            <AvatarFallback>YS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-neutral-700">
            <h4 className="uppercase tracking-wider font-medium ">
              Muhammad Yos Sularko
            </h4>
            <div className="flex gap-4 items-center text-sm">
              <Link href="https://github.com/yossularko" target="_blank">
                <div className="flex gap-1 items-center hover:text-pink-600">
                  <FaGithub />
                  <span>yossularko</span>
                </div>
              </Link>
              <Link
                href="https://id.linkedin.com/in/radenlarko"
                target="_blank"
              >
                <div className="flex gap-1 items-center hover:text-sky-600">
                  <FaLinkedin />
                  <span>yossularko</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
