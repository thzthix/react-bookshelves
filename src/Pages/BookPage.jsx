// @ts-nocheck
/* eslint-disable react/prop-types */
import Layout from "@/Layouts/Layout"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import books from "@/mock/book"
const BookPage = () => {
    const [data,setData] = useState({});
    const params = useParams();
    const id = Number(params.id)
  
    useEffect(()=>{
        // @ts-ignore
       
        const searchedBook = books.find((book=>book.id === id))
        console.log(books)

        searchedBook && setData(searchedBook)


    },[id])
    
    return <Layout title={data.title}>
        <ul className="book-details">
            <li>저자: {data.author}</li>
            <li>출판: {data.publisher} | {data.year}</li>
            <li>가격: {data.price}</li>
        </ul>
    </Layout>

}
export default BookPage