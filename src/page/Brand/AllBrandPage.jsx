import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer";
import Pagination from "../../Components/utilities/Pagination";

function AllBrand() {
  return (
    <div style={{ minHeight: "770px" }}>
      <BrandContainer />
      <Pagination />
    </div>
  );
}

export default AllBrand;
