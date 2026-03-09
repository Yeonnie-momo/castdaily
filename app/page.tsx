import { redirect } from "next/navigation";

// Default post ID — redirect root to the first post
const DEFAULT_POST_ID = 4839201;

export default function RootPage() {
  redirect(`/${DEFAULT_POST_ID}`);
}
