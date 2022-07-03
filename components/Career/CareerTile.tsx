import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  location?: string;
  category?: string;
};

export default function CareerTile({ title, location }: Props) {
  const titlePath = encodeURIComponent(
    title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, "")
      .split(" ")
      .join("-")
  );

  return (
    <>
      <div className="col-lg-3 col-sm-6 ">
        <Link href={`/career/${titlePath}`}>
          <div className="career-card-one white-bg text-center">
            <h3>{title}</h3>
            <p>{location}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
