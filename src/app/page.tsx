import fs from 'node:fs/promises';
import path from 'path';

import Banner from '@/components/Banner';

export default async function Home() {
  const downloadsDir = path.join('etc/wireguard');

  // Ensure the directory exists
  try {
    await fs.access(downloadsDir);
  } catch (error) {
    console.log(error);
    await fs.mkdir(downloadsDir, { recursive: true });
  }

  return (
    <main className="relative flex flex-col px-12 py-12 min-h-screen overflow-hidden">
      <Banner />
    </main>
  );
}
