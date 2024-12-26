import React, { useState } from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { data } from "./data";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // Calculate indices for slicing the data
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / postsPerPage);

  return (
    <div>
      <div>
        {currentPosts.map((item, index) => (
          <div key={index}>
            {item.id} {item.first_name} {item.last_name}
          </div>
        ))}
      </div>
      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          count={totalPages} // Total number of pages
          page={currentPage} // Current page
          onChange={(event, value) => setCurrentPage(value)} // Handle page change
          variant="outlined"
          color="primary"
        />
      </Box>
    </div>
  );
}

export default App;
