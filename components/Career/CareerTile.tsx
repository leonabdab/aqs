import Link from "next/link";
import React from "react";

type Props = {
  id?: string; //TODO
  title: string;
  added?: string
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
      <div className="col-lg-6 col-sm-12 ">
        <Link href={`/career/${titlePath}`}>
          <div className="vacancy-card">
            <h4>{title}</h4>
            <p>{location}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
