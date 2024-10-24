'use client';
import Banner from '@/components/Banner';
import Service from '@/components/Service';
import { useEffect, useState } from 'react';

export default function Home() {
  const [configExists, setConfigExists] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const checkConfig = async () => {
    setLoading(true);
    const response = await fetch('/api/checkConfig');
    const result = await response.json();
    setConfigExists(result.exists);
    setAddress(result.address);
    setLoading(false);
  };

  useEffect(() => {
    checkConfig();
  }, []);

  return (
    <main className="relative flex flex-col px-12 py-12 min-h-screen overflow-hidden mx-auto max-w-7xl w-full">
      <Banner
        configExists={configExists}
        address={address}
        loading={loading}
        checkConfig={checkConfig}
      />
      {configExists && (
        <div className="mt-12">
          <h1 className="text-2xl pb-3 font-inter">Services</h1>
          <hr />
          <div className="mt-6">
            <Service />
          </div>
        </div>
      )}
    </main>
  );
}
