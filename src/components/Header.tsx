'use client';
import Image from 'next/image';
import logo from '../../public/logo.png'; // Adjust the path as necessary
import Link from 'next/link';
import { LucideHouse, ScrollText } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white text-black shadow-lg flex">
      <div className="w-full max-w-7xl flex justify-between items-center px-8 py-4 mx-auto">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} />
          <p className="ml-3 font-bold font-paytone text-[#656565]">MaxBox</p>
        </div>
        <div className="flex-1 flex justify-end">
          <nav className="flex items-center space-x-4">
            <Link href="/" className="border-r-2 pr-4">
              <LucideHouse
                className={`${
                  isActive('/') && 'opacity-70'
                } hover:opacity-70 transition-opacity`}
                strokeWidth={3}
              />
            </Link>
            <Link href="/whitelist">
              <ScrollText
                className={`${
                  isActive('/whitelist') && 'opacity-70'
                } hover:opacity-70 transition-opacity`}
                strokeWidth={3}
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
