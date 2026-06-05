import { redirect } from "next/navigation";
import { paths } from "@/shared/configs";

export default function Home() {
  redirect(paths.profile());
}
