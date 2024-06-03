import aboutUs from "../assets/aboutus.jpg"

export default function WhatAndWho(){

    const whatAndWhoData = [
        {
            title: "Siapa Kita",
            text: " Kami adalah penyedia layanan penyewaan studio foto profesional yang berdedikasi untuk membantu Anda menangkap momen-momen berharga dan menciptakan karya visual yang memukau. Dengan fasilitas terkini dan lingkungan yang nyaman, kami menyediakan ruang ideal untuk berbagai kebutuhan fotografi Anda, mulai dari sesi pemotretan pribadi, komersial, hingga proyek kreatif lainnya."
        },
        {
            title: "Apa yang kita lakukan",
            text: "Di Studio Foto Hydra, kami menawarkan berbagai layanan profesional untuk memenuhi kebutuhan fotografi Anda. Dengan fasilitas yang lengkap dan tim berpengalaman, kami siap membantu Anda menciptakan hasil terbaik dalam setiap proyek fotografi."
        }
    ]

    return (
        <section className="what-and-who w-[80vw] mx-auto my-32 flex flex-col items-center gap-8 mobile:w-full mobile:px-4 tablet:w-[90vw]">
            <div className="img flex">
                <img src={aboutUs} alt="Image" className="w-full h-fit rounded-md" />
            </div>
            <div className="info flex gap-4 mobile:flex-col">
            {
                whatAndWhoData.map((item, index) => {
                    return (
                        <div className="item w-full flex flex-col gap-4" key={index}>
                            <div className="title text-2xl font-bold">{item.title}</div>
                            <div className="text text-black/[.7] text-justify">{item.text}</div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}