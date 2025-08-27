import HTMLFlipBook from "react-pageflip";

export default function Scrapbook() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100">
      <div className="mx-auto scale-[0.6] sm:scale-100 origin-top">
        {" "}
        {/* 🔑 zoom out di mobile */}
        <HTMLFlipBook
          width={300} // lebar 1 halaman
          height={400} // tinggi halaman
          size="fixed"
          minWidth={300}
          maxWidth={600}
          minHeight={400}
          maxHeight={800}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          usePortrait={false} // 🔑 paksa selalu 2 halaman
          className="shadow-2xl rounded-lg"
        >
          {/* Cover */}
          <div className="relative bg-pink-200 flex items-center justify-center rounded-lg overflow-hidden">
            <h1 className="text-2xl sm:text-3xl font-bold text-pink-700">
              💝 Scrapbook
            </h1>
          </div>

          {/* Halaman 1 */}
          <div className="relative bg-white flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src="/images/contohgambar1.jpg"
              alt="foto 1"
              className="w-full h-full object-cover"
            />
            <p className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white drop-shadow-lg">
              Happy Birthday 🎉
            </p>
          </div>

          {/* Halaman 2 */}
          <div className="relative bg-white flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src="/images/contohgambar2.jpg"
              alt="foto 2"
              className="w-full h-full object-cover"
            />
            <p className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl text-pink-600 font-semibold">
              Semoga bahagia selalu 💖
            </p>
          </div>

          {/* Halaman 3 */}
          <div className="relative bg-white flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src="/images/contohgambar2.jpg"
              alt="foto 3"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/contohgambar.jpg"
              alt="foto 4"
              className="w-28 h-32 z-[9999] absolute top-1/2 -translate-y-1/2 rounded-xl"
            />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-base sm:text-lg bg-white/70 px-3 py-1 rounded-md shadow-md">
              Dari sahabat terbaikmu ✨
            </p>
          </div>

          {/* Back Cover */}
          <div className="relative bg-pink-300 flex items-center justify-center rounded-lg overflow-hidden">
            <h1 className="text-xl sm:text-2xl font-bold text-pink-800">
              🎂 The End 🎂
            </h1>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
