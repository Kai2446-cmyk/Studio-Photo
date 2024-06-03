import { IconChevronDown } from "@tabler/icons-react"
import faqsImg from "../assets/faqs.jpg"
import { useState } from "react"

export default function Faqs(){

    const faqsData = [
        {
            question: "Pembayaran lewat apa saja?",
            answer: "Kami menerima berbagai metode pembayaran, termasuk pembayaran digital, e-wallet, dan transfer bank untuk kenyamanan Anda."
        },
        {
            question: "Bagaimana cara saya untuk pesan booking Photo Studio?",
            answer: "Anda bisa langsung masuk ke proses pemesanan, dan anda bisa memilih paket yang terdaftar di sana, lalu anda akan masuk ke dalam paymentnya"
        },
        {
            question: "Apa saja aksesoris yang tersedia di photostudio ini?",
            answer: "Aksesoris sudah kita sediakan dengan sesuai kebutuhan anda (apabila aksesoris hilang maka akan diberikan denda sesuai peraturan)."
        },
        {
            question: "Apakah ada diskon di photostudio ini?",
            answer: "Kalian akan mendapatkan fitur diskon akan kita tampilkan ketika kalian sudah sering datang minimal 2x"
        }
    ]

    const [faqsIndexOpen, setFaqsIndexOpen] = useState(0)

    return (
        <section className="faqs w-[80vw] mx-auto my-32 flex flex-col items-center gap-8 mobile:flex-col mobile:w-full mobile:px-4 tablet:w-[90vw]">
            <div className="title text-3xl font-bold text-center">Frequently Asked Questions(FAQs)</div>
            <div className="faqs-content relative flex flex-col w-full mobile:static">
                <div className="faqs-img flex w-[60vw] mobile:hidden">
                    <img src={faqsImg} alt="Image" className="w-full rounded-md h-fit" />
                </div>
                <div className="faqs-items absolute self-end w-2/3 mt-8 overflow-hidden rounded-md  bg-[rgb(255,255,255,.5)] backdrop-blur-lg shadow-2xl mobile:mt-0 mobile:static mobile:w-full mobile:bg-white">
                {
                    faqsData.map((item, index) => {
                        return (
                            <div className="item flex flex-col" key={index}>
                                <div className={`question font-bold flex items-center justify-between px-6 py-4 cursor-pointer mobile:p-4 ${faqsIndexOpen === index ? "bg-boldPurple shadow-2xl text-white" : ""}`} onClick={() => setFaqsIndexOpen(index)}>
                                    <span className="mobile:max-w-[90%] tablet:max-w-[90%]">{item.question}</span>
                                    <IconChevronDown stroke={1.5} />
                                </div>
                                <div className={`answer ${faqsIndexOpen === index ? "active" : ""}`}>
                                    <p className="text px-8 py-4 text-[rgb(0,0,0,.7)] mobile:px-6">{item.answer}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}