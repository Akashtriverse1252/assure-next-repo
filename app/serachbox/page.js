import React from 'react'
import Search_box from "../../components/Search_box"
import UploadForm from "../../components/UploadForm"
import Cart from "../../components/Cart"
import data from "../../Data/Keywords.json"

const Serachbox = () => {
  return (
    <>
      <h1>AutoComplete Search Example</h1>
      <Search_box data={data} />
      {/* <UploadForm/> */}
      {/* <Cart/> */}
    </>
  )
}

export default Serachbox