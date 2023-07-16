import '../app/globals.css'
import Navbar from "../components/navbar"

export default function Custom404() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center mt-20">
                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="text-2xl font-light">Page not found</h2>
            </div>
        </div>
    )
}