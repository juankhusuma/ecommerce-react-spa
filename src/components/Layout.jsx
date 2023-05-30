import Footer from "./Footer";
import Header from "./Header";
import "../App.css"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
        </>
    )
}