import Image from "next/image";

export default function Home() {
    return (
        <div className="container flex flex-col min-h-screen">
            <div className="flex">
                <div className="">
                    <h1 className="text-pal-peru leading-none">
                        Jakub Sidorowicz
                    </h1>

                    <p className="bitter font-medium text-xl text-pal-blue leading-none">
                        Software Engineer
                    </p>
                </div>
                <div className="">content</div>
            </div>

            <div className="city text-white opacity-50 w-full mt-auto -mb-0.5"></div>
        </div>
    );
}
