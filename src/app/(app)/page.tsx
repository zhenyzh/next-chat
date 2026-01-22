import { redirect } from "next/navigation";
import { Paths } from "../../shared/configs";

export default function Home() {
  redirect(Paths.profile());
}
