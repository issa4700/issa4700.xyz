import Link from "next/link";
import fmtDate from "@lib/fmtDate";
import { PostOrPage } from "@tryghost/content-api";

const Card: React.FC<{ post: PostOrPage }> = ({ post }) => {
  const { slug, title, excerpt, published_at: date, feature_image } = post;
  return (
    <Link href={"/writings/" + slug}>
      <a className="sm:first:col-span-2 flex flex-col gap-y-2 group hover:-translate-y-1 transition ease-in-out duration-150">
        <figure className="h-80">
          <img
            className="object-cover h-full w-full group-hover:opacity-90 transition ease-in-out duration-150"
            src={feature_image || ""}
          />
        </figure>
        <div className="flex flex-col gap-y-2">
          <span className="text-sm text-gray-600">{fmtDate(date)}</span>
          <h1 className="text-xl font-semibold text-sky-900 group-hover:text-sky-600 transition ease-in-out duration-150">
            {title}
          </h1>
          <p className="text-gray-700">{excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
