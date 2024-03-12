import LikeButton from "../../components/like-button";
import Link from "next/link";

import PageLayout from "../../components/layouts/page-layout";

export default function LikesPage() {
  return (
    <PageLayout>
      <Link href="/" className="inline-block">
        <button className="group text-primary font-semibold text-md border-b text-blue-500 hover:bg-blue-500 hover:text-blue-50 focus:outline-none focus:ring focus:ring-blue-300 backdrop-blur-2xl w-auto rounded-md border border-blue-500 px-4 py-1">
          back
        </button>
      </Link>

      <LikeButton initialLikes={0} />
    </PageLayout>
  );
}
