import { IconBackground, IconBackpack, IconCamera, IconLetterA, IconPackageExport, IconPackageImport, IconShoppingBag, IconWashMachine } from "@tabler/icons-react"
import aboutUs2 from "../assets/aboutus2.jpg"
import { IconBuildingWarehouse } from "@tabler/icons-react"
import { IconUsers } from "@tabler/icons-react"

export default function AboutCompany(){

    const aboutUsData = [
        {
            title: "Studio (Paket)",
            svg: <IconShoppingBag stroke={1.5} width={40} height={40} />,
            number: 7
        },
        {
            title: "Cabang",
            svg: <IconBuildingWarehouse stroke={1.5} width={40} height={40} />,
            number: 4
        },
        {
            title: "Pegawai",
            svg: <IconUsers stroke={1.5} width={40} height={40} />,
            number: 40
        }
    ]

    return(
        <section className="about-company w-[80vw] mx-auto my-32 flex gap-8 mobile:flex-col-reverse mobile:w-full mobile:px-4 tablet:w-[90vw]">
            <div className="left w-2/5 left-0 flex flex-col items-end gap-8 mobile:w-full">
                <div className="title font-bold text-3xl text-center">Studio Photo Hydra</div>
                <div className="items flex flex-col items-end gap-4 mobile:items-center mobile:w-full">
                {
                    aboutUsData.map((item, index) => {
                        return (
                            <div className="item flex items-center gap-4 text-center mobile:flex-col-reverse" key={index}>
                                <div className="info flex flex-col items-end mobile:items-center">
                                    <div className="number font-bold text-3xl">{item.number}</div>
                                    <p className="title text-sm text-black/[.7]">{item.title}</p>
                                </div>
                                <div className="svg flex justify-center items-center p-4 rounded-full bg-boldPurple/[.2] text-boldPurple">{item.svg}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="right w-3/5 mobile:w-full">
                <img src={aboutUs2} alt="Image" className="w-full h-fit rounded-md" />
            </div>
        </section>
    )
}