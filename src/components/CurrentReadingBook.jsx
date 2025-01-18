// @ts-nocheck
import { useContext } from "react";
import { currentBookContext } from "@/contexts/CurrentBookContextProvider";
const  CurrentReadingBook = ()=>{
    const {currentBook} = useContext(currentBookContext)

    
  return(
    <div>현재 읽고있는 책: {currentBook}</div>
  )  

}
export default CurrentReadingBook;