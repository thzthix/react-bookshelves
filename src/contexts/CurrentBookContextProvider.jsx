/* eslint-disable react/prop-types */
// @ts-nocheck
import { useState, createContext } from "react";
import { CURRENT_BOOK_KEY } from "@/utils/constants";
export const currentBookContext = createContext("");

const localStorage = window.localStorage;

const CurrentBookContextProvider = ({ children }) => {
    const [currentBook, setCurrentBook] = useState(() => {
        const initialBook = localStorage.getItem(CURRENT_BOOK_KEY) || "";
        return initialBook
    });
    const changeCurrentBook = (newCurrentBook) => {
        localStorage.setItem(CURRENT_BOOK_KEY, newCurrentBook);
        setCurrentBook(newCurrentBook);
    }
    return <currentBookContext.Provider value={{ currentBook, changeCurrentBook }}>
        {children}
    </currentBookContext.Provider>

}
export default CurrentBookContextProvider