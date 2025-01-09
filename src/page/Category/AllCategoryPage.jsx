import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/utilities/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import getAllCategory from '../../redux/actions/categoryAction'

function CategoryPage() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.allCategory.data)
  console.log(data);
  useEffect(()=>{
     dispatch(getAllCategory())
  },[])
  return (
    
    <div style={{minHeight:"670px"}}>
        <CategoryContainer/>
        <Pagination />
    </div>
  )
}

export default CategoryPage