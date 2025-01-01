import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/utilities/Pagination'

function CategoryPage() {
  return (
    <div style={{minHeight:"670px"}}>
        <CategoryContainer/>
        <Pagination />
    </div>
  )
}

export default CategoryPage