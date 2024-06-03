import { IconQuote } from "@tabler/icons-react"
import client1 from "../assets/client1.jpg"
import client2 from "../assets/client2.jpg"

export default function Reviews(){

    const reviewsData = [
        {
            name: "Mama Dolay",
            place: "Tasikmalaya City",
            text: "Saya dan teman teman saya pernah ke Photo Studio ini,dan pelayanan mereka sangat baik,ramah,dan nyaman.Ini merupakan benar benar salah satu Photo Studio terbaik di Indonesia.Love you all <3",
            img: client1
        },
        {
            name: "Naufal Dahlia",
            place: "Roblox City",
            text: "Aku sangat senang telah datang ke PhotoStudio ini, aku dan keluarga roblox aku akan datang ke Photo Studio ini lagi, pelayanannya benar benar bagus. Jangan Lupa Mabar Filiphine Military !! .....YES JDI YES !!",
            img: client2
        }
    ]

    return (
        <section className="reviews w-[80vw] my-32 mx-auto flex flex-col items-center gap-8 mobile:flex-col mobile:w-full mobile:px-4 tablet:w-[90vw]">
            <div className="title font-bold text-3xl text-center">Reviews Terbaik</div>
            <div className="reviews-items flex gap-4 mobile:flex-col">
            {
                reviewsData.map((item, index) => {
                    return (
                        <div className="item rounded-xl bg-white shadow-2xl p-4 flex flex-col gap-4" key={index}>
                            <div className="text text-black/[.7]">{item.text}</div>
                            <div className="info flex justify-between items-center">
                                <div className="img-name flex items-center gap-4">
                                    <img src={item.img} alt="Image" className="w-16 rounded-full h-fit" />
                                    <div className="name-place flex flex-col">
                                        <div className="name font-bold">{item.name}</div>
                                        <div className="place text-black/[.7]">{item.place}</div>
                                    </div>
                                </div>
                                <IconQuote width={36} height={36} className="text-boldPurple" />
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}