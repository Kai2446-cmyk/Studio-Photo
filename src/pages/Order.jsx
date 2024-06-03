import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Appointments from "../components/Appointments"

export default function Order(){

    document.title = "Studio Foto Hydra > Pemesanan"

    return (
        <>
        <Navbar />
        <Hero page={"Order"} path={"/order"} />
        <Appointments />
        <Footer />
        </>
    )
}