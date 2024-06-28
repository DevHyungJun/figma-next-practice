"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

const Header = () => {
  const navLinkStyles = "p-3 hover:opacity-20";
  const [showMenu, setShowMenu] = useState(false);

  const menuBtnClick = () => setShowMenu(!showMenu);

  return (
    <header className="max-w-[1110px] min-h-[44px] flex justify-between mx-auto mt-[56px] p-3 max-[890px]:p-6 max-[890px]:mt-3">
      <h1 className="text-3xl font-bold flex">
        <Link href="/" className="mt-3">
          <Image src='/images/Group 6.svg' width={147} height={24} alt="logo" />
        </Link>
      </h1>
      <nav className="flex max-[890px]:hidden">
        <ul className="flex gap-7 items-center font-medium">
          <li><Link href="/pricing" className={navLinkStyles}>Pricing</Link></li>
          <li><Link href="/product" className={navLinkStyles}>Product</Link></li>
          <li><Link href="/about" className={navLinkStyles}>About Us</Link></li>
          <li><Link href="/careers" className={navLinkStyles}>Careers</Link></li>
          <li><Link href="/community" className={navLinkStyles}>Community</Link></li>
        </ul>
      </nav>
      <Btn hidden={true} />
      {showMenu ? (<Image src='/images/Group.png' width={21} height={22} alt="closeBtn" className="hidden max-[890px]:block closeBtn" onClick={menuBtnClick} />) : (
        <Image src='/images/hamberger.svg' width={25} height={18} alt="hamberger" className="hidden max-[890px]:block" onClick={menuBtnClick} />
      )}
      {showMenu && <Menu />}
    </header>
  )
}

const Menu = () => {
  const li = 'text-[242D52] traking-[-0.29px] text-center font-bold hover:opacity-70';

  return (
    <div className="w-[325px] h-[291px] absolute z-10 top-[103px] bg-white mx-auto
    min-[890px]:hidden left-1/2 transform -translate-x-1/2 border shadow-2xl">
      <nav className="flex justify-center items-center h-full">
        <ul className="flex flex-col gap-6 justify-center items-center">
          <li className={li}><Link href="/pricing">Pricing</Link></li>
          <li className={li}><Link href="/product">Product</Link></li>
          <li className={li}><Link href="/About">About Us</Link></li>
          <li className={li}><Link href="/careers">Careers</Link></li>
          <li className={li}><Link href="/community">Community</Link></li>
        </ul>
      </nav>
    </div>
  )
}

const Main = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  )
}

const Section1 = () => {
  return (
    <section className="flex justify-between max-w-[1110px] mx-auto mt-[150px] p-3 max-[890px]:flex-col max-[890px]:mt-3">
      <div className="flex flex-col gap-10 text-[#242D52] max-[890px]:order-last">
        <h1 className="text-[56px] font-bold traking-[-1px] leading-[64px] max-[890px]:text-[40px] max-[890px]:text-center max-[890px]:leading-[50px]">Bring everyone<br />together to build<br /> better products</h1>
        <span className="leading-[26px] align-top max-[890px]:text-center">Manage makes it simple for software teams<br />to plan day-to-day tasks white keeping the<br />larget team goals in view.</span>

        <div className="max-[890px]:mx-auto"><Btn /></div>
      </div>

      <Image src="/images/group.svg" width={540} height={485} alt="group-img" className="max-[890px]:mx-auto" />
    </section>
  )
}

const Section2 = () => {
  const rightH4 = 'font-bold text-[#242D52] tarking-[-0.29px]';
  const rightSpan = `leading-[26px] text-[#242D52]`

  return (
    <section className="flex justify-between max-w-[1110px] min-h-[536px] mx-auto mt-[100px] p-3 max-[890px]:flex-col">

      <div className="flex flex-col">
        <h2 className="text-[40px] font-bold text-[#242D52] traking-[-0.71px] leading-[44px] max-[890px]:text-center">What's different about<br />Manage?</h2>
        <span className="text-[16px] leading-[26px] text-[#242D52] max-[890px]:text-center max-[890px]:mt-10">
          Manage provides all the functionality your<br />
          team needs, without the complexity. Our<br />
          software is tailor-made for modern digital<br />
          product teams.
        </span>
      </div>

      <div className="flex flex-col gap-12 max-[890px]:mt-[100px] max-[890px]:w-[359px]
      max-[890px]:mx-auto">
        <div className="flex items-start gap-8 max-[890px]:justify-center">
          <Btn2 text='01' />
          <div>
            <h4 className={`${rightH4} max-[890px]:p-2 max-[890px]:bg-[#FFF0EC] rounded-3xl`}>Track company-wide progress</h4>
            <span className={rightSpan}>
              See how your day-to-day tasks fit into the wider vision. <br />
              Go from tracking progress at the milestone level all the <br />
              way done to the smallest of details. Never lose sight of <br />
              the bigger picture again.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-8 max-[890px]:justify-center">
          <Btn2 text='02' />
          <div>
            <h4 className={`${rightH4} max-[890px]:p-2 max-[890px]:bg-[#FFF0EC] rounded-3xl`}>Advanced built-in report</h4>
            <span className={rightSpan}>
              See internal delivery estimates and track progress toward <br />
              company goals. Our customisable dashboard helps you <br />
              build out the reports you need to keep key stakeholders <br />
              informed.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-8 max-[890px]:justify-center">
          <Btn2 text='03' />
          <div>
            <h4 className={`${rightH4} max-[890px]:p-2 max-[890px]:bg-[#FFF0EC] rounded-3xl`}>Everything you need in one place</h4>
            <span className={rightSpan}>
              Stop jumping from one service to another to <br />
              communicate, store files, track tasks and share <br />
              document. Manage offers an all-in-one team <br />
              productivity solution.
            </span>
          </div>
        </div>
      </div>


    </section>
  )
}

const Section3 = () => {
  const card1SpanInnerHtml = `
    "Manage has supercharged our team's workflow. The
    ablitty to maintain visibilty on larger milestones at all times
    keeps everyone motivated"
    `;
  const card2SpanInnerHtml = `
    "We have been able to cancel so many other subscriptions
    slince using Manage. There is no more cross-channel
    confusion and everyone is much more focused"
    `;
  const card3SpanInnerHtml = `
    "Manage allows us to provide structure and process. it
    keeps us organizd and focused. i can't stop recommending
    them to everyone i talk to!"
    `;
  const card4SpanInnerHtml = `
    "Their software allows us track, manage and collaborate
    on our projects from anywhere. it keeps the whole team
    in sync without being intrusive"
    `;

  return (
    <section className="max-w-[120%] min-h-[470px] mt-[150px] overflow-hidden max-[890px]:mt-[100px] max-[890px]:mx-auto max-[890px]:max-w-[350px]">
      <h2 className="text-[40px] traking-[-0.71px] leading-[44px] text-[#242D52] font-bold text-center mb-[100px]">What they've said</h2>

      <div className="flex gap-11 justify-center">
        <div className="max-[890px]:hidden">
          <Section3Card cardH4InnerHTML='Anisha Li' cardSpanInnerHTML={card1SpanInnerHtml} img='ali.png' />
        </div>
        <div>
          <Section3Card cardH4InnerHTML='Ali Bravo' cardSpanInnerHTML={card2SpanInnerHtml} img='Oval.png' />
        </div>
        <div className="max-[890px]:hidden">
          <Section3Card cardH4InnerHTML='Richard Watts' cardSpanInnerHTML={card3SpanInnerHtml} img='richard.png' />
        </div>
        <div className="max-[890px]:hidden">
          <Section3Card cardH4InnerHTML='Shanai Gough' cardSpanInnerHTML={card4SpanInnerHtml} img='sanai.png' />
        </div>
      </div>

      <Image src="/images/Group 15.png" width={43} height={7} alt="card-dot" className="mx-auto mt-5 min-[890px]:hidden" />
      <div className="w-[137px] mx-auto mt-9">
        <Btn />
      </div>
    </section>
  )
}

interface Section3CardTypes {
  cardH4InnerHTML: string;
  img: string;
  cardSpanInnerHTML: string;
}
const Section3Card: React.FC<Section3CardTypes> =
  ({ cardH4InnerHTML, img, cardSpanInnerHTML }) => {

    return (
      <div className="max-w-[540px] min-h-[220px] bg-[#FAFAFA] relative flex flex-col justify-center gap-5 p-6">
        <Image src={`/images/${img}`} width={72} height={72} alt="oval-img" className="absolute top-[-33px] left-[217px] max-[890px]:left-[140px]" />
        <h4 className="font-bold traking-[-0.29px] text-center mt-5">{cardH4InnerHTML}</h4>
        <span className="leading-[26px] text-[#242D52] mx-auto text-center w-[460px] max-[890px]:w-[100%]">{cardSpanInnerHTML}</span>
      </div>
    )
  }

const Section4 = () => {
  return (
    <section className="bg-[#F3603C] min-h-[220px] text-white mt-[150px] max-[890px]:pb-[100px]">
      <div className="max-w-[1114px] flex justify-between mx-auto pt-[66px] p-3 max-[890px]:flex-col">
        <div className="max-[890px]:mx-auto">
          <h2 className="text-[40px] font-bold traking-[-0.71px] leading-[44px] max-[890px]:w-[312px] max-[890px]:text-center max-[890px]:mb-9">Simplify how your team <br /> works today.</h2>
        </div>
        <button className="px-6 py-3 bg-white text-[#F3603C] rounded-[22px] text-bold self-center hover:opacity-70 font-bold">Get Started</button>
      </div>
    </section>
  );
};

const Footer = () => {
  const liHover = 'hover:text-[#F3603C]';

  return (
    <footer className="bg-[#1D1E25] min-h-[250px] p-3">
      <div className="max-w-[1104px] min-h-[127px] flex justify-between text-white mx-auto pt-[61.5px]
      max-[890px]:flex-col">
        <div className="flex flex-col justify-between max-[890px]:order-last">
          <Link href='/' className="max-[890px]:order-last max-[890px]:mx-auto">
            <Image src='/images/Group 6.png' width={147} height={24} alt="white-logo" className="max-[890px]:hidden" />
            <Image src='/images/Group 6.png' width={158} height={26} alt="white-logo" className="hidden max-[890px]:block mt-14" />
          </Link>
          <Image src='/images/Group 27.png' width={154} height={20} alt="platform-logos" className="max-[890px]:mx-auto max-[890px]:hidden" />
          <Image src='/images/Group 29.png' width={296} height={32} alt="platform-logos" className="max-[890px]:mx-auto hidden max-[890px]:block" />
        </div>
        <div className="max-[890px]:order-2 max-[890px]:mx-auto max-[890px]:mb-14">
          <nav className="flex gap-[100px]">
            <ul className="flex flex-col gap-3">
              <Link href="/"><li className={liHover}>Home</li></Link>
              <Link href="/pricing"><li className={liHover}>Pricing</li></Link>
              <Link href="/products"><li className={liHover}>Products</li></Link>
              <Link href="/about"><li className={liHover}>About Us</li></Link>
            </ul>
            <ul className="flex flex-col gap-3">
              <Link href="/careers"><li className={liHover}>Careers</li></Link>
              <Link href="/community"><li className={liHover}>Community</li></Link>
              <Link href="/privacy"><li className={liHover}>Privacy Policy</li></Link>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-between max-[890px]:order-1 max-[890px]:mb-16">
          <form className="flex gap-2 items-center">
            <input type="text" className="w-[200px] h-[33px] p-3 text-[13px] rounded-[22px] text-black max-[890px]:w-[239px] max-[890px]:h-[44px]" placeholder="Updates in your inbox..." />
            <button className="bg-[#F3603C] w-[64px] h-[44px] rounded-[22px] font-bold hover:opacity-70 max-[890px]:w-[80px] max-[890px]:h-[44px]">Go</button>
          </form>
          <span className="opacity-60 max-[890px]:text-center max-[890px]:hidden">Copyright 2020.All Right Reserved</span>
        </div>
        <span className="opacity-60 max-[890px]:text-center hidden max-[890px]:block order-last mb-10 mt-14">Copyright 2020.All Right Reserved</span>
      </div>
    </footer>
  )
}

interface Btn { hidden?: boolean }
const Btn: React.FC<Btn> = ({ hidden }) => {
  return (
    <button className={`w-[137px] h-[44px] rounded-[22px] bg-[#F3603C] text-white text-[13px] hover:opacity-70 font-bold ${hidden ? 'max-[890px]:hidden' : ''} shadow-md`}>
      Get Started
    </button>
  );
}

interface Btn2Type { text: string }
const Btn2: React.FC<Btn2Type> = ({ text }) => {
  return (
    <button className="w-[67px] h-[39px] rounded-[39px] bg-[#F3603C] text-white text-[13px] hover:opacity-70 font-bold">
      {text}
    </button>
  )
}