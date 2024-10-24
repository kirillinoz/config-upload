import React from 'react';
import nextcloud_logo from '../../public/services/nextcloud_logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Service = () => {
  return (
    <Link
      href="/nextcloud"
      className="aspect-square w-72 relative overflow-hidden border border-gray-900 rounded-lg hover:opacity-70 cursor-pointer transition-opacity inline-block"
    >
      {/* Circle element */}
      <div
        className="absolute w-96 h-96 bg-gray-200 rounded-full blur-xl opacity-50"
        style={{ top: '10%', left: '20%' }}
      ></div>
      <div
        className="absolute w-72 h-72 bg-gray-300 rounded-full blur-xl opacity-50"
        style={{ top: '50%', left: '70%' }}
      ></div>
      <div
        className="absolute w-80 h-80 bg-gray-100 rounded-full blur-xl opacity-50"
        style={{ top: '30%', left: '40%' }}
      ></div>
      <div
        className="absolute w-64 h-64 bg-gray-200 rounded-full blur-xl opacity-50"
        style={{ top: '70%', left: '10%' }}
      ></div>
      <div
        className="absolute w-56 h-56 bg-gray-300 rounded-full blur-xl opacity-50"
        style={{ top: '80%', left: '50%' }}
      ></div>
      <div className="relative bg-gray-500/10 shadow-lg ring-1 w-full h-full ring-black/5 rounded-lg flex justify-center items-center backdrop-blur-lg box-border px-12 py-12">
        <Image src={nextcloud_logo} alt="Logo" width={250} height={250} />
      </div>
    </Link>
  );
};

export default Service;
