import { IconAlbum, IconBackground, IconBrandVisualStudio, IconCalendar, IconChefHat, IconChefHatOff, IconDeviceMobileMessage, IconGlass, IconHandTwoFingers, IconHeartBolt, IconHeartBroken, IconImageInPicture, IconMoodCrazyHappy, IconMoodHappy, IconMoodHappyFilled, IconPhotoAi, IconPhotoExclamation, IconPictureInPicture, IconPictureInPictureOff, IconPictureInPictureOn, IconPumpkinScary, IconShoppingCartCopy, IconStereoGlasses, IconTruckReturn } from "@tabler/icons-react"
import { IconSunglasses } from "@tabler/icons-react"
import { IconHeartHandshake } from "@tabler/icons-react"
import { IconBottle } from "@tabler/icons-react"
import { IconAlarm } from "@tabler/icons-react"

export default function Plans(){

    const plansData = [
        {
            title: "Pilih waktu dan tanggal sesuai keinginan",
            svg: <IconCalendar stroke={1.5} width={64} height={64} />,
            text: "Select a convenient delivery time that fits your schedule."
        },
        {
            title: "Pilih Backround dan Studio",
            svg: <IconPhotoExclamation stroke={1.5} width={64} height={64} /> ,
            text: "Select the Begron and Studio you want to use."
        },
        {
            title: "Banyak Pilihan aksesoris yang dapat digunakan",
            svg: <IconSunglasses stroke={1.5} width={64} height={64} />,
            text: "You can use the accessories that are provided."
        },
        {
            title: "Dapatkan Kenangan di Pemotretan kita",
            svg: <IconMoodHappy stroke={1.5} width={64} height={64} />,
            text: "Get Memories at our Photoshoot."
        }
    ]

    return (
        <section className="plans w-[80vw] my-32 mx-auto flex flex-col items-center gap-8 mobile:w-full mobile:px-4 tablet:w-[90vw]">
            <div className="title text-3xl font-bold text-center">Abadikan Moment dan Ciptakan Sebuah Kenangan</div>
            <div className="plans-items flex gap-4 mobile:flex-col">
            {
                plansData.map((item, index) => {
                    return (
                        <div className="plan flex flex-col items-center justify-between gap-4" key={index}>
                            <div className="img w-fit flex justify-center items-center p-4 rounded-full bg-boldPurple/[.2] text-boldPurple">
                                {item.svg}
                            </div>
                            <div className="title font-bold text-xl text-center">{item.title}</div>
                            <div className="text text-center text-[#555] text-sm">{item.text}</div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}