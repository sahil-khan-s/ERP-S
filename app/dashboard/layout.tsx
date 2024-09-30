import "../globals.css";
import NavSmallScreen from "./components/common/NavSmallScreen";
import Sidebar from "./components/common/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white">
        <div className='block md:hidden'>
        <NavSmallScreen/>
      </div>
      <div className="flex w-full min-h-screen">
        <div className="hidden md:block min-h-screen">
          <div>
          <Sidebar />
            <div className='h-screen bg-red-600 w-[72px]'></div>
          </div>
        </div>
        <div className="w-full ">
          <div className="w-full min-h-screen">{children}</div>
        </div>
      </div>
    </section>
  );
}
