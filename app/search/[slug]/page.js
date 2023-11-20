import React from "react";
import { useParams } from "next/navigation";
import Searchhpage from "@/components/Searchhpage";

const SearchBar = () => {
  const params = useParams();

  const slug = params.slug;

  return (
    <div>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h3>Search Test</h3>
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
