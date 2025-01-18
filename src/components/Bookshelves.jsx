// @ts-nocheck
import BookList from "@/components/BookList";
import BookSearchInput from "@/components/BookSearchInput";
import Container from "@/components/Container"
import CurrentReadingBook from "@/components/CurrentReadingBook";
import books from "@/mock/book";

import { useRef, useState } from "react"
const Bookshelves = () => {
  const [bookList, setBookList] = useState(books);
  const inputRef = useRef("")

  const handleSearch = (e) => {
    if (e.key !== "Enter" ) return;
    if(!inputRef.current.value) 
      {window.alert("검색어를 입력하세요")
         return}

    const inputValue = inputRef.current.value
    const filteredBooks = books.filter((book)=>book.title.includes(inputValue))
    if(filteredBooks.length === 0){
      window.alert("검색결과가 존재하지 않습니다")
      return
    }
    setBookList(filteredBooks)

  }

  console.log("Bookshelves rendered")
  return (<>
    <Container title="나만의 책장">
      <CurrentReadingBook />
      <BookSearchInput ref={inputRef}
        // @ts-ignore
        onKeyUp={(e) => handleSearch(e)} />
      <BookList bookList={bookList}/>
    </Container>
  </>)

}
export default Bookshelves;