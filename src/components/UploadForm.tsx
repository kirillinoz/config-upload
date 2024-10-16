"use client";
import { useRef } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function UploadForm() {
  const fileInput = useRef<HTMLInputElement>(null);

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
      if (!file.name.endsWith(".conf")) {
        console.error("Invalid file type. Only .conf files are allowed.");
        alert("Invalid file type. Only .conf files are allowed.");
        return;
      }

      formData.append("file", file);
    } else {
      console.error("No file selected");
      return;
    }

    const response = await fetch("/api/uploadConfig", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="bg-white px-12 py-12 rounded-md mx-auto flex flex-col items-center w-fit">
      <div className="grid items-center gap-1.5">
        <Label htmlFor="file">Konfigurationsdatei</Label>
        <Input id="file" type="file" ref={fileInput} accept=".conf" />
      </div>
      <Button className="mt-6" onClick={uploadFile}>
        Hochladen
      </Button>
    </div>
  );
}
