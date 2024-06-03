import { IconAirConditioning, IconBorderBottom, IconClearFormatting, IconDeviceMobileVibration, IconDiscountCheckFilled, IconMoped, IconMotorbike, IconPlant, IconRefresh, IconRefreshOff, IconShoppingCartCopy } from "@tabler/icons-react";
import { IconShoppingBag } from "@tabler/icons-react";
import { IconTruckDelivery } from "@tabler/icons-react";
import { IconWashMachine } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import goTop from "./goTop";
import { IconVacuumCleaner } from "@tabler/icons-react";
import { IconRefreshDot } from "@tabler/icons-react";
import { IconRefreshAlert } from "@tabler/icons-react";

export default function WhyChooseUs(){

    const whyChooseUsData = [
        {
            title: "Keahlian dan Pengalaman Team Photo Studio Hydra",
            text: "Para pegawai team Photo Studio Hydra memiliki berbagai keahlian khas dalam bidang fotografi, ....... , Jokowi Pernah Foto Di sini",
            svg: <IconDiscountCheckFilled stroke={1.5} className="w-14 h-1/4 mobile:w-10 mobile:h-10" />
        },
        {
            title: "Kebahagiaan Anda Kebahagian Kita Juga",
            text: "Kita melakukan photo studio dengan sepenuh hati agar kalian merasa puas di Photo Studio Hydra kami, kita akan melakukan proses pencetakan photo dengan cepat  tidak ada keterlambatan.",
            svg: <IconShoppingCartCopy stroke={1.5} className="w-14 h-1/4 mobile:w-10 mobile:h-10" />
        },
        {
            title: "Pengelolaan Photo Studio",
            text: "Kita selalu memberikan layanan yang bersih dan nyaman bagi para pelanggan. Tidak ada satu debu yang datang, bahkan cicak saja kepleset",
            svg: <IconRefresh stroke={1.5} className="w-14 h-1/4 mobile:w-10 mobile:h-10" />
        }
    ]

    return (
        <section className="why-choose-us w-[80vw] mx-auto my-32 flex gap-8 mobile:flex-col mobile:w-full mobile:px-4 tablet:w-[90vw]">
            <div className="left flex flex-col gap-4 w-3/5 h-fit sticky top-20 mobile:static mobile:w-full mobile:items-center tablet:w-2/5">
                <div className="title font-bold text-3xl mobile:text-center">Kenapa Harus Photo Studio Hydra ?</div>
                <div className="text text-black/[.7] mobile:text-center">Karena Photo Studio Hydra adalah salah satu photo studio terbesar yang ada di Indonesia, di dalamnya banyak sekali keunikan yang berbeda dari photo studio lainnya.</div>
                <Link to="/order" onClick={goTop} className="flex w-fit rounded-md gap-2 items-center px-4 py-2 bg-boldPurple text-white">
                    <span>Pesan Sekarang</span>
                    <IconShoppingBag stroke={1.5} />
                </Link>
            </div>
            <div className="right flex flex-col gap-8 w-2/5 mobile:w-full tablet:w-3/5">
            {
                whyChooseUsData.map((item, index) => {
                    return (
                        <div className="item flex gap-4" key={index}>
                            <div className="svg p-4 rounded-full flex justify-center items-center bg-boldPurple/[.2] text-boldPurple h-fit">
                                {item.svg}
                            </div>
                            <div className="info flex flex-col gap-2">
                                <div className="title font-bold text-xl">{item.title}</div>
                                <div className="text text-sm">{item.text}</div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}