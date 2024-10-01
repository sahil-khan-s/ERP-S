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
          <Sidebar />
        </div>
        <div className="w-full ">
          <div className="w-full min-h-screen">{children}</div>
        </div>
      </div>
    </section>
  );
}
