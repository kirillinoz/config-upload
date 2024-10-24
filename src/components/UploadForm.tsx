'use client';
import { useRef, useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';

export default function UploadForm({
  configExists,
  address,
  checkConfig,
  loading,
}: {
  configExists: boolean;
  address: string | null;
  checkConfig: () => void;
  loading: boolean;
}) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [isFileSelected, setIsFileSelected] = useState(false);

  const handleFileChange = () => {
    if (
      fileInput.current &&
      fileInput.current.files &&
      fileInput.current.files.length > 0
    ) {
      setIsFileSelected(true);
    } else {
      setIsFileSelected(false);
    }
  };

  const uploadFile = async (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    const formData = new FormData();
    if (
      fileInput.current &&
      fileInput.current.files &&
      fileInput.current.files[0]
    ) {
      const file = fileInput.current.files[0];

      // Check if the file has a .conf extension
      if (!file.name.endsWith('.conf')) {
        console.error('Invalid file type. Only .conf files are allowed.');
        alert('Invalid file type. Only .conf files are allowed.');
        return;
      }

      formData.append('file', file);
    } else {
      console.error('No file selected');
      return;
    }

    const response = await fetch('/api/uploadConfig', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    console.log(result);

    checkConfig();
  };

  const formatAddressToNumber = (address: string | null): string => {
    if (!address) return '';

    const parts = address.split(':');
    if (parts.length < 2) return address;

    for (let i = 1; i < parts.length - 2; i++) {
      parts[i] = parts[i].padStart(4, '0');
    }

    address = parts.join(':');

    address = address.replace(/AF|FF::1/g, '');

    address = '+' + address.replace(/:/g, '');

    // Remove /64 at the end
    address = address.replace(/\/64$/, '');

    return address;
  };

  return (
    <div className="bg-white px-12 py-12 min-w-96 min-h-56 rounded-md mx-auto flex flex-col items-center justify-center w-fit">
      {loading ? (
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="w-48 h-6 bg-gray-300 rounded"></div>
          <div className="w-32 h-6 bg-gray-300 rounded"></div>
        </div>
      ) : configExists ? (
        <div className="font-inter">
          <p>
            Adresse: <span className="font-bold">{address}</span>
          </p>
          <p className="mt-3">
            Telefonnummer:{' '}
            <span className=" font-bold">{formatAddressToNumber(address)}</span>
          </p>
        </div>
      ) : (
        <>
          <div className="grid items-center font-inter gap-1.5">
            <Label htmlFor="file">Konfigurationsdatei</Label>
            <Input
              id="file"
              type="file"
              ref={fileInput}
              accept=".conf"
              onChange={handleFileChange}
            />
          </div>
          <Button
            disabled={!isFileSelected}
            className="mt-6"
            onClick={uploadFile}
          >
            Hochladen
          </Button>
        </>
      )}
    </div>
  );
}
