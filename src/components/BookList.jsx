// @ts-nocheck
/* eslint-disable react/prop-types */
import BookListItem from "@/components/BookListItem";
const BookList = ({ bookList }) => {

    return <>
        <ul>{bookList.map(book =>
            <BookListItem
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                year={book.year}
                publisher={book.publisher} />)}</ul>
    </>
}
export default BookList;