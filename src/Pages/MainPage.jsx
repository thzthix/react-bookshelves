// @ts-nocheck
import Layout from "@/Layouts/Layout";
import Bookshelves from "@/components/Bookshelves";
import Author from "@/components/Author";
const MainPage = () => {
    return <Layout>
        <Bookshelves />
        <Author />
    </Layout>

}
export default MainPage;