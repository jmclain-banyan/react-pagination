import React, { useState } from "react";
import "./App.css";
import { Data } from "./users";
import User from "./components/User";
import { paginate } from "./components/Pagination/paginate";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const handlePageChange = (page) => setCurrentPage(page);

  const getPageData = () => {
    const paginationData = paginate(Data, currentPage, pageSize);
    return { totalCount: Data.length, data: paginationData };
  };

  const { totalCount, data } = getPageData();

  return (
    <div className="App">
      <h1>ALL USERS</h1>
      {data.map((user, index) => (
        <User key={index} name={user.first_name} email={user.email} />
      ))}
      <Pagination
        itemsCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
