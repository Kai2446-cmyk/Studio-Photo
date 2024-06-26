import { IconShoppingBag } from "@tabler/icons-react"
import { IconChevronRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import goTop from "./goTop";

export default function HomeHero(){
    return (
        <header className="home-hero w-full h-[100vh] flex flex-col gap-4 justify-center items-center text-red">
            <div className="tagline font-bold text-5xl text-center mobile:text-3xl">Studio Photo Hydra</div>
            <div className="text text-red text-center mobile:px-4">Kita Menyediakan Jasa Photo Studio Hydra</div>
            <div className="btns flex items-center gap-4 mobile:flex-col">
                <Link to="/services" onClick={goTop} className="bg-white w-fit flex gap-2 items-center px-4 py-2 text-black rounded-md">
                    <span>Pelayanan</span>
                    <IconChevronRight stroke={1.5} />
                </Link>
                <Link to="/order" onClick={goTop} className="bg-boldPurple w-fit flex gap-2 items-center text-white px-4 py-2 rounded-md">
                    <span>Pesan Sekarang</span>
                    <IconShoppingBag stroke={1.5} />
                </Link>
            </div>
        </header>
    )
}