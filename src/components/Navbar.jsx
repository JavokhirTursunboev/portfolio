import Link from "next/link";
export default function Navbar() {
  return (
    <div className=" h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* ==== LOGO ==== */}
      <div>
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className=" text-white mr-1">Javokhir</span>
          <span className=" text-black bg-white rounded w-12 h-8 flex items-center  justify-center ">
            .dev
          </span>
        </Link>
      </div>

      {/* ===== RESPONSIVE BUTTON ===================== */}

      <div className="">
        {/* MENU BUTTON */}
        <button>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
      </div>
    </div>
  );
}
