import fs from "node:fs/promises";
import path from "path";

import UploadForm from "@/components/UploadForm";

export default async function Home() {
  const downloadsDir = path.join("etc/wireguard");

  // Ensure the directory exists
  try {
    await fs.access(downloadsDir);
  } catch (error) {
    console.log(error);
    await fs.mkdir(downloadsDir, { recursive: true });
  }

  return (
    <main className="relative flex flex-col px-12 py-12 min-h-screen overflow-hidden">
      <div className=" relative overflow-hidden">
        {/* Circle element */}
        <div
          className="absolute w-96 h-96 bg-green-500 rounded-full blur-xl opacity-50"
          style={{ top: "10%", left: "20%" }}
        ></div>
        <div
          className="absolute w-72 h-72 bg-green-600 rounded-full blur-xl opacity-50"
          style={{ top: "50%", left: "70%" }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-green-400 rounded-full blur-xl opacity-50"
          style={{ top: "30%", left: "40%" }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-green-500 rounded-full blur-xl opacity-50"
          style={{ top: "70%", left: "10%" }}
        ></div>
        <div
          className="absolute w-56 h-56 bg-green-600 rounded-full blur-xl opacity-50"
          style={{ top: "80%", left: "50%" }}
        ></div>

        {/* Glassmorphism card */}
        <div className="relative bg-green-500/20 shadow-lg ring-1 ring-black/5 rounded-lg w-full min-h-screen flex flex-col justify-center items-center backdrop-blur-lg box-border px-12 py-12">
          <div>
            <h1 className="text-4xl font-bold">Willkommen bei MaxBox</h1>
          </div>
          <p className="mt-6">
            Laden sie bitte ihre{" "}
            <a
              className=" underline"
              href="https://innoroute.com/save/"
              target="_blank"
            >
              Deutschland-VPN Konfiguration
            </a>{" "}
            hier hoch
          </p>
          <div className="mt-12 mx-12">
            <UploadForm />
          </div>
        </div>
      </div>
    </main>
  );
}
