import { cn } from "@/lib/utils";

function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-[30px] items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-[#343131] px-2.5 py-1.5",
        className,
      )}
    >
      {children}
    </div>
  );
}

function StatCard({
  label,
  value,
  maxWidth,
  height,
}: {
  label: string;
  value: string;
  maxWidth?: string;
  height?: string;
}) {
  return (
    <div
      className="flex flex-col items-start gap-3 rounded-xl bg-[#343131] p-3 sm:p-4"
      style={{
        ...(maxWidth && { maxWidth }),
        ...(height && { height }),
        ...(maxWidth || height ? { flexGrow: 0 } : {}),
      }}
    >
      <span className="text-xs font-bold text-white sm:text-sm">{label}</span>
      <span className="text-sm font-bold text-white sm:text-base">
        {value}
      </span>
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-[180px] w-full items-center justify-center rounded-xl bg-[#D9D9D9]">
      <span className="text-3xl font-bold text-white sm:text-4xl">
        {label}
      </span>
    </div>
  );
}

export function AssetMonitoringDashboard() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#333431] p-4 py-10 font-roboto sm:p-8">
      <div className="w-full max-w-[1035px] rounded-[32px] bg-white p-6 sm:rounded-[45px] sm:p-10">
        <div className="flex flex-col items-stretch gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Pill className="w-fit px-4">
              <span className="text-base font-bold text-white">ONLINE</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="7.5" fill="#D6FB61" />
              </svg>
            </Pill>
            <Pill className="w-fit px-4">
              <span className="text-base font-bold text-white">
                BUDI SUKAWATRATMAN
              </span>
            </Pill>
          </div>

          <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:gap-[61px]">
            <div className="aspect-[500/315] w-full lg:w-[500px] lg:flex-shrink-0">
              <Placeholder label="MAP" />
            </div>
            <div className="grid w-full grid-cols-2 gap-[15px] lg:w-[380px] lg:flex-shrink-0">
              <StatCard label="UPDATE" value="08:18/20-12-2026" />
              <StatCard label="UID" value="ASET-INV-001" />
              <StatCard label="POWER" value="10 W" />
              <StatCard label="VOLTASE" value="5 V" />
              <StatCard label="AMPERE" value="2 A" />
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:gap-[61px]">
            <div className="grid w-full grid-cols-2 gap-[15px] lg:w-[500px] lg:flex-shrink-0">
              <StatCard label="LONGITUDE" value="106,827153" maxWidth="345px" height="100px" />
              <StatCard label="LATITUDE" value="-6,175392" maxWidth="325px" height="100px" />
            </div>
            <div className="aspect-[380/206] w-full lg:w-[380px] lg:flex-shrink-0">
              <Placeholder label="CHART" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
