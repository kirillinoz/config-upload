import { NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'path';

export async function GET() {
  const wireguardDir = '/etc/wireguard';
  const filePath = path.join(wireguardDir, 'wg0.conf');

  try {
    await fs.access(filePath);

    // Read the file contents
    const fileContents = await fs.readFile(filePath, 'utf-8');

    // Extract the Address variable
    const addressMatch = fileContents.match(/Address\s*=\s*([^\s]+)/);
    const address = addressMatch ? addressMatch[1] : null;

    return NextResponse.json({ exists: true, address });
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      console.error('File not found:', error);
      return NextResponse.json({ exists: false, error: 'File not found' });
    } else if (error.code === 'EACCES') {
      console.error('Permission denied:', error);
      return NextResponse.json({ exists: false, error: 'Permission denied' });
    }
    return NextResponse.json({ exists: false });
  }
}
