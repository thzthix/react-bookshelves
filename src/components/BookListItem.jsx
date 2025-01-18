/* eslint-disable react/prop-types */
// @ts-nocheck
import { useContext } from "react"
import { currentBookContext } from "@/contexts/CurrentBookContextProvider"
const BookListItem=({ title, author})=>{
    const {changeCurrentBook} = useContext(currentBookContext)
    return<li>{title} - {author} <button onClick={(e)=>changeCurrentBook(title)}>읽기</button></li>

}
export default BookListItem