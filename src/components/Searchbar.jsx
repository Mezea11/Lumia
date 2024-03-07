import { useState, useEffect } from "react";
import jsonData from "../pages/lamps.json";

export default function Searchbar() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // You can fetch data asynchronously here if needed
    setData(jsonData);
    console.log(data);
  }, [data]);

  const handleKeyDown = (e) => {
    // Check if Enter key is pressed
    if (e.key === "Enter") {
      console.log("Enter key pressed");
      filterData(searchTerm.toLowerCase());
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterData = (term) => {
    const filteredData = jsonData.filter((item) => {
      // Check if name or any keyword includes the search term
      return (
        item.name.toLowerCase().includes(term) ||
        item.keywords.some((keyword) => keyword.toLowerCase().includes(term))
      );
    });
    console.log(filteredData);
    // Here you can set the filtered data to state or pass it to another component
  };

  return (
    <>
      <input
        className="flex-sm-fill text-sm-center nav-link"
        type="text"
        id="search"
        placeholder="Type to search"
        data-change="search"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </>
  );
}
