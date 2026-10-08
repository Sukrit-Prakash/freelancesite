import Image from "next/image";

// A phone frame around a screenshot. Position and width come from className; height follows the 9:19.5 ratio.
export default function PhoneMockup({ src, alt, className = "", priority = false, sizes = "300px" }) {
    return (
        <div className={className}>
            <div className="relative aspect-[360/780] rounded-[2.4rem] bg-ink-950 p-[3.5%] shadow-2xl shadow-black/50 ring-1 ring-white/15">
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-ink-900">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes={sizes}
                        priority={priority}
                        unoptimized={src.endsWith(".svg")}
                        className="object-cover object-top"
                    />
                    {/* Dynamic island */}
                    <div className="absolute left-1/2 top-[1.6%] h-[3.2%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
                </div>
                {/* Side buttons */}
                <span className="absolute -left-[3px] top-[18%] h-[7%] w-[3px] rounded-l bg-ink-700" />
                <span className="absolute -left-[3px] top-[27%] h-[10%] w-[3px] rounded-l bg-ink-700" />
                <span className="absolute -right-[3px] top-[22%] h-[12%] w-[3px] rounded-r bg-ink-700" />
            </div>
        </div>
    );
}
