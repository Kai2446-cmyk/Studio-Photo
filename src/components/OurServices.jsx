import { Link } from "react-router-dom"
import photopersonal from "../assets/photopersonal.jpg"
import photogroup from "../assets/photogroup.png"
import photocouple from "../assets/photocouple.png"
import goTop from "./goTop"

export default function OurServices(){

    const servicesData = [
        {
            title: "Personal",
            text: "Photo Studio Hydra melayani pemotretan pribadi.",
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
        }
    ]

    return (
        <section className="our-services w-[80vw] my-32 mx-auto flex flex-col items-center gap-8 mobile:w-full mobile:px-4 tablet:w-[90vw]">
            <div className="title text-3xl font-bold text-center">Pelayanan</div>
            <div className="services-items w-full flex gap-4 mobile:flex-col">
            {
                servicesData.map((item, index) => {
                    return (
                        <div className="card w-full shadow-xl bg-white" key={index}>
                            <figure>
                                <img src={item.img} alt="Image" />    
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.text}</p>
                                <div className="card-actions justify-end">
                                    <Link to="/services" onClick={goTop} className="px-4 py-2 bg-boldPurple text-white rounded-md">Read more</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}