import { IconClockHour3 } from "@tabler/icons-react"
import { IconMail } from "@tabler/icons-react"
import { IconPhoneCall } from "@tabler/icons-react"

export default function Footer(){

    const infoData = [
        {
            title: "+62 899-4737-000",
            svg: <IconPhoneCall stroke={1.5} />
        },
        {
            title: "xarnrrq@gmail.com",
            svg: <IconMail stroke={1.5} />
        },
        {
            title: "Mon - Sun: 10:00 - 19:30",
            svg: <IconClockHour3 stroke={1.5} />
        }
    ]

    return (
        <footer className="w-full bg-[#111] flex flex-col px-[10vw] py-8 text-[#eee] mobile:px-4 tablet:px-[5vw]">
            <div className="top flex justify-between items-end mb-8 mobile:flex-col mobile:items-center mobile:gap-8">
                <div className="info flex flex-col gap-4">
                {
                    infoData.map((item, index) => {
                        return (
                            <div className="item flex items-center gap-2" key={index}>
                                <div className="svg flex text-boldPurple">
                                    {item.svg}
                                </div>
                                <span>{item.title}</span>
                            </div>
                        )
                    })
                }
                </div>
                <div className="links flex flex-col gap-2 items-end mobile:items-center">
                    <div className="footer-title">outlets</div> 
                    <a className="link link-hover">Tasikmalaya</a>
                    <a className="link link-hover">Bekasi</a>
                    <a className="link link-hover">Singaparna</a>
                    <a className="link link-hover">Cilacap</a>
                </div>
                <div className="links flex flex-col gap-2 items-end mobile:items-center">
                    <div className="footer-title">others</div> 
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Karir</a>
                    <a className="link link-hover">Kontak</a>
                    <a className="link link-hover">Customers Service</a>
                </div>
            </div>
            <div className="bottom w-full flex justify-between border-t pt-8 mobile:flex-col-reverse mobile:gap-4">
                <div className="copyright mobile:text-center">© 2024 Studio Photo Hydra</div>
                <div className="bottom-links flex gap-4 items-center mobile:justify-between">
                    <div>Privacy policy</div>
                    <div>Terms of service</div>
                </div>
            </div>
        </footer>
    )
}