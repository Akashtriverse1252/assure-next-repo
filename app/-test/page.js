// "use client";
// import React, { useState, useEffect } from "react";

// const MyComponent = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [removedDates, setRemovedDates] = useState(["2023-12-28"]);
//   const [dateToRemove, setDateToRemove] = useState("");

//   const handleRemoveDate = () => {
//     if (dateToRemove.trim() !== "") {
//       setRemovedDates((prevDates) => [...prevDates, dateToRemove.trim()]);
//       setDateToRemove("");
//     }
//   };

//   const generateRadioData = () => {
//     const today = new Date();
//     const radioData = [];
//     let currentDate = today;

//     for (let i = 0; i < 4; i++) {
//       let date = new Date(currentDate);
//       while (removedDates.includes(date.toISOString().split("T")[0])) {
//         date.setDate(date.getDate() + 1); // Skip removed dates
//       }

//       const formattedDate = date.toISOString().split("T")[0];

//       radioData.push({
//         value: formattedDate,
//         label: date.getDate().toString(),
//         body:
//           i === 0
//             ? "Today"
//             : i === 1
//             ? "Tomorrow"
//             : date.toLocaleDateString("en-US", { weekday: "long" }),
//         isRemoved: removedDates.includes(formattedDate),
//       });

//       currentDate.setDate(date.getDate() + 1);
//     }

//     return radioData;
//   };

//   const radioData = generateRadioData();

//   // useEffect to update the removed dates in the store
//   useEffect(() => {
//     // Update your store or perform any necessary action with removedDates
//     console.log("Removed Dates:", removedDates);

//     // Convert the radioData to JSON-like format
//     const jsonFormat = radioData.map((date) => ({
//       value: date.value,
//       label: date.label,
//       body: date.body,
//     }));

//     console.log("JSON Format:", jsonFormat);

//     // Dispatch the JSON data to the context or perform other actions
//   }, [removedDates]);

//   return null; // Render nothing
// };

// export default MyComponent;
