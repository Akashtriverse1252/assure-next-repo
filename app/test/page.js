"use client";

import { useEffect } from "react";
import { useState } from "react";

const page = () => {
  const [project, setProject] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./api/tabledata");

        const data = await response.json();
        setProject(data);

        console.log("this is the api data", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      
      }
    };

    fetchData();  
  }, []);

  return <div>{project}</div>;
};

export default page;
