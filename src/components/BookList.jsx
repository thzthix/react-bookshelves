// @ts-nocheck
/* eslint-disable react/prop-types */
import BookListItem from "@/components/BookListItem";
const BookList=({bookList})=>{

    return<>
    <ul>{bookList.map(book=><BookListItem key={book.id}   title={book.title} author={book.author}/>)}</ul>
    </>
}
export default BookList;