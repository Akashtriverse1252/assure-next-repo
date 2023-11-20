"use client"
import React, { useState, useEffect, useDeferredValue } from "react";
import mappingdata from "../../../Data/Maping.json";
import testData from "../../../Data/Test_detail.json";
import { useParams } from "next/navigation";
import { TestCard } from "@/components/TestCard";

const SearchBar = () => {
  const [selectedIds, setSelectedIds] = useState([1, 5, 8]);
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true); // Step 1
  const deferredPackageData = useDeferredValue(packageData);
  const params = useParams();

  const slug = params.slug;

  console.log("Current Slug:", slug); // Log the slug to the console

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const matchedItem = mappingdata.mappingdata.find(
          (item) => item[Object.keys(item)[0]].slug === slug
        );

        if (matchedItem) {
          const ids = matchedItem[Object.keys(matchedItem)[0]].id;
          setSelectedIds(Array.isArray(ids) ? ids.map(String) : [String(ids)]);
          console.log("ids", selectedIds);
        } else {
          setSelectedIds([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        if (selectedIds.length > 0) {
          // Find the corresponding entries in the second JSON for multiple IDs
          const matchedPackages = testData.test_data.filter((item) =>
            selectedIds.includes(item.id)
          );
          if (matchedPackages.length > 0) {
            setPackageData(matchedPackages);
          } else {
            setPackageData(null);
          }
        } else {
          setPackageData(null);
        }
      } catch (error) {
        console.error("Error fetching package data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchPackageData();
  }, [selectedIds]);

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
                {loading ? ( // Step 2
                  <div className="search_loader">
                    <div className="loader"></div>
                  </div>
                ) : deferredPackageData ? (
                  <div className="row">
                    {deferredPackageData.map((test, index) => (
                      <TestCard
                        key={index}
                        Slug={test.Slug}
                        Test_Name={test.Test_Name}
                        Test_Amount={test.Test_Amount}
                        Discount_Amount={test.Discount_Amount}
                        Test_Category={test.Test_Category}
                        Test_ID={test.Test_ID}
                        Test_Description={test.Test_Description}
                        Who_is_it_for={test.Who_is_it_for}
                        Pre_test_information={test.Pre_test_information}
                      />
                    ))}
                  </div>
                ) : (
                  <p>No package data found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchBar;
