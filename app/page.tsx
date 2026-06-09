import { redirect } from "next/navigation";
require("newrelic");
export default function Home() {
  redirect("/sign-in");
}
