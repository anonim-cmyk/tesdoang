import HTMLFlipBook from "react-pageflip";

function Scrapbook() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <HTMLFlipBook
        width={400}
        size="fixed"
        height={500}
        className="shadow-2xl rounded-lg w-[90vw] sm:w-[400px]"
        showCover
      >
        {/* Halaman 1 */}
        <div className="relative w-full h-full bg-[#f5e7d8] p-4">
          {/* Teks Utama */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-2">
            <h1 className="text-3xl font-serif font-bold">Happy Birthday</h1>
            <h2 className="text-2xl font-serif font-semibold">My Love</h2>
            <h2 className="text-2xl font-serif font-semibold">
              Rahmalia El Vanya
            </h2>
            <span className="absolute bottom-4 right-24 text-sm font-sans italic">
              4 Desember 2025
            </span>
          </div>

          {/* Dekorasi */}
          <img
            src="/images/kue.png"
            alt="kue"
            className="absolute bottom-0 w-32 h-32 rounded-full"
          />
          <img
            src="/images/pelangi.png"
            alt="pelangi"
            className="absolute top-0 left-10 w-32 h-20 -rotate-[10deg]"
          />
          <img
            src="/images/bulan.png"
            alt="bulan"
            className="absolute bottom-1/2 translate-y-1/2 w-10 h-10"
          />
          <img
            src="/images/ranting.png"
            alt="ranting"
            className="absolute right-0 w-32 h-32 rotate-45"
          />
          <img
            src="/images/bunga.png"
            alt="bunga"
            className="absolute bottom-0 right-0 w-20"
          />
          <img
            src="/images/bunga-kecil.png"
            alt="bunga kecil"
            className="w-10 h-10 absolute right-0 top-1/2 -translate-y-1/2"
          />
        </div>

        {/* Halaman 2 */}
        <div className="text-center bg-[#f5e7d8] relative h-full w-full overflow-hidden p-4">
          <h1 className="text-3xl font-serif font-bold inline-block">Lovely</h1>
          <div className="flex justify-center items-center h-full -translate-y-11">
            {/* Border luar (coklat gelap) */}
            <div className="rounded-full border-[16px] border-[#4b2e2e]">
              {/* Border dalam (coklat terang) */}
              <div className="rounded-full border-[14px] border-[#a9745b]">
                {/* Gambar */}
                <img
                  src="/images/image.png"
                  alt="image"
                  className="w-64 h-64 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <img
            src="/images/daun.png"
            alt="daun"
            className="w-16 h-16 absolute top-1/2 -translate-y-1/2 -left-3"
          />
          <img
            src="/images/plus.svg"
            alt="plus"
            className="w-16 h-16 absolute bottom-1/6 left-8 -translate-y-4"
          />
          <img
            src="/images/plus.svg"
            alt="plus"
            className="w-5 h-5 absolute bottom-1/3 left-5 translate-y-6"
          />
          <img
            src="/images/plus.svg"
            alt="plus"
            className="w-5 h-5 absolute bottom-0 left-7 -translate-y-24"
          />
          <img
            src="/images/plus.svg"
            alt="plus"
            className="w-5 h-5 absolute bottom-0 left-12 -translate-y-20"
          />
          <img
            src="/images/plus.svg"
            alt="plus"
            className="w-10 h-10 absolute bottom-0 left-20 -translate-y-20"
          />
          <img
            src="/images/play.png"
            alt="play"
            className="w-18 h-18 absolute top-0 translate-y-16 left-6 rotate-45"
          />
          <img
            src="/images/garis.png"
            alt="garis"
            className="w-28 h-28 absolute bottom-2 left-1/2 -translate-x-1/2"
          />
          <img
            src="/images/gallery.png"
            alt="garis"
            className="w-28 h-32 absolute bottom-4 left-1/2 translate-x-16 rotate-[22deg]"
          />
          <img
            src="/images/bunga-belok.png"
            alt="garis"
            className="w-32 h-32 absolute bottom-16 -translate-y-16 left-1/2 translate-x-28 rotate-[20deg]"
          />
          <img
            src="/images/love.png"
            alt="garis"
            className="w-24 h-24 absolute top-0 right-0 translate-y-16"
          />
        </div>

        {/* Halaman 3 */}
        <div className="flex items-center justify-center p-4 bg-[#f5e7d8]">
          <div className="flex flex-col justify-center items-center h-full space-y-8">
            <h1 className="text-3xl font-serif font-bold text-center">
              My wish for u
            </h1>
            <p className="text-md text-center">
              Semoga di hari ulang tahunmu ini, kamu panjang umurnya, sehat
              selalu, lancar rezekinya, diberi kemudahan dalam segala urusan,
              dan selalu dikelilingi orang baik, im proud of you!
            </p>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Scrapbook;
