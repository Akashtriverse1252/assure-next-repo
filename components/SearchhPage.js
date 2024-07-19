"use client";
import React, { useState, useEffect } from "react";
import mappingdata from "../Data/Maping.json";
import axios from "axios";
import { TestCard } from "@/components/TestCard";
import NoData from "@/components/svg-components/NoData";

const SearchPage = ({ slug }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://www.assurepathlabs.com/json/mapping_keywords.json"
        );
        const mappingdata = response.data;

        const matchedItem = mappingdata.mappingdata.find(
          (item) => item.slug === slug
        );
        console.log(matchedItem);

        if (matchedItem) {
          const ids = matchedItem.id;
          setSelectedIds(Array.isArray(ids) ? ids.map(String) : [String(ids)]);
        } else {
          setSelectedIds([]);
        }
      } catch (error) {
        setError("Error fetching mapping data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchPackageData = async () => {
      if (selectedIds.length === 0) {
        setPackageData(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const idsString = selectedIds.join("-");
        const apiUrl = `https://www.assurepathlabs.com/api/algos/fetch_details.php?ids=${idsString}`;

        const response = await axios.get(apiUrl);

        if (response.data && response.data.test_data) {
          setPackageData(response.data.test_data);
        } else {
          setPackageData(null);
          setError("No data available");
        }
      } catch (error) {
        setError("Error fetching package data");
      } finally {
        setLoading(false);
      }
    };

    fetchPackageData();
  }, [selectedIds]);

  if (loading) {
    return (
      <div className="_loader_cnt col-12 d-flex justify-content-center mt-5">
        <div className="_loader"></div>
      </div>
    );
  }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  if (packageData === null) {
    return (
      <div className="noData">
        <NoData />
      </div>
    );
  }

  return (
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
          BaseDirectory={test.category === "package" ? `packages` : ""}
        />
      ))}
    </div>
  );
};

export default SearchPage;
