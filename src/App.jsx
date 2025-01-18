// @ts-nocheck
import Bookshelves from "@/components/Bookshelves";
import CurrentBookContextProvider from "@/contexts/CurrentBookContextProvider";
import Footer from "@/components/Footer";
import "@/index.css"
const App = () => {
  return (
    <>
      <CurrentBookContextProvider>
      <Bookshelves/>
    </CurrentBookContextProvider>
    <Footer />
    </>
  );
};

export default App;
