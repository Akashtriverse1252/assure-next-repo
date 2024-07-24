import React from "react";
// import { useRouter } from "next/navigation";
import Searchhpage from "@/components/SearchhPage";

const SearchBar = ({ params: { slug } }) => {
  // const router = useRouter();
  // const { slug } = router.query;

  return (
    <div>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h1 className="text-uppercase">Search Result -{convertSlugToText(slug)} </h1>
              </div>
              <div className="col-12 float-start all-test">
                <Searchhpage slug={slug} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchBar;

const convertSlugToText = (slug) => {
  // Implement your logic to convert the slug to normal text
  // For simplicity, let's just replace hyphens with spaces
  return slug.replace(/-/g, " ");
};
