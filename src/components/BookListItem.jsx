/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// @ts-nocheck
import { useContext } from "react"
import { currentBookContext } from "@/contexts/CurrentBookContextProvider"
import { Link, Routes, Route, useParams } from "react-router-dom"
import BookPage from "@/Pages/BookPage"
const BookListItem = ({ title, author, price, publisher, year, id }) => {
    const { changeCurrentBook } = useContext(currentBookContext)
    
    return (<li>
        <Link to={`/books/${id}`}>
            {title} - {author} <button onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                changeCurrentBook(title)
            }}>읽기</button>
        </Link>

    </li>)

}
export default BookListItem