"use client";

import { useState, useEffect } from "react";
import mappingdata from "../Data/Maping.json";
import testData from "../Data/test_data.json";
import { TestCard } from "@/components/TestCard";

const SearchhPage = ({ slug }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const matchedItem = mappingdata.mappingdata.find(
          (item) => item.slug === slug
        );

        // if (matchedItem) {
        //   const ids = matchedItem[Object.keys(matchedItem)[0]].id;
        //   setSelectedIds(Array.isArray(ids) ? ids.map(String) : [String(ids)]);
        // } else {
        //   setSelectedIds([]);
        // }

        if (matchedItem) {
          const ids = matchedItem.id;
          setSelectedIds(Array.isArray(ids) ? ids.map(String) : [String(ids)]);
        } else {
          setSelectedIds([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        if (selectedIds.length > 0) {
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
      }
    };

    fetchPackageData();
  }, [selectedIds]);

  return (
    <div>
      {loading ? (
        <div className="search_loader">
          <div className="loader"></div>
        </div>
      ) : packageData ? (
        <div className="row justify-content-center">
          {packageData.map((test, index) => (
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
  );
};

export default SearchhPage;
