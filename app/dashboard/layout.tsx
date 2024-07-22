import "../globals.css";
import Sidebar from "./components/common/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white">
      <div className="flex w-full min-h-screen bg-gray-500">
        <div className=" min-h-screen bg-gray-500">
          <Sidebar />
        </div>
        <div className="w-full ">
          <div className="w-full min-h-screen">{children}</div>
        </div>
      </div>
    </section>
  );
}
