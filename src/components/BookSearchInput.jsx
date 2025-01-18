/* eslint-disable react/prop-types */
import { forwardRef } from "react";
// @ts-ignore
const BookSearchInput= forwardRef(({onKeyUp},ref)=>{
    console.log("Render BooksearchInput")

    return <input ref={ref} type="text" placeholder="검색어를 입력하세요" onKeyUp={onKeyUp}/>

})
BookSearchInput.displayName = "BookSearchInput";
export default BookSearchInput;