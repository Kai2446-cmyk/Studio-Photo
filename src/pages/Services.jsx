import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import photopersonal from "../assets/photopersonal.jpg"
import photogroup from "../assets/photogroup.png"
import photocouple from "../assets/photocouple.png"
import photoproduct from "../assets/photoproduct.jpg"
import peliharaan from "../assets/peliharaan.jpg"
import PreWedding from "../assets/PreWedding.jpg"
import Wedding from "../assets/Wedding.jpg"
import PaketKhusus from "../assets/PaketKhusus.jpg"
import Diluar from "../assets/Diluar.jpg"

export default function Services(){

    document.title = "Studio Photo Hydra > Pelayanan"

    return (
        <>
        <Navbar />
        <Hero page={"Services"} path={"/services"} />
        <OurServices />
        <Footer />
        </>
    )
}

function OurServices(){

    const servicesData = [
        {
            title: "Personal",
            text: "Nikmati sesi foto personal di photo studio hydra kami, lengkap dengan 20 foto digital beresolusi tinggi, layanan retouching profesional, dan berbagai pilihan backdrop serta properti untuk menciptakan hasil foto yang memukau dan sesuai dengan gaya Anda.",
            img: photopersonal
        },
        {
            title: "Group",
            text: "Photo Studio Hydra Melayani Pemotretan Group (Jika melewati batas kapasitas maka pilihan backround hanya sedikit )",
            img: photogroup
        },
        {
            title: "Couple",
            text: "Photo Studio Hydra Melayani Pemotretan per-Couple (1 laki laki dan 1 perempuan)",
            img: photocouple
        },
        {
            title: "Product",
            text: "Photo Studio Hydra Melayani Pemotretan product , baik product minuman, makanan, atau product lainnya.",
            img: photoproduct
        },
        {
            title: "Peliharaan",
            text: "Abadikan momen berharga bersama peliharaan Anda dengan sesi foto di photo studio hydra kami, lengkap dengan 30 foto digital beresolusi tinggi, layanan retouching dasar, dan pilihan properti khusus untuk hewan peliharaan.",
            img: peliharaan
        },
        {
            title: "Pre-Wedding",
            text: "Nikmati sesi foto pre-wedding selama 4 jam di studio foto hydra kami, lengkap dengan 50 foto digital beresolusi tinggi, layanan retouching profesional, pilihan backdrop eksklusif, properti tambahan, serta layanan makeup dan hairdo untuk pasangan. ",
            img: PreWedding
        },
        {
            title: "Wedding",
            text: " Abadikan hari istimewa Anda dengan dokumentasi wedding selama 8 jam yang mencakup 300 foto digital beresolusi tinggi, retouching profesional, liputan lengkap mulai dari sesi akad/pernikahan hingga resepsi, serta 1 album foto premium dengan desain eksklusif hanya di Studio Foto Hydra.",
            img: Wedding
        },
        {
            title: "Paket Khusus( Pre-Wedding + Wedding)",
            text: "Dapatkan paket kombo pre-wedding dan wedding di studio Photo Hydra kami yang mencakup sesi foto pre-wedding selama 4 jam di studio dengan 50 foto digital, serta dokumentasi wedding selama 8 jam dengan 300 foto digital, layanan retouching untuk semua foto, pilihan backdrop dan properti eksklusif, layanan makeup dan hairdo untuk pre-wedding, dan 1 album foto premium.",
            img: PaketKhusus
        },
        {
            title: "Pemotretan di luar Studio",
            text: "Abadikan momen spesial Anda dengan sesi pemotretan di luar studio photo hydra kami, lengkap dengan 50 foto digital beresolusi tinggi, layanan retouching profesional, dan fleksibilitas lokasi untuk mendapatkan latar yang sesuai dengan keinginan dan tema Anda.",
            img: Diluar
        }
    ]

    return (
        <section className="our-services w-[80vw] mx-auto my-32 flex flex-col items-center gap-8 mobile:w-full mobile:px-4 tablet:w-[90vw]">
            <div className="title font-bold text-3xl">Kami mempunyai beberapa pelayanan</div>
            <div className="services-items grid grid-cols-3 gap-4 mobile:flex mobile:flex-col">
            {
                servicesData.map((item, index) => {
                    return (
                        <div className="card w-full shadow-xl bg-white" key={index}>
                            <figure>
                                <img src={item.img} alt="Image" className="w-full h-fit" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}