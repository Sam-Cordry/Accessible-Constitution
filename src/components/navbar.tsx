import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="bg-csh-purple w-full max-h-16 h-16">
        <div className="inline-flex">
          <a href="/" className="ml-14 my-3 order-1">
              <Image priority src='/white_rounded_logo.png' alt='CSH Logo' width={40} height={40}
                className="object-contain h-auto max-w-full float-left" />
            <div className="text-white pl-3 pt-0.5 text-2xl font-light float-right">Constitution</div>
          </a>
          <Link href="/text" className="text-white pl-10 text-xl font-light order-2 place-self-center">Text</Link>
          <Link href="/audio" className="text-white pl-5 text-xl font-light order-3 place-self-center">Audio</Link>
          <Link href="/search" className="text-white pl-5 text-xl font-light order-4 place-self-center">Search</Link>
        </div>
      </nav>
    );
}