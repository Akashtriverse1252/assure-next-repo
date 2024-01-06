import TestCategory from "@/components/TestCategory";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
export const page = ({ params: { slug } }) => {
  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <TestCategory Slug={slug} />

            <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
            <Line className="svgwidthline position-absolute opacity-10 top-20 start-0" />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
