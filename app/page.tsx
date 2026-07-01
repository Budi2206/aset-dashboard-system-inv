export default function Home() {
  return (
    <main className="min-h-screen bg-[#333431] flex items-center justify-center p-4 md:p-6 lg:p-8 font-roboto">
      <div className="bg-white rounded-[45px] p-5 w-full max-w-[1036px]">
        <div
          className="
            grid gap-3
            grid-cols-1
            lg:grid-cols-4 lg:grid-rows-5 lg:gap-y-[22px] lg:gap-x-[10px] lg:h-[629px]
          "
        >
          {/* STATUS - row 1, col 1 */}
          <div className="flex items-center justify-center gap-2.5 px-2.5 py-2 rounded-xl bg-[#333431] lg:row-start-1 lg:col-start-1 lg:col-span-1">
            <span className="text-white font-bold text-base tracking-wide">ONLINE</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="7.5" fill="#D6FB61" />
            </svg>
          </div>

          {/* NAME - row 1, cols 3-4 (col 2 intentionally empty on desktop) */}
          <div className="flex items-center justify-center px-4 py-2 rounded-xl bg-[#333431] lg:row-start-1 lg:col-start-3 lg:col-span-2">
            <span className="text-white font-bold text-2xl md:text-3xl">NAME</span>
          </div>

          {/* MAP - rows 2-4, cols 1-2 */}
          <div className="flex items-center justify-center rounded-xl bg-[#D9D9D9] min-h-[200px] lg:min-h-0 lg:row-start-2 lg:row-span-3 lg:col-start-1 lg:col-span-2">
            <span className="text-white font-bold text-5xl lg:text-6xl">MAP</span>
          </div>

          {/* UID - row 2, col 4 (col 3 intentionally empty on desktop) */}
          <div className="flex flex-col gap-2.5 pl-4 pt-2.5 pb-2.5 pr-2 rounded-xl bg-[#333431] lg:row-start-2 lg:col-start-4 lg:col-span-1">
            <span className="text-white font-bold text-base">UID</span>
            <span className="text-white font-bold text-base">ASET_INV_001</span>
          </div>

          {/* UPDATE - row 3, col 3 */}
          <div className="flex flex-col gap-6 pl-4 pt-4 pb-2.5 pr-2 rounded-xl bg-[#333431] lg:row-start-3 lg:col-start-3 lg:col-span-1">
            <span className="text-white font-bold text-base">UPDATE</span>
            <span className="text-white font-bold text-sm md:text-base">10:10/20-12-2026</span>
          </div>

          {/* WATT - row 3, col 4 */}
          <div className="flex flex-col gap-2.5 pl-4 pt-4 pb-2.5 pr-2 rounded-xl bg-[#333431] lg:row-start-3 lg:col-start-4 lg:col-span-1">
            <span className="text-white font-bold text-base">WATT</span>
            <span className="text-white font-bold text-2xl md:text-3xl">10 W</span>
          </div>

          {/* VOLTASE - row 4, col 3 */}
          <div className="flex flex-col gap-2.5 pl-4 pt-4 pb-2.5 pr-2 rounded-xl bg-[#333431] lg:row-start-4 lg:col-start-3 lg:col-span-1">
            <span className="text-white font-bold text-base">VOLTASE</span>
            <span className="text-white font-bold text-2xl md:text-3xl">5 V</span>
          </div>

          {/* AMPERE - row 4, col 4 */}
          <div className="flex flex-col gap-2.5 pl-4 pt-4 pb-2.5 pr-2 rounded-xl bg-[#333431] lg:row-start-4 lg:col-start-4 lg:col-span-1">
            <span className="text-white font-bold text-base">AMPERE</span>
            <span className="text-white font-bold text-2xl md:text-3xl">2 A</span>
          </div>

          {/* LATITUDE - row 5, col 1 */}
          <div className="flex flex-col gap-2.5 pl-4 pt-4 pb-2.5 pr-2 rounded-xl bg-[#333431] lg:row-start-5 lg:col-start-1 lg:col-span-1">
            <span className="text-white font-bold text-base">LATITUDE</span>
            <span className="text-white font-bold text-lg md:text-xl">-6.193125</span>
          </div>

          {/* LONGITUDE - row 5, col 2 */}
          <div className="flex flex-col gap-2.5 pl-4 pt-4 pb-2.5 pr-2 rounded-xl bg-[#333431] lg:row-start-5 lg:col-start-2 lg:col-span-1">
            <span className="text-white font-bold text-base">LONGITUDE</span>
            <span className="text-white font-bold text-lg md:text-xl">106.821810</span>
          </div>

          {/* CHART - row 5, cols 3-4 */}
          <div className="flex items-center justify-center rounded-xl bg-[#D9D9D9] min-h-[120px] lg:min-h-0 lg:row-start-5 lg:col-start-3 lg:col-span-2">
            <span className="text-white font-bold text-3xl lg:text-4xl">CHART</span>
          </div>
        </div>
      </div>
    </main>
  );
}
