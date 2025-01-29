import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={60}
            height={38}
          />
        </Link>

        <p>2025 GatherEase. All Rights reserved.</p>

        <div className="flex flex-col items-center gap-2 sm:items-end">
          <p className="font-medium">Somya Gangwar</p>
          <div className="flex gap-4">
            <Link 
              href="https://github.com/gangwarsomya" 
              target="_blank" 
              className="text-blue-500 hover:underline"
            >
              GitHub
            </Link>
            <Link 
              href="https://www.linkedin.com/in/somya-gangwar-191159200/" 
              target="_blank" 
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
