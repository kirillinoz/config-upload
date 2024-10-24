import Image from 'next/image';
import logo from '../../public/logo.png'; // Adjust the path as necessary
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white text-black shadow-lg">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <p className="ml-3">MaxBox</p>
      </div>
      <div className="flex-1 flex justify-end">
        <nav className="flex space-x-4">
          <Link href="#dokumentation">Dokumentation</Link>
          <Link href="#einstellungen">Einstellungen</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
