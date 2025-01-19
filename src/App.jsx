// @ts-nocheck
import CurrentBookContextProvider from "@/contexts/CurrentBookContextProvider";
import MainPage from "@/Pages/MainPage";
import "@/index.css"
const App = () => {
  return (
    <>
      <CurrentBookContextProvider>
      <MainPage />
    </CurrentBookContextProvider>
   
    </>
  );
};

export default App;
