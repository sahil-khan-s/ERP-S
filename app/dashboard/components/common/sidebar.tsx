"use client";
//HOOKS
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
//MATERIAL UI
import { useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
//ICONS
import { TbAnalyze } from "react-icons/tb";
import { PiArrowSquareIn } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegChartBar } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { MdManageSearch } from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const currentPath = usePathname();

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const matches = useMediaQuery("(max-width:1100px)");
  useEffect(() => {
    setIsSmallScreen(matches);
    setOpen(!matches);
  }, [matches]);

  const handleSignOut = async () => {
    localStorage.removeItem('user');
    await signOut()
    router.push('/login');
  };

  return (
    <>
      <div className="relative bg-gray-500">
        <Drawer
          variant="permanent"
          anchor="left"
          open={open}
          classes={{
            paper: "custom-drawer-paper bg-black", // Add your custom class name here
          }}
          sx={{
            width: open ? "270px" : "72px", // Adjust the width as needed
            flexShrink: 0,
            "custom-drawer-paper": {
              backgroundColor: "red",
            },
            "& .MuiDrawer-paper": {
              width: open ? "270px" : "72px", // Adjust the width as needed
            },
          }}
        >
          <div className="px-1 h-screen bg-black">
            <div className="flex  px-1 items-center justify-evenly   mt-5 ">
              {isSmallScreen ? (
                <div
                  onClick={() => router.push("/")}
                  className="cursor-pointer"
                >
                  <div className="flex space-x-2 ml-3 items-center justify-between ">
                    <div>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.1139 2.76196L23.063 6.13406H13.1072C12.7861 6.13406 11.9832 6.13406 11.9832 6.77636C11.9832 7.41866 12.2744 7.70388 13.1072 7.73981H18.5668C15.9976 8.38212 18.5668 11.6472 20.1726 13.1994C23.5126 16.5394 22.0995 21.2282 20.9755 23.1551C22.2601 16.989 14.9806 12.7712 11.1803 11.4331C7.32651 9.63461 7.43356 7.47219 7.96882 6.61578C7.19805 7.51501 7.11241 8.81032 7.16594 9.34557C7.16594 11.4009 11.8762 13.9487 14.2313 14.9657C19.4982 17.278 19.7444 22.0311 19.2091 24.1186C17.9245 29.1285 12.3579 30.381 9.73515 30.381C15.3874 28.3256 16.9075 24.4932 16.9611 22.8339C17.218 19.237 14.1777 17.2673 12.6255 16.7321C8.38631 15.7044 6.36307 13.1994 5.88135 12.0754C4.59674 8.60692 8.34351 4.42125 10.3775 2.76196H26.1139Z"
                          fill="#DDFF8F"
                          stroke="#DDFF8F"
                          strokeWidth="0.321152"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                open && (
                  <div
                    onClick={() => router.push("/")}
                    className="hidden md:flex space-x-2 items-center cursor-pointer"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.1139 2.76196L23.063 6.13406H13.1072C12.7861 6.13406 11.9832 6.13406 11.9832 6.77636C11.9832 7.41866 12.2744 7.70388 13.1072 7.73981H18.5668C15.9976 8.38212 18.5668 11.6472 20.1726 13.1994C23.5126 16.5394 22.0995 21.2282 20.9755 23.1551C22.2601 16.989 14.9806 12.7712 11.1803 11.4331C7.32651 9.63461 7.43356 7.47219 7.96882 6.61578C7.19805 7.51501 7.11241 8.81032 7.16594 9.34557C7.16594 11.4009 11.8762 13.9487 14.2313 14.9657C19.4982 17.278 19.7444 22.0311 19.2091 24.1186C17.9245 29.1285 12.3579 30.381 9.73515 30.381C15.3874 28.3256 16.9075 24.4932 16.9611 22.8339C17.218 19.237 14.1777 17.2673 12.6255 16.7321C8.38631 15.7044 6.36307 13.1994 5.88135 12.0754C4.59674 8.60692 8.34351 4.42125 10.3775 2.76196H26.1139Z"
                        fill="#DDFF8F"
                        stroke="#DDFF8F"
                        strokeWidth="0.321152"
                      />
                    </svg>
                    <div>
                      <h1
                        style={{ color: "white" }}
                        className="text-white font-bold"
                      >
                        Flexify
                      </h1>
                    </div>
                  </div>
                )
              )}

              <div className="hover:bg-[#818081] hover:rounded-full">
                <IconButton onClick={toggleSidebar}>
                  <MenuIcon className="text-white " fontSize="large" />
                </IconButton>
              </div>
            </div>

            <div
              onClick={() => router.push("/dashboard")}
              className={
                currentPath === "/dashboard"
                  ? "active bg-[#DDFF8F] rounded-lg transition-all duration-300  text-black ease-in "
                  : "rounded-xl group text-white hover:bg-[#DDFF8F] hover:text-black"
              }
            >
              {open ? (
                <>
                  <div className="flex active:text-black space-x-3 px-5 hover:bg-[#DDFF8F] cursor-pointer hover:rounded-[10px] mt-12 py-2 items-center">
                    <div>
                      <HiOutlineSquares2X2 className="text-2xl" />
                    </div>
                    <Typography
                      className={
                        currentPath === "/dashboard"
                          ? "text-black group-hover:text-black"
                          : "text-white group-hover:text-black"
                      }
                      variant="body1"
                    >
                      Dashboard
                    </Typography>
                  </div>
                </>
              ) : (
                <div className="mt-12 hover:bg-[#DDFF8F] group h-[35px] rounded-xl py-1.5 flex justify-center items-center pr-1">
                  <HiOutlineSquares2X2 className="text-2xl" />
                </div>
              )}
            </div>

            {/* -------Vendor-------- */}
            <Link href="/dashboard/vendor">
              <div
                className={
                  currentPath === "/dashboard/vendor"
                    ? "active bg-[#DDFF8F] rounded-lg  hover:bg-[#DDFF8F]"
                    : "text-white"
                }
              >
                {open ? (
                  <>
                    <div className="flex space-x-4 pl-5 hover:bg-[#DDFF8F] hover:text-black cursor-pointer hover:rounded-[10px] mt-2 py-2 items-center">
                      <div>
                        <HiOutlineUserGroup className="text-xl" />
                      </div>
                      <Typography className="" variant="body1">
                        vendor
                      </Typography>
                    </div>
                  </>
                ) : (
                  <div className="mt-2 hover:bg-[#DDFF8F] group rounded-xl h-[35px] py-1.5 flex justify-center pr-1 items-center">
                    <HiOutlineUserGroup className="group-hover:text-black  text-xl" />
                  </div>
                )}
              </div>
            </Link>

            {/* -------Contract------ */}
            <Link href="/dashboard/contract">
              <div
                className={
                  currentPath === "/dashboard/contract"
                    ? "active bg-[#DDFF8F] rounded-lg  hover:bg-[#DDFF8F]"
                    : "text-white"
                }
              >
                {open ? (
                  <>
                    <div className="flex space-x-4 pl-5 hover:bg-[#DDFF8F] hover:text-black cursor-pointer hover:rounded-[10px] mt-2  py-2 items-center">
                      <div>
                        <PiArrowSquareIn className="text-xl" />
                      </div>
                      <Typography className="" variant="body1">
                        Contract
                      </Typography>
                    </div>
                  </>
                ) : (
                  <div className="mt-2 hover:bg-[#DDFF8F] group rounded-xl h-[35px] py-1.5 flex justify-center pr-1 items-center">
                    <PiArrowSquareIn className="group-hover:text-black  text-xl" />
                  </div>
                )}
              </div>
            </Link>

            {/* -------Transaction-------- */}
            <Link href="/dashboard/transactionManagment">
              <div
                className={
                  currentPath === "/dashboard/transactionManagment"
                    ? "active bg-[#DDFF8F] rounded-lg  hover:bg-[#DDFF8F]"
                    : "text-white"
                }
              >
                {open ? (
                  <>
                    <div className="flex space-x-4  pl-5 hover:bg-[#DDFF8F] hover:text-black cursor-pointer hover:rounded-[10px] mt-2  py-2 items-center">
                      <div>
                        <TbAnalyze className="text-xl" />
                      </div>
                      <Typography className="" variant="body1">
                        Transaction Management
                      </Typography>
                    </div>
                  </>
                ) : (
                  <div className="mt-2 hover:bg-[#DDFF8F] group rounded-xl h-[35px] py-1.5 flex justify-center pr-1 items-center">
                    <TbAnalyze className=" group-hover:text-black  text-xl" />
                  </div>
                )}
              </div>
            </Link>
            {/* -------Performance Evulution------- */}
            <Link href="/dashboard/performanceEvaluation">
              <div
                className={
                  currentPath === "/dashboard/performanceEvaluation"
                    ? "active bg-[#DDFF8F] rounded-lg  hover:bg-[#DDFF8F]"
                    : "text-white"
                }
              >
                {open ? (
                  <>
                    <div className="flex space-x-4 pl-5 hover:bg-[#DDFF8F] hover:text-black cursor-pointer hover:rounded-[10px] mt-2  py-2 items-center">
                      <div>
                        <BsGraphUpArrow className="text-xl" />
                      </div>
                      <Typography className="" variant="body1">
                        Performance Evaluation
                      </Typography>
                    </div>
                  </>
                ) : (
                  <div className="mt-2 hover:bg-[#DDFF8F] group rounded-xl h-[35px] py-1.5 flex justify-center pr-1 items-center">
                    <BsGraphUpArrow className="group-hover:text-black text-xl" />
                  </div>
                  
                )}
              </div>
            </Link>

            {/* -------Compliance and Risk-------- */}
            {/* <Link href="/dashboard/compliance&risk">
                {open ? (
                  <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={
                        currentPath === "/dashboard/compliance&risk"
                          ? "active font-normal my-2 bg-[#DDFF8F] rounded-xl pl-3 hover:bg-[#DDFF8F] text-black"
                          : "my-2 rounded-lg font-light hover:bg-[#DDFF8F] group hover:text-black pl-3 hover:font-normal text-white"
                      }> <FaRegChartBar className="text-xl ml-2 mr-3" />Compliance & Risk</NavigationMenuTrigger>
                      <NavigationMenuContent className="flex flex-col">
                        <Link href={"/dashboard/compliance&risk/managment"}> <NavigationMenuLink className="w-full mb-3 font-light hover:font-normal hover:bg-[#DDFF8F] overflow-hidden py-1.5 rounded-lg hover:text-black px-3 flex flex-row items-center"> <MdManageSearch className="text-2xl ml-2 mr-3" /><p >Managent</p></NavigationMenuLink></Link>
                        <Link href={"/dashboard/compliance&risk/list"}> <NavigationMenuLink className="w-full mb-3 font-light hover:font-normal hover:bg-[#DDFF8F] overflow-hidden py-1.5 rounded-lg hover:text-black px-3 flex flex-row items-center"> <FaListUl className="text-md ml-2 mr-3" /><p >List</p></NavigationMenuLink></Link>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

              ) : (
                <div>
                  <div className={currentPath == "/dashboard/compliance&risk" ? "mt-2 bg-[#DDFF8F] group rounded-xl h-[35px] py-1.5 flex justify-center pr-1" : "mt-2 hover:bg-[#DDFF8F] group rounded-xl h-[35px] py-1.5 flex justify-center pr-1"}>
                    <FaRegChartBar className={currentPath == "/dashboard/compliance&risk" ? "text-black text-xl" : "group-hover:text-black text-white text-xl"} />
                  </div>
                  {(currentPath == "/dashboard/compliance&risk" || currentPath == "/dashboard/compliance&risk/managment" || currentPath == "/dashboard/compliance&risk/list") && <>
                    <Link href={"/dashboard/compliance&risk/managment"}> <div className={currentPath !== "/dashboard/compliance&risk/managment" ? "w-full mb-3  text-white hover:bg-[#DDFF8F]  py-1.5 rounded-xl mt-2 hover:text-black px-3 items-center" : "w-full mb-3 text-black py-1.5 rounded-xl mt-2 px-3 items-center bg-[#DDFF8F]"}> <MdManageSearch className="text-2xl ml-2" /></div></Link>
                    <Link href={"/dashboard/compliance&risk/list"}> <div className={currentPath !== "/dashboard/compliance&risk/list" ? "w-full mb-3  text-white hover:bg-[#DDFF8F]  py-2.5 rounded-xl mt-2 hover:text-black px-3 items-center" : "w-full mb-3 text-black py-2.5 rounded-xl mt-2 px-3 items-center bg-[#DDFF8F]"}> <FaListUl className="text-md ml-2 mr-3" /></div></Link>
                  </>}
                </div>)}
            </Link> */}
          </div>

          <div className="absolute bottom-20">
            {open ? (
              <>
                <div className="cursor-pointer px-10 gap-4 flex items-center">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5556 10.2385C17.5556 5.85533 14.0023 2.30203 9.61912 2.30203C5.23591 2.30203 1.68262 5.85533 1.68262 10.2385C1.68262 14.6218 5.23591 18.175 9.61912 18.175C14.0023 18.175 17.5556 14.6218 17.5556 10.2385Z"
                        stroke="white"
                        strokeWidth="0.952381"
                      />
                      <path
                        d="M9.81123 14.2065V10.2383C9.81123 9.86416 9.81123 9.6771 9.695 9.56087C9.57877 9.44464 9.39171 9.44464 9.01758 9.44464"
                        stroke="white"
                        strokeWidth="0.952381"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.61264 7.06384H9.61977"
                        stroke="white"
                        strokeWidth="0.952381"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h1 className=" font-medium text-white">Help</h1>
                </div>
              </>
            ) : (
              <div className="cursor-pointer px-5 hover:bg-[#818081] hover:rounded-full mt-5  py-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5556 10.2385C17.5556 5.85533 14.0023 2.30203 9.61912 2.30203C5.23591 2.30203 1.68262 5.85533 1.68262 10.2385C1.68262 14.6218 5.23591 18.175 9.61912 18.175C14.0023 18.175 17.5556 14.6218 17.5556 10.2385Z"
                    stroke="white"
                    strokeWidth="0.952381"
                  />
                  <path
                    d="M9.81123 14.2065V10.2383C9.81123 9.86416 9.81123 9.6771 9.695 9.56087C9.57877 9.44464 9.39171 9.44464 9.01758 9.44464"
                    stroke="white"
                    strokeWidth="0.952381"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.61264 7.06384H9.61977"
                    stroke="white"
                    strokeWidth="0.952381"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          <div onClick={() => { handleSignOut }} className="absolute bottom-7  ">
            {open ? (
              <>
                <div className="cursor-pointer px-10 gap-4 flex items-center ">
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_231_422)">
                        <path
                          d="M6.79128 17.0625C7.81653 17.0625 8.64378 17.0625 9.29403 16.9748C9.96903 16.8848 10.5375 16.6897 10.989 16.239C11.382 15.8453 11.5815 15.3615 11.6858 14.793C11.787 14.2403 11.8065 13.5645 11.811 12.753C11.8118 12.6038 11.7533 12.4604 11.6484 12.3544C11.5435 12.2483 11.4007 12.1883 11.2515 12.1875C11.1023 12.1867 10.959 12.2452 10.8529 12.3501C10.7468 12.4551 10.6868 12.5978 10.686 12.747C10.6815 13.5667 10.6605 14.148 10.5795 14.5898C10.5008 15.0143 10.3755 15.261 10.1933 15.4433C9.98553 15.651 9.69378 15.786 9.14328 15.8602C8.57703 15.936 7.82628 15.9375 6.75003 15.9375H6.00003C4.92303 15.9375 4.17228 15.936 3.60603 15.8602C3.05553 15.786 2.76453 15.6503 2.55603 15.4433C2.34903 15.2355 2.21403 14.9445 2.13978 14.3932C2.06328 13.8277 2.06253 13.0763 2.06253 12L2.06253 6C2.06253 4.92375 2.06328 4.173 2.13978 3.606C2.21403 3.0555 2.34903 2.7645 2.55678 2.55675C2.76453 2.349 3.05553 2.214 3.60603 2.13975C4.17228 2.064 4.92303 2.0625 6.00003 2.0625H6.75003C7.82628 2.0625 8.57703 2.064 9.14403 2.13975C9.69378 2.214 9.98553 2.34975 10.1933 2.55675C10.3755 2.73975 10.5008 2.98575 10.5795 3.41025C10.6605 3.852 10.6815 4.43325 10.686 5.253C10.6864 5.32687 10.7014 5.39994 10.73 5.46803C10.7586 5.53613 10.8004 5.59791 10.8529 5.64987C10.9054 5.70182 10.9676 5.74293 11.036 5.77083C11.1044 5.79873 11.1777 5.81289 11.2515 5.8125C11.3254 5.81211 11.3985 5.79717 11.4666 5.76853C11.5347 5.7399 11.5964 5.69814 11.6484 5.64563C11.7004 5.59311 11.7415 5.53088 11.7694 5.46249C11.7973 5.39409 11.8114 5.32087 11.811 5.247C11.8065 4.4355 11.787 3.75975 11.6858 3.207C11.5808 2.6385 11.382 2.15475 10.9883 1.761C10.5375 1.3095 9.96828 1.116 9.29328 1.0245C8.64378 0.9375 7.81653 0.9375 6.79128 0.9375H5.95878C4.93278 0.9375 4.10628 0.9375 3.45603 1.0245C2.78103 1.116 2.21253 1.3095 1.76103 1.761C1.30953 2.2125 1.11603 2.781 1.02453 3.456C0.937526 4.10625 0.937527 4.9335 0.937527 5.95875L0.937527 12.0412C0.937527 13.0665 0.937526 13.8938 1.02453 14.544C1.11528 15.219 1.30953 15.7875 1.76103 16.239C2.21253 16.6905 2.78103 16.884 3.45603 16.9748C4.10628 17.0625 4.93353 17.0625 5.95878 17.0625H6.79128Z"
                          fill="white"
                        />
                        <path
                          d="M6.75007 9.56247C6.60089 9.56247 6.45781 9.50321 6.35232 9.39772C6.24683 9.29223 6.18757 9.14916 6.18757 8.99997C6.18757 8.85079 6.24683 8.70771 6.35232 8.60223C6.45781 8.49674 6.60089 8.43747 6.75007 8.43747L14.9798 8.43747L13.5091 7.17747C13.3957 7.0804 13.3255 6.94227 13.314 6.79346C13.3024 6.64465 13.3505 6.49735 13.4476 6.38397C13.5446 6.27059 13.6828 6.20042 13.8316 6.18888C13.9804 6.17735 14.1277 6.2254 14.2411 6.32247L16.8661 8.57247C16.9278 8.62528 16.9774 8.69084 17.0114 8.76464C17.0454 8.83843 17.063 8.91872 17.063 8.99997C17.063 9.08122 17.0454 9.16151 17.0114 9.23531C16.9774 9.30911 16.9278 9.37466 16.8661 9.42747L14.2411 11.6775C14.1849 11.7255 14.1199 11.7621 14.0496 11.785C13.9794 11.8079 13.9053 11.8168 13.8316 11.8111C13.7579 11.8054 13.6861 11.7852 13.6202 11.7517C13.5543 11.7182 13.4956 11.6721 13.4476 11.616C13.3995 11.5598 13.363 11.4948 13.34 11.4245C13.3171 11.3543 13.3083 11.2802 13.314 11.2065C13.3197 11.1328 13.3399 11.061 13.3733 10.9951C13.4068 10.9292 13.4529 10.8705 13.5091 10.8225L14.9791 9.56247L6.75007 9.56247Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_231_422">
                          <rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="matrix(-1 0 0 -1 18 18)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h1 className=" font-medium text-white">Log Out</h1>
                </div>
              </>
            ) : (
              <div className=" cursor-pointer px-5 hover:bg-[#818081] hover:rounded-full mt-5  py-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_231_422)">
                    <path
                      d="M6.79128 17.0625C7.81653 17.0625 8.64378 17.0625 9.29403 16.9748C9.96903 16.8848 10.5375 16.6897 10.989 16.239C11.382 15.8453 11.5815 15.3615 11.6858 14.793C11.787 14.2403 11.8065 13.5645 11.811 12.753C11.8118 12.6038 11.7533 12.4604 11.6484 12.3544C11.5435 12.2483 11.4007 12.1883 11.2515 12.1875C11.1023 12.1867 10.959 12.2452 10.8529 12.3501C10.7468 12.4551 10.6868 12.5978 10.686 12.747C10.6815 13.5667 10.6605 14.148 10.5795 14.5898C10.5008 15.0143 10.3755 15.261 10.1933 15.4433C9.98553 15.651 9.69378 15.786 9.14328 15.8602C8.57703 15.936 7.82628 15.9375 6.75003 15.9375H6.00003C4.92303 15.9375 4.17228 15.936 3.60603 15.8602C3.05553 15.786 2.76453 15.6503 2.55603 15.4433C2.34903 15.2355 2.21403 14.9445 2.13978 14.3932C2.06328 13.8277 2.06253 13.0763 2.06253 12L2.06253 6C2.06253 4.92375 2.06328 4.173 2.13978 3.606C2.21403 3.0555 2.34903 2.7645 2.55678 2.55675C2.76453 2.349 3.05553 2.214 3.60603 2.13975C4.17228 2.064 4.92303 2.0625 6.00003 2.0625H6.75003C7.82628 2.0625 8.57703 2.064 9.14403 2.13975C9.69378 2.214 9.98553 2.34975 10.1933 2.55675C10.3755 2.73975 10.5008 2.98575 10.5795 3.41025C10.6605 3.852 10.6815 4.43325 10.686 5.253C10.6864 5.32687 10.7014 5.39994 10.73 5.46803C10.7586 5.53613 10.8004 5.59791 10.8529 5.64987C10.9054 5.70182 10.9676 5.74293 11.036 5.77083C11.1044 5.79873 11.1777 5.81289 11.2515 5.8125C11.3254 5.81211 11.3985 5.79717 11.4666 5.76853C11.5347 5.7399 11.5964 5.69814 11.6484 5.64563C11.7004 5.59311 11.7415 5.53088 11.7694 5.46249C11.7973 5.39409 11.8114 5.32087 11.811 5.247C11.8065 4.4355 11.787 3.75975 11.6858 3.207C11.5808 2.6385 11.382 2.15475 10.9883 1.761C10.5375 1.3095 9.96828 1.116 9.29328 1.0245C8.64378 0.9375 7.81653 0.9375 6.79128 0.9375H5.95878C4.93278 0.9375 4.10628 0.9375 3.45603 1.0245C2.78103 1.116 2.21253 1.3095 1.76103 1.761C1.30953 2.2125 1.11603 2.781 1.02453 3.456C0.937526 4.10625 0.937527 4.9335 0.937527 5.95875L0.937527 12.0412C0.937527 13.0665 0.937526 13.8938 1.02453 14.544C1.11528 15.219 1.30953 15.7875 1.76103 16.239C2.21253 16.6905 2.78103 16.884 3.45603 16.9748C4.10628 17.0625 4.93353 17.0625 5.95878 17.0625H6.79128Z"
                      fill="white"
                    />
                    <path
                      d="M6.75007 9.56247C6.60089 9.56247 6.45781 9.50321 6.35232 9.39772C6.24683 9.29223 6.18757 9.14916 6.18757 8.99997C6.18757 8.85079 6.24683 8.70771 6.35232 8.60223C6.45781 8.49674 6.60089 8.43747 6.75007 8.43747L14.9798 8.43747L13.5091 7.17747C13.3957 7.0804 13.3255 6.94227 13.314 6.79346C13.3024 6.64465 13.3505 6.49735 13.4476 6.38397C13.5446 6.27059 13.6828 6.20042 13.8316 6.18888C13.9804 6.17735 14.1277 6.2254 14.2411 6.32247L16.8661 8.57247C16.9278 8.62528 16.9774 8.69084 17.0114 8.76464C17.0454 8.83843 17.063 8.91872 17.063 8.99997C17.063 9.08122 17.0454 9.16151 17.0114 9.23531C16.9774 9.30911 16.9278 9.37466 16.8661 9.42747L14.2411 11.6775C14.1849 11.7255 14.1199 11.7621 14.0496 11.785C13.9794 11.8079 13.9053 11.8168 13.8316 11.8111C13.7579 11.8054 13.6861 11.7852 13.6202 11.7517C13.5543 11.7182 13.4956 11.6721 13.4476 11.616C13.3995 11.5598 13.363 11.4948 13.34 11.4245C13.3171 11.3543 13.3083 11.2802 13.314 11.2065C13.3197 11.1328 13.3399 11.061 13.3733 10.9951C13.4068 10.9292 13.4529 10.8705 13.5091 10.8225L14.9791 9.56247L6.75007 9.56247Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_231_422">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="matrix(-1 0 0 -1 18 18)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Sidebar;