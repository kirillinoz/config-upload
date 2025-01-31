import UploadForm from './UploadForm';

type BannerProps = {
  configExists: boolean;
  address: string | null;
  loading: boolean;
  checkConfig: () => void;
};

const Banner: React.FC<BannerProps> = ({
  configExists,
  address,
  loading,
  checkConfig,
}) => {
  return (
    <div className=" relative overflow-hidden rounded-lg">
      {/* Circle element */}
      <div
        className="absolute w-96 h-96 bg-green-300 rounded-full blur-xl opacity-50"
        style={{ top: '10%', left: '20%' }}
      ></div>
      <div
        className="absolute w-72 h-72 bg-green-400 rounded-full blur-xl opacity-50"
        style={{ top: '50%', left: '70%' }}
      ></div>
      <div
        className="absolute w-80 h-80 bg-green-200 rounded-full blur-xl opacity-50"
        style={{ top: '30%', left: '40%' }}
      ></div>
      <div
        className="absolute w-64 h-64 bg-green-300 rounded-full blur-xl opacity-50"
        style={{ top: '70%', left: '10%' }}
      ></div>
      <div
        className="absolute w-56 h-56 bg-green-400 rounded-full blur-xl opacity-50"
        style={{ top: '80%', left: '50%' }}
      ></div>

      {/* Glassmorphism card */}
      <div className="relative bg-green-500/10 shadow-lg ring-1 ring-black/5 rounded-lg w-full flex justify-center items-center backdrop-blur-lg box-border px-12 py-12">
        <div className="w-full">
          <div>
            <h1 className="text-4xl font-bold font-paytone">
              Willkommen bei MaxBox
            </h1>
          </div>
          {loading ? (
            <div className="mt-6 animate-pulse flex flex-col space-y-4">
              <div className="h-3 bg-gray-300 rounded"></div>
              <div className="w-32 h-3 bg-gray-300 rounded"></div>
            </div>
          ) : configExists ? (
            <p className="mt-6 font-inter">
              Das Hochladen der Deutschland-VPN Konfiguration war erfolgreich.
              Viel Spaß mit sicherem Netz!
            </p>
          ) : (
            <p className="mt-6 font-inter">
              Laden Sie bitte ihre{' '}
              <a className=" underline" href="https://innoroute.com/save/">
                Deutschland-VPN Konfiguration
              </a>{' '}
              hier hoch, um alle Funktionen der MaxBox nutzen zu können
            </p>
          )}
        </div>
        <div className="ml-6 w-full">
          <UploadForm
            configExists={configExists}
            address={address}
            checkConfig={checkConfig}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
