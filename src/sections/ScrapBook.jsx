import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import gsap from "gsap";

function Scrapbook() {
  const audioRef = useRef(null);
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const animatedPages = useRef(new Set());

  const animatedPage = (pageIndex) => {
    if (animatedPages.current.has(pageIndex)) return;

    const page = bookRef.current.pageFlip().getPage(pageIndex)?.element;
    if (!page) return;

    const items = page.querySelectorAll(".animated-item");

    animatedPages.current.add(pageIndex);
    if (pageIndex % 2 === 0) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 }, // kondisi awal
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          clearProps: "all",
        }
      );
    } else {
      // animasi B untuk halaman ganjil
      gsap.fromTo(
        items,
        { opacity: 0, x: -100 }, // kondisi awal
        {
          opacity: 1,
          x: 0,
          stagger: 0.3,
          duration: 1,
          clearProps: "all",
        }
      );
    }
  };

  const handleFlip = (e) => {
    const pageIndex = e.data;
    setCurrentPage(pageIndex);
    animatedPage(pageIndex);

    if (audioRef && audioRef.current.paused) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth > 1024) {
        const totalPages = bookRef.current.pageFlip().getPageCount();
        for (let i = 0; i < totalPages; i++) {
          animatedPage(i);
        }
      } else {
        animatedPage(0);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 overflow-hidden">
      <audio ref={audioRef} loop>
        <source src="/music/music.mp3" type="audio/mpeg" />
      </audio>
      <HTMLFlipBook
        width={350}
        height={500}
        minWidth={250}
        maxWidth={380}
        className="shadow-2xl rounded-lg w-[90vw] max-w-[380px]"
        ref={bookRef}
        onFlip={handleFlip}
        showCover={true}
      >
        {/* Halaman 1 */}
        <div className="page relative bg-[#f5e7d8]">
          {/* Teks Utama */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-2">
            <h1 className="text-2xl font-header font-bold relative">
              <span className="animated-item text-6xl">Happy</span> <br />{" "}
              <span className="animated-item text-6xl">Birthday</span>{" "}
              <span className="animated-item ml-2 absolute font-serif">
                24th
              </span>
            </h1>
            <h2 className="animated-item text-2xl font-serif font-semibold">
              My Love
            </h2>
            <h2 className="animated-item text-2xl font-serif font-semibold">
              Rahmalia El Vanya
            </h2>
            <span className="animated-item absolute bottom-4 right-24 text-sm font-sans italic">
              4 Desember 2025
            </span>
          </div>

          {/* Dekorasi */}
          <img
            src="/images/kue.png"
            alt="kue"
            className="animated-item absolute bottom-0 left-0 w-32 h-32"
          />
          <img
            src="/images/pelangi.png"
            alt="pelangi"
            className="animated-item absolute top-0 left-0 w-32 h-20 -rotate-[10deg]"
          />
          <img
            src="/images/bulan.png"
            alt="bulan"
            className="animated-item absolute bottom-1/2 translate-y-1/2 w-10 h-10"
          />
          <img
            src="/images/ranting.png"
            alt="ranting"
            className="animated-item absolute right-0 w-32 h-32 rotate-45"
          />
          <img
            src="/images/bunga.png"
            alt="bunga"
            className="animated-item absolute bottom-0 right-0 w-20"
          />
          <img
            src="/images/bunga-kecil.png"
            alt="bunga kecil"
            className="animated-item w-10 h-10 absolute right-0 top-1/2"
          />
        </div>

        {/* Halaman 2 */}
        <div className="page bg-[#f5e7d8] overflow-hidden">
          <div className="relative flex flex-col gap-4 justify-center items-center h-full -translate-y-11">
            <h1 className="animated-item text-6xl text-center font-header font-bold">
              Lovely
            </h1>
            <div className="rounded-full border-[16px] border-[#4b2e2e]">
              <div className="rounded-full border-[14px] border-[#a9745b]">
                <img
                  src="/images/image.png"
                  alt="image"
                  className="animated-item w-52 h-52 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <img
            src="/images/daun.png"
            alt="daun"
            className="animated-item w-16 h-16 absolute top-1/2 -translate-y-1/2 -left-2"
          />
          <img
            src="/images/plus.svg"
            alt="plus"
            className="animated-item w-16 h-16 absolute bottom-1/6 left-4 -translate-y-2"
          />
          <img
            src="/images/plus.svg"
            alt="plus"
            className="animated-item w-5 h-5 absolute bottom-1/3 left-5 translate-y-6"
          />
          <img
            src="/images/plus.svg"
            alt="plus"
            className="animated-item w-5 h-5 absolute bottom-0 left-5 -translate-y-20"
          />
          <img
            src="/images/plus.svg"
            alt="plus"
            className="animated-item w-5 h-5 absolute bottom-0 left-10 -translate-y-16"
          />
          <img
            src="/images/plus.svg"
            alt="plus"
            className="animated-item w-10 h-10 absolute bottom-0 left-16 -translate-y-16"
          />
          <img
            src="/images/play.png"
            alt="play"
            className="animated-item w-28 h-28 absolute top-0 translate-y-16 -left-4 rotate-45"
          />
          <img
            src="/images/garis.png"
            alt="garis"
            className="animated-item w-28 h-28 absolute bottom-2 left-1/2 -translate-x-1/2"
          />
          <img
            src="/images/gallery.png"
            alt="garis"
            className="animated-item w-28 h-32 absolute bottom-4 left-1/2 translate-x-16 rotate-[22deg]"
          />
          <img
            src="/images/bunga-belok.png"
            alt="garis"
            className="animated-item w-32 h-32 absolute bottom-16 -translate-y-16 -right-7 rotate-[20deg]"
          />
          <img
            src="/images/love.png"
            alt="garis"
            className="animated-item w-24 h-24 absolute top-0 right-0 translate-y-16"
          />
        </div>

        {/* Halaman 3 */}
        <div className="page flex items-center justify-center p-4 bg-[#f5e7d8]">
          <div className="flex flex-col justify-center items-center h-full space-y-4">
            <h1 className="animated-item text-3xl font-serif font-bold text-center">
              My wish for u
            </h1>
            <p className="animated-item text-md text-center font-serif">
              Semoga di hari ulang tahunmu ini, kamu panjang umurnya, sehat
              selalu, lancar rezekinya, diberi kemudahan dalam segala urusan,
              dan selalu dikelilingi orang baik, im proud of you!
            </p>
          </div>
        </div>

        {/* Halaman 4 */}
        <div className="page flex flex-col items-center justify-center bg-[#f5e7d8] relative overflow-hidden">
          <div className="relative flex flex-col h-full justify-center items-center gap-6">
            <h1 className="animated-item text-6xl font-header font-bold text-center">
              My Girlfriend
            </h1>
            <img
              src="/images/daun-dua.png"
              alt="daun"
              className="animated-item absolute top-0 right-0 rotate-180"
            />
            <img
              src="/images/daun-dua.png"
              alt="daun"
              className="animated-item absolute bottom-0 left-0"
            />
            <img
              src="/images/bunga-kecil.png"
              alt="bunga"
              className="animated-item w-14 h-14 absolute top-4 left-14"
            />
            <img
              src="/images/bunga-kecil.png"
              alt="bunga"
              className="animated-item w-14 h-14 absolute right-4"
            />
            <img
              src="/images/bunga-kecil.png"
              alt="bunga"
              className="animated-item w-14 h-14 absolute right-10 bottom-0 -translate-y-6"
            />
            {/* Lapisan luar (putih) */}
            <div className="p-2 bg-yellow-900 w-48 h-64">
              {/* Lapisan dalam (coklat/amber) */}
              <div className="relative border-2 border-white w-full h-full">
                <img
                  src="/images/image.png"
                  alt="img"
                  className="animated-item absolute top-1/2 w-36 h-48 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Halaman 5 */}
        <div className="page flex flex-col items-center justify-center bg-[#f5e7d8] relative overflow-hidden">
          <div className="absolute left-0 flex justify-center items-center p-5">
            <div className="relative p-2 bg-yellow-900 w-42 h-52">
              <div className="relative border-2 border-white w-full h-full">
                <img
                  src="/images/image.png"
                  alt="img"
                  className="animated-item absolute top-1/2 w-32 h-42 -translate-y-1/2 left-1/2 -translate-x-1/2"
                />
              </div>
            </div>
          </div>
          <img
            src="/images/bunga-kecil.png"
            alt="bunga"
            className="animated-item w-14 h-14 absolute right-15 top-1/2 -translate-y-32"
          />
          <div className="absolute right-0 bottom-0 flex justify-center items-center p-5">
            <div className="p-2 bg-yellow-900 w-42 h-52">
              <div className="relative border-2 border-white w-full h-full">
                <img
                  src="/images/image.png"
                  alt="img"
                  className="animated-item absolute top-1/2 w-32 h-42 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center"
                />
              </div>
            </div>
          </div>
          <img
            src="/images/bunga-kecil.png"
            alt="bunga"
            className="animated-item w-14 h-14 absolute left-15 top-1/2 translate-y-14"
          />
          <img
            src="/images/bunga-dua.png"
            alt="bunga"
            className="animated-item w-32 h-48 absolute bottom-0 translate-y-14"
          />
          <img
            src="/images/bunga-dua.png"
            alt="bunga"
            className="animated-item w-32 h-48 absolute bottom-0 right-1/2 translate-y-14"
          />
        </div>

        {/* Halaman 6 */}
        <div className="page bg-[#f5e7d8] relative overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="animated-item text-6xl font-header font-bold">
              Remember!!
            </h1>
            <p className="animated-item text-sm font-serif font-bold">
              If you need someone
            </p>
            <span className="animated-item uppercase font-bold font-serif text-xl">
              I'm Always Here
            </span>
            <img
              src="/images/images2.jpg"
              alt="image"
              className="animated-item w-48 h-64 rounded-t-full"
            />
          </div>
          <img
            src="/images/image-bintang.png"
            alt="bintang"
            className="animated-item absolute bottom-0 left-0"
          />
          <img
            src="/images/balon.png"
            alt="balon"
            className="animated-item absolute right-0 bottom-0"
          />
        </div>

        {/* Halaman 7 */}
        <div className="page relative bg-[#f5e7d8] overflow-hidden p-4">
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <h1 className="animated-item text-2xl -rotate-12 font-header font-bold text-center">
              Special <br /> Wishes
            </h1>
            <div className="relative w-full bg-yellow-800 p-3 text-center">
              <div className="w-6 h-14 absolute bg-amber-950 top-0 -translate-y-5 -rotate-5" />
              <div className="w-6 h-14 absolute bg-amber-950 top-0 left-10 -z-10 -translate-y-5 rotate-5" />
              <p className="animated-item text-sm font-serif text-white z-10 relative">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                totam illo quibusdam expedita, architecto, voluptas voluptates
                fuga eum ab modi obcaecati aut rerum. Consequuntur fugit
                eligendi earum facilis neque ea. A veniam at optio placeat natus
                sapiente, ex totam? Nemo! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Hic quod deleniti a!
              </p>
            </div>
          </div>
          <img
            src="/images/balon-love.png"
            alt="balon"
            className="animated-item absolute top-0 right-0 w-32 h-32 -rotate-12 translate-x-8 translate-y-15"
          />
          <img
            src="/images/image-bintang.png"
            alt="bintang"
            className="animated-item absolute -right-2 bottom-0 rotate-y-180"
          />
        </div>

        {/* Halaman 8 */}
        <div className="page relative bg-[#f5e7d8] overflow-hidden p-4">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="animated-item relative text-6xl font-header font-bold text-center">
              <img
                src="/images/plus-new.png"
                alt="plus"
                className="animated-item absolute -top-4 -left-16"
              />
              Sweety
            </h1>

            <div className="flex flex-col items-center justify-center mt-4 p-4 rounded-sm shadow-xl">
              <p className="animated-item text-center text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore omnis reiciendis atque voluptas explicabo id, enim sed
                voluptatum possimus maiores molestias alias, odio perferendis,
                pariatur in? Est odit magni nemo, mollitia assumenda corrupti
                veniam ex dolorem, inventore illo animi tenetur! Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Iusto unde
                pariatur autem! Quas nobis eveniet, quod itaque accusamus dicta
                excepturi expedita modi tempora libero, quisquam ut corrupti
                deleniti! Esse iste sunt fugit incidunt doloremque cumque nobis
                vel maiores maxime ut. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Molestias, temporibus.
              </p>
            </div>
          </div>
        </div>

        {/* Halaman 9 */}
        <div className="page flex flex-col items-center justify-center bg-[#f5e7d8] relative overflow-hidden">
          <div className="py-4">
            <img
              src="/images/love-dua.png"
              alt="love"
              className="animated-item absolute top-0 right-0 mb-4"
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <div className="w-64 h-64 border-2 border-yellow-800 rounded-2xl shadow-2xl flex justify-center items-center">
              <img
                src="/images/images2.jpg"
                alt="img"
                className="animated-item w-52 h-52 object-cover rounded-md"
              />
            </div>
            <p className="animated-item text-5xl font-header">
              You <br /> & Me
            </p>
          </div>
          <img
            src="/images/daun-tiga.png"
            alt="daun"
            className="animated-item absolute bottom-0 left-0"
          />
          <img
            src="/images/garis-tiga.png"
            alt="garis"
            className="animated-item absolute bottom-0 right-0"
          />
        </div>

        {/* Halaman 10 */}
        <div className="page bg-[#f5e7d8] relative overflow-hidden">
          <img
            src="/images/time.png"
            alt="time"
            className="animated-item bottom-0 absolute right-0"
          />
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <h1 className="animated-item relative text-6xl text-center font-header font-bold">
              About You
              <div className="absolute top-0 right-0 translate-x-16">
                <img
                  src="/images/love-tiga.png"
                  alt="love"
                  className="animated-item"
                />
              </div>
            </h1>

            <div className="flex w-full h-[272px] items-center justify-center">
              <div className="flex items-center justify-center relative w-full h-full">
                {/* Lingkaran background */}
                <div className="w-[272px] h-[272px] bg-amber-800 rounded-full absolute left-9 -translate-y-2" />

                {/* Wrapper posisi */}
                <div className="absolute -right-2 -translate-x-10 -rotate-[25deg]">
                  {/* Img di dalam wrapper khusus animasi */}
                  <img
                    src="/images/image.png"
                    alt="image"
                    className="animated-item w-64 h-64 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Halaman 11 */}
        <div className="page flex flex-col items-center justify-center bg-[#f5e7d8] relative h-full w-full overflow-hidden">
          <div className="flex items-center justify-center h-full">
            <p className="animated-item text-sm text-center px-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem, ipsam corporis quisquam, cum et totam quae minima eius
              doloribus excepturi illo accusantium eligendi cumque omnis, sint
              voluptates obcaecati? Ipsam, excepturi. Harum dolorum recusandae
              maxime odio ullam quasi amet earum optio iste repellendus?
              Quisquam tempore, tenetur consequatur incidunt officia, earum
              error placeat nihil dolorum repellendus non asperiores! Quos
              minus, facilis ratione maiores animi quisquam voluptatibus
              architecto dolores iusto culpa fugit, odio accusantium veniam!
              Facere ea quidem voluptates quaerat reiciendis veritatis error.
              Officia
            </p>
          </div>
        </div>

        {/* Halaman 12 */}
        <div className="page relative flex flex-col items-center justify-center bg-[#f5e7d8] overflow-hidden">
          <h1 className="relative text-5xl text-center font-header font-bold mt-8">
            Our Moment
            <img
              src="/images/daun-empat.png"
              alt="daun"
              className="animated-item absolute top-0 right-0 -translate-y-4"
            />
            <img
              src="/images/garis-empat.png"
              alt="garis"
              className="animated-item"
            />
          </h1>
          <div className="w-full h-[338px] grid grid-cols-2 place-items-center">
            <div className="p-2 bg-yellow-900 w-36 h-48 -translate-y-15">
              <div className="relative border-2 border-white w-full h-full">
                <img
                  src="/images/images-3.jpg"
                  alt="img"
                  className="animated-item object-fill w-32 h-42"
                />
              </div>
            </div>

            <div className="p-2 bg-yellow-900 w-36 h-48">
              <div className="relative border-2 border-white w-full h-full">
                <img
                  src="/images/images-3.jpg"
                  alt="img"
                  className="animated-item object-fill w-32 h-42"
                />
              </div>
            </div>
          </div>
          <img
            src="/images/bunga-empat.png"
            alt="bunga"
            className="animated-item absolute bottom-0 left-1"
          />
        </div>

        {/* Halaman 13 */}
        <div className="page flex flex-col items-center justify-center bg-[#f5e7d8] relative overflow-hidden">
          <img
            src="/images/titik.png"
            alt="titik"
            className="animated-item absolute top-1/2 left-0 -translate-y-22"
          />
          <img
            src="/images/love.png"
            alt="love"
            className="animated-item absolute right-16 translate-y-16"
          />
          <img
            src="/images/bunga-empat.png"
            alt="bunga"
            className="animated-item absolute right-0 top-1/2 -translate-y-1/2"
          />
          <div className="flex flex-col justify-center font-serif h-full font-bold">
            <div className="animated-item px-14">
              <p className="ml-0">TO THE WORLD,</p>
              <p className="ml-4">YOU MAY BE ONE PERSONE,</p>
              <p className="ml-8">BUT TO ONE PERSON</p>
              <p className="ml-12">YOU ARE THE WORLD</p>
            </div>
            <div className="animated-item px-2">
              <p className="text-center mt-25">
                Bagi dunia kamu mungkin satu orang, tapi bagi satu orang, kamu
                adalah dunia.
              </p>
            </div>
          </div>
        </div>

        {/* Halaman 14 */}
        <div className="page bg-[#f5e7d8] relative overflow-hidden">
          <h1 className="animated-item text-5xl font-header font-bold text-center mt-10">
            The Rules Love
          </h1>
          <div className="flex flex-col items-center justify-center gap-8 h-full p-2">
            <div className="grid grid-cols-2 gap-6 text-center w-full mt-5">
              <p className="animated-item text-lg font-serif -translate-y-28">
                Turunin ego dan jangan malu untuk meminta maaf, kalau kamu
                salah, coba untuk meminta maaf dengan tulus sama aku
              </p>
              <p className="animated-item text-lg font-serif -translate-y-16">
                Saling hargain satu sama lain, saling dukung satu sama lain,
                kalau ada masalah di selesain jangan malah hilang komunikasi.
              </p>
            </div>
          </div>
        </div>

        {/* Halaman 15 */}
        <div className="page flex flex-col items-center justify-center bg-[#f5e7d8] relative overflow-hidden">
          <div className="grid grid-cols-2 items-center h-full p-4">
            <p className="animated-item text-lg font-serif px-4 text-center">
              Selalu jaga kepercayaan satu sama lain dan saling mengusahakan ya
              sayang.
            </p>
            <img
              src="/images/image-4.png"
              alt="image"
              className="animated-item object-contain translate-y-28"
            />
          </div>

          <img
            src="/images/images-5.png"
            alt="image"
            className="animated-item w-32 h-32 absolute top-0"
          />
          <img
            src="/images/images-6.png"
            alt="image"
            className="animated-item w-32 h-32 absolute top-0 right-0"
          />
        </div>

        {/* Halaman 16 */}
        <div className="page bg-[#f5e7d8] relative overflow-hidden h-screen">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="relative -translate-y-10 flex flex-col w-full h-[220px] items-center justify-center">
              <h1 className="animated-item font-bold font-header text-6xl">
                Message
              </h1>
              <img
                src="/images/garis-dua.png"
                alt="garis"
                className="animated-item rotate-x-180 -rotate-[25deg] absolute top-24"
              />
              <img
                src="/images/bunga-tiga-buah.png"
                alt="bunga"
                className="animated-item absolute top-0"
              />
            </div>
          </div>
          <img
            src="/images/titik-dua.png"
            alt="titik"
            className="animated-item absolute bottom-0 left-32 -translate-y-14"
          />
          <img
            src="/images/plus-new.png"
            alt="plus"
            className="animated-item absolute bottom-8 left-8"
          />
          <img
            src="/images/plus-new.png"
            alt="plus"
            className="animated-item absolute top-8 right-8"
          />
        </div>

        {/* Halaman 17 */}
        <div className="page bg-[#f5e7d8] relative overflow-hidden h-screen px-8">
          <div className="flex items-center justify-center h-full">
            <div className="h-auto bg-amber-600 rounded-md p-4">
              <p className="animated-item text-md text-center font-serif font-semibold">
                Semoga kita selalu menjadi pasangan yang memiliki tujuan yang
                sama, saling mencintai, menyayangi, dan berjuang untuk hal hal
                yang akan datang nanti sampai kita berdua bisa mewujudkan segala
                niat baik itu.
              </p>
            </div>
          </div>
          <img
            src="/images/bunga-lima.png"
            alt="bunga"
            className="animated-item absolute bottom-0 translate-y-15 -left-16 -rotate-14 overflow-hidden"
          />
          <img
            src="/images/bunga-enam.png"
            alt="bunga"
            className="animated-item absolute top-5 right-0"
          />
        </div>

        {/* Hlaaman 18 */}
        <div className="page bg-[#f5e7d8] relative overflow-hidden h-screen px-8">
          <div className="flex items-center justify-center h-full">
            <div className="animated-item text-6xl text-center font-bold font-header flex flex-col gap-6">
              <span>I</span>
              <span>Always</span>
              <span>miss</span>
              <span>you</span>
              <span>Girll</span>
            </div>
          </div>
          <img
            src="/images/balon-dua.png"
            alt="balon"
            className="animated-item absolute bottom-0 left-2"
          />
          <img
            src="/images/balon-dua.png"
            alt="balon"
            className="animated-item absolute top-0 right-2"
          />
          <img
            src="/images/pesta.png"
            alt="pesta"
            className="animated-item absolute top-1/2 translate-y-3 right-0"
          />
          <img
            src="/images/wish-birthday.png"
            alt="wish"
            className="animated-item absolute top-2 left-2"
          />
        </div>

        {/* Halaman 19 */}
        <div className="page bg-[#f5e7d8] relative overflow-hidden h-screen p-4">
          <div className="w-full">
            <div className="animated-item flex flex-col justify-center text-2xl font-serif uppercase text-center gap-4">
              <span>Your Beloved Boyfriend</span>
              <span>Ilham Syahdan</span>
              <img
                src="/images/image.png"
                alt="image"
                className="animated-item"
              />
            </div>
          </div>
        </div>

        {/* Halaman 20 */}
        <div className="page bg-[#f5e7d8] relative overflow-hidden h-screen p-4">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="border-8 border-white rounded-full">
              <img
                src="/images/image.png"
                alt="images"
                className="animated-item w-64 h-64 object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Halaman 21 */}
        <div className="page bg-[#f5e7d8] relative overflow-hidden h-screen p-4">
          <img
            src="/images/birth-tirai.png"
            alt="birth-tirai"
            className="animated-item absolute top-0 left-1/2 -translate-x-1/2"
          />
          <div className="flex flex-col items-center justify-center h-full mt-10 gap-4">
            <span className="animated-item text-5xl font-header font-bold">
              Happy Birthday
            </span>
            <span className="animated-item text-3xl font-header font-bold">
              Enjoy Ur 24th Birthday
            </span>
          </div>
          <p className="animated-item absolute right-5 font-bold bottom-30 text-md font-serif">
            04 Desember 2025
          </p>
          <img
            src="/images/kue.png"
            alt="kue"
            className="animated-item absolute bottom-0 w-32 h-32"
          />
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Scrapbook;
