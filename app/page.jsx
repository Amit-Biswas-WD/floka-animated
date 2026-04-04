import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto ">
      {/* nav section */}
      <nav className="grid lg:grid-cols-8 gap-2 items-center text-base text-[#202020] font-medium h-[72px]">
        {/* Logo */}
        <div className="relative col-span-2">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={90}
            height={24}
            sizes="90px"
            className="object-contain"
          />
        </div>

        {/* Menu */}
        <div className="col-span-4">
          <ul className="flex justify-between items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="col-span-2">
          <h3 className="text-end">info@floka.com</h3>
        </div>
      </nav>
      <main>
        {/* approach section */}
        <section>
          <div className="grid md:grid-cols-5 gap-10">
            <div className="col-span-2 relative flex flex-col items-start">
              {/* Circular Text and Logo Container */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                {/* SVG for Rotating Text */}
                <svg
                  className="absolute w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[8px] uppercase tracking-[2px] fill-[#666666]">
                    <textPath xlinkHref="#circlePath">
                      Luxurious, or more / want it to sound playful,
                    </textPath>
                  </text>
                </svg>

                {/* Center Logo */}
                <div className="z-10 p-2 rounded-full">
                  <Image
                    src="/logo/Screenshot_33.png"
                    alt="Approach Image"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom Description */}
              <p className="text-base text-[#666666] font-normal mt-4">
                We design every project with long- <br />
                term success in mind.
              </p>
            </div>
            <div className="col-span-3">
              <h2 className="text-4xl font-bold mb-6">
                Our approach is straightforward— prioritizing functionality,
                speed, and clarity for solutions.
              </h2>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}
