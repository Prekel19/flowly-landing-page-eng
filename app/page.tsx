import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import StepsSection from "./components/StepsSection";
import Testimonials from "./components/Testimonials";
import MobileMenu from "./components/MobileMenu";
import logo from "./assets/logo.png";
import layeredWavesFooter from "./assets/layered-waves-haikei.svg";
import plFlag from "./assets/pl-flag.svg";

export default function Home() {
  const tabs: { id: number; name: string }[] = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Features",
    },
    {
      id: 3,
      name: "Testimonials",
    },
  ];

  return (
    <>
      <header className="flex max-w-normal justify-between font-noto leading-normal py-8 px-12 mx-auto max-lg:px-6 max-sm:py-4">
        <div className="flex items-center gap-12 max-lg:gap-6">
          <Image
            src={logo}
            alt="Flowly logo"
            className="max-lg:max-w-90% max-sm:!max-w-75%"
            priority
          />
          <ul className="flex gap-8 max-md:hidden">
            {tabs.map((tab) => {
              return (
                <li key={tab.id} className="text-base font-semibold menu-item">
                  <a href={`#${tab.name.toLocaleLowerCase()}`}>{tab.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-6 py-2 *:transition *:duration-300 max-md:gap-4 max-md:hidden">
          <a
            href="#"
            className="flex bg-primary1 text-white items-center py-2 px-6 border border-primary1 rounded-xl hover:bg-secondary1 hover:text-primary1"
          >
            Create account
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-6 border border-primary1 rounded-xl hover:bg-primary1 hover:text-white"
          >
            Log in
          </a>
        </div>
        <a
          href="https://flowly-site.vercel.app"
          className="flex items-center gap-1 font-noto text-sm font-light absolute top-2 right-4 max-lg:top-1 max-lg:right-3 max-md:hidden"
        >
          <Image
            src={plFlag}
            alt="Flag of Poland"
            height={24}
            width={24}
            className="max-lg:scale-90"
          />
          PL
        </a>
        <MobileMenu></MobileMenu>
      </header>

      <main>
        <HeroSection></HeroSection>
        <Features></Features>
        <StepsSection></StepsSection>
        <Testimonials></Testimonials>
      </main>

      <footer className="flex flex-col pt-12">
        <Image src={layeredWavesFooter} alt="Layered waves footer" />
        <div className="flex flex-col items-center bg-accent2 px-24 pt-8 pb-10 max-sm:px-6 max-sm:pt-8 max-sm:pb-8">
          <a href="https://github.com/Prekel19" className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-12 fill-slate-900"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
              ></path>
            </svg>
          </a>
          <p className="font-noto font-semibold">Prekel19</p>
        </div>
      </footer>
    </>
  );
}
