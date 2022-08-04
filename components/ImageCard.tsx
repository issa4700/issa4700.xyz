import Link from "next/link";

type Image = {
  title: string;
  desc: string;
  href: string;
  src: string;
};

const ImageCard = ({ title, desc, href, src }: Image) => {
  return (
    <Link href={href}>
      <a className="relative bg-gray-100 aspect-[2/3] hover:-translate-y-1 transition ease-in-out duration-150 shadow-lg hover:shadow-xl">
        <div className="absolute inset-0 flex items-end p-8 xl:p-10 bg-gradient-to-t from-slate-900 via-transparent">
          <div className="gap-y-1 text-gray-100">
            <h1 className="text-2xl xl:text-3xl font-serif">{title}</h1>
            <p className="">{desc}</p>
          </div>
        </div>
        <img src={src} className="object-cover w-full h-full" />
      </a>
    </Link>
  );
};

export default ImageCard;
