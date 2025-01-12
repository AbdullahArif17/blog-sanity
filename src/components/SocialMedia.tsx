import {
    Github,
    Linkedin,
    } from "@/components/icons";
  import Link from "next/link";
  
  export default function SocialMedia() {
    return (
  
  
      // Social Icons
      <nav className="flex gap-2 ">
        <Link href={"https://github.com/AbdullahArif17"} target="_blank">
          <Github className={`w-6 h-6 fill-dark dark:fill-light`} />
        </Link>
        <Link href={"https://www.linkedin.com/in/abdullah-arif-89ab862b4/"} target="_blank">
          <Linkedin className={`w-6 h-6 fill-dark dark:fill-light`} />
        </Link>
      </nav>
    );
  }