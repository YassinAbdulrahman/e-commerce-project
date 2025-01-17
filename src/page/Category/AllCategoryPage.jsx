import React, { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/utilities/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getAllCategoryPage } from "../../redux/actions/categoryAction";

function CategoryPage() {

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory(3));
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  let pageCount = 0;
  if(category.paginationResult)
    pageCount=category.paginationResult.numberOfPages
   
  const getPage = (page) =>{
     dispatch(getAllCategoryPage(page));
  }
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data}  loading={loading}/>
      {pageCount > 1 ? <Pagination pageCount={pageCount} onPress={getPage}/> : null}
      
    </div>
  );
}

export default CategoryPage;
