import Image from "next/image";

export default function Navbar() {
    return (
      <nav className="bg-csh-purple w-full max-h-16 h-16">
        <a href="/" className='inline-block items-center ml-14 my-3'>
          <div className='float-left'>
            <Image priority src='/white_rounded_logo.png' alt='CSH Logo' width={40} height={40}
              className="object-contain h-auto max-w-full" />
          </div>
          <div className="text-white pl-3 pt-0.5 text-2xl font-light float-right">Constitution</div>
          </a>
      </nav>
    );
}