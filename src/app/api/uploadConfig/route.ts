import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import fs from 'node:fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    // Check if the file has a .conf extension
    if (!file.name.endsWith('.conf')) {
      return NextResponse.json({
        status: 'fail',
        error: 'Invalid file type. Only .conf files are allowed.',
      });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const wireguardDir = '/etc/wireguard';
    const filePath = path.join(wireguardDir, 'wg0.conf');

    // Ensure the directory exists
    try {
      await fs.access(wireguardDir);
    } catch (_) {
      await fs.mkdir(wireguardDir, { recursive: true });
    }

    await fs.writeFile(filePath, buffer);
    revalidatePath('/');
    return NextResponse.json({ status: 'success' });
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e);
      return NextResponse.json({ status: 'fail', error: e.message });
    } else {
      console.error('Unexpected error', e);
      return NextResponse.json({
        status: 'fail',
        error: 'Unexpected error occurred',
      });
    }
  }
}
