"use client" 
import Link from 'next/link';
import Image from 'next/image';
import { useState, Fragment, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
//ICONS
import { CiCamera } from "react-icons/ci";
import { TbAnalyze } from "react-icons/tb";
import { FaListUl } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdManageSearch } from "react-icons/md";
import { PiArrowSquareIn } from "react-icons/pi";
import { HiOutlineSquares2X2, HiOutlineUserGroup, HiOutlineUserCircle } from "react-icons/hi2";
//COMPONENTS
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CloseIcon from '@mui/icons-material/Close';
import AddCardIcon from '@mui/icons-material/AddCard';
// import Context from "context/context";
// import { HiOutlineHome } from "react-icons/hi";
// import { HiUsers } from "react-icons/hi2";
// import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
// import { storage } from '@/lib/firebaseConfig'

export default function NavSmallScreen() {

    const router = useRouter()

    // const { user, setUser } = useContext(Context);
    const [userData, setUserData] = useState<any>({ name: '', email: '', password: '' });
    const [editName, setEditName] = useState("")
    const [editEmail, setEditEmail] = useState("")
    const [editPassword, setEditPassword] = useState("")
    const [editProfilePicture, setEditProfilePicture] = useState("")
    // const [profilePicture, setProfilePicture] = useState<string | null>(null);
    // const [image, setImage] = useState<any>(null);
    // let profile = user?.profilePicture

    const [editNameActive, setEditNameActive] = useState<boolean>(false)
    const [editEmailActive, setEditEmailActive] = useState<boolean>(false)
    const [editPasswordActive, setEditPasswordActive] = useState<boolean>(false)
    let imageURL: string;

    const [isNavOpen, setIsNavOpen] = useState(false);  // for navigation modal
    const [drawerOpen, setDrawerOpen] = useState(false); // profile 



    //   IMAGE PREVIEW
    // const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0];
    //     setImage(event.target.files?.[0])
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             const base64 = reader.result as string;
    //             setEditProfilePicture(base64);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const emptyInputField = () => {
        setUserData({ name: "", email: "", password: "" });
        setEditNameActive(false);
        setEditEmailActive(false);
        setEditPasswordActive(false);
    }

    // const fillNavbarData = () => {
    //     setUserData({ name: user.name, email: user.email });
    //     profile = user?.profilePicture
    // }

    // const fillProfileData = async () => {
    //     setEditEmail(user.email)
    //     setEditName(user.name)
    //     setEditPassword(user.password)
    //     setEditProfilePicture(user.profilePicture)
    //     profile = user?.profilePicture

    // }

    const openProfileModel = () => {
        // fillProfileData()
        setDrawerOpen(true);
        setIsNavOpen(false);
    }

    const closeProfileModel = () => {
        emptyInputField();
        setDrawerOpen(false)
    }

    const removeProfilePicture = () => {
        setEditProfilePicture("");
    }

    // const handleSignOut = () => {
    //     localStorage.removeItem('user');
    //     setUser(null);
    //     router.push('/signin');
    // };

    // IMAGE TO STRING
    // const handleImageUpload = async () => {
    //     const storageRef = ref(storage, `profile-Picture/${image.name}`)
    //     try {
    //         await uploadBytes(storageRef, image)
    //         imageURL = await getDownloadURL(storageRef)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log(editEmail, editName, editPassword)
    //     try {
    //         await handleImageUpload();
    //         console.log(imageURL)
    //         const response = await fetch('/api/users/update', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ name: editName, email: editEmail, password: editPassword, profilePicture: imageURL, userId: user?.id }),
    //         });

    //         if (response.ok) {
    //             const updatedUser = await response.json();
    //             localStorage.setItem('user', JSON.stringify(updatedUser));
    //             setUser(updatedUser);
    //             emptyInputField();
    //             setDrawerOpen(false);
    //             router.push('/dashboard');
    //         } else {
    //             throw new Error('Failed to update profile');
    //         }
    //     } catch (error) {
    //         console.error('Failed to update profile', error);
    //     }
    // }

    
    return (
        <>
            <div className="relative block md:hidden  items-center justify-center px-4 py-4 bg-[#000000] text-white">
                {/* Left Side - Menu Button */}
                <div className='flex justify-between items-center'>
                    <div>
                        <button
                            onClick={() => { setIsNavOpen(true);
                              // fillNavbarData(); 
                              }}
                            className=" p-2 text-black bg-[#D5F68A] rounded-md"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    <div className=" text-center">
                        <Link className="font-semibold active:text-[#6BA10F] focus:text-[#6BA10F] active:bg-slate-100 py-0.5" href="/">
                            <div className='flex justify-center items-center gap-1'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M26.1139 2.76196L23.063 6.13406H13.1072C12.7861 6.13406 11.9832 6.13406 11.9832 6.77636C11.9832 7.41866 12.2744 7.70388 13.1072 7.73981H18.5668C15.9976 8.38212 18.5668 11.6472 20.1726 13.1994C23.5126 16.5394 22.0995 21.2282 20.9755 23.1551C22.2601 16.989 14.9806 12.7712 11.1803 11.4331C7.32651 9.63461 7.43356 7.47219 7.96882 6.61578C7.19805 7.51501 7.11241 8.81032 7.16594 9.34557C7.16594 11.4009 11.8762 13.9487 14.2313 14.9657C19.4982 17.278 19.7444 22.0311 19.2091 24.1186C17.9245 29.1285 12.3579 30.381 9.73515 30.381C15.3874 28.3256 16.9075 24.4932 16.9611 22.8339C17.218 19.237 14.1777 17.2673 12.6255 16.7321C8.38631 15.7044 6.36307 13.1994 5.88135 12.0754C4.59674 8.60692 8.34351 4.42125 10.3775 2.76196H26.1139Z"
                                        fill="#DDFF8F"
                                        stroke="#DDFF8F"
                                        strokeWidth="0.321152"
                                    />
                                </svg>
                                <div className='text-gray-100'>Flexify</div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Navigation Modal */}
                <Transition appear show={isNavOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50" onClose={() => setIsNavOpen(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex items-start justify-start p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-out duration-300"
                                enterFrom="-translate-x-full opacity-0"
                                enterTo="translate-x-0 opacity-100"
                                leave="transform transition ease-in duration-200"
                                leaveFrom="translate-x-0 opacity-100"
                                leaveTo="-translate-x-full opacity-0"
                            >
                                <Dialog.Panel className="absolute top-0 left-0 w-[70%] max-w-sm pb-6 bg-black rounded-r-md shadow-lg transform transition-all h-full overflow-y-auto">
                                    {/* Profile Section */}
                                    <div className="bg-[#DDFF8F] pb-2 pt-10 flex items-center border-[1px] pt flex-col">

                                        {/*-------------- add dynamic username and picture -------- */}
                                            <HiOutlineUserCircle className=" w-16 h-16 rounded-full" />
                                        
                                        <p className="mt-3 text-sm font-semibold">Admin</p>
                                    </div>

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setIsNavOpen(false)}
                                        className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    {/* Navigation Links */}
                                    <nav className="flex flex-col gap-2 py-4 text-sm">

                                        <div onClick={() => { openProfileModel(); }} className="flex items-center mx-4 rounded-md cursor-default hover:bg-[#DDFF8F] hover:text-black font-medium py-1 pl-3 sm:pl-7 text-white"  >
                                            <HiOutlineUserCircle className='text-2xl mr-4' />
                                            Profile
                                        </div>

                                        {/* seprator */}
                                        <div className='bg-gray-400 h-[1px] p-0 m-0'></div>

                                        <Link className="flex items-center mx-4 rounded-md hover:bg-[#DDFF8F] hover:text-black text-gray-50 font-medium py-1 pl-3 sm:pl-7" href="/dashboard">
                                            <HiOutlineSquares2X2 className='text-2xl mr-4' />
                                            <button>

                                                Dashboard
                                            </button>
                                        </Link>

                                        <Link className="flex items-center mx-4 rounded-md hover:bg-[#DDFF8F] hover:text-black text-gray-50 font-medium py-1 pl-3 sm:pl-7" href="/dashboard/vendor">
                                            <HiOutlineUserGroup className="text-[22px] mr-4" />
                                            <button>

                                                Vendor
                                            </button>
                                        </Link>
                                        {/* ADD SUB LINKS */}
                                        <Link className="flex items-center mx-4 rounded-md hover:bg-[#DDFF8F] hover:text-black text-gray-50 font-medium py-1 pl-3 sm:pl-7" href="/dashboard/contract">
                                            <PiArrowSquareIn className="text-2xl mr-4" />
                                            <button>

                                                Contract
                                            </button>

                                        </Link>

                                        <Link className="flex items-center mx-4 rounded-md hover:bg-[#DDFF8F] hover:text-black text-gray-50 font-medium py-1 pl-3 sm:pl-7" href="/dashboard/transactionManagment">
                                            <TbAnalyze className="text-2xl mr-4 " />

                                            <button>

                                            Transaction Managment
                                            </button>
                                        </Link>
                                        <Link className="flex items-center mx-4 rounded-md hover:bg-[#DDFF8F] hover:text-black text-gray-50 font-medium py-1 pl-3 sm:pl-7" href="/dashboard/performanceEvaluation">
                                            <BsGraphUpArrow className="text-2xl mr-4 " />

                                            <button>

                                            Performance Evaluation
                                            </button>
                                        </Link>
                                        <Link className="flex items-center mx-4 rounded-md hover:bg-[#DDFF8F] hover:text-black text-gray-50 font-medium py-1 pl-3 sm:pl-7" href="/dashboard/compliance&risk">
                                            <FaRegChartBar className="text-2xl mr-4" />

                                            <button>

                                                Compliance & Risk
                                            </button>
                                        </Link>
                                        <Link className="flex items-center mx-4 rounded-md hover:bg-[#DDFF8F] hover:text-black text-gray-50 font-medium py-1 pl-3 sm:pl-7" href="/dashboard/compliance&risk/managment">
                                            <MdManageSearch className="text-2xl mr-4 " />

                                            <button>

                                           Management
                                            </button>
                                        </Link>
                                        <Link className="flex items-center mx-4 rounded-md hover:bg-[#DDFF8F] hover:text-black text-gray-50 font-medium py-1 pl-3 sm:pl-7" href="/dashboard/compliance&risk/list">
                                        <FaListUl className="text-2xl mr-4" />
                                            <button>

                                             List
                                            </button>
                                        </Link>

                                        {/* ADD LOGOUT FUNCTION */}
                                        <div  className='absolute bottom-5 w-full'>
                                            <Link className="flex items-center mx-4 rounded-md hover:bg-[#DDFF8F] hover:text-black text-gray-50 font-medium py-1 pl-3 sm:pl-7" href="#">
                                                <IoIosLogOut className="text-2xl mr-4 " />
                                                Logout
                                            </Link>
                                        </div>
                                    </nav>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </div>
            {drawerOpen && (
                <Transition appear show={drawerOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={() => setDrawerOpen(false)}>
                        <div className="min-h-screen flex justify-end">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-300"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-300"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                                    <div className="bg-white w-[90%] max-w-md p-6 shadow-lg overflow-y-auto">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-lg font-semibold">Edit Profile</h2>

                                            <CloseIcon onClick={() => closeProfileModel()} className="cursor-pointer" />
                                        </div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className=''>
                                                {editProfilePicture ? (
                                                    <Image src={editProfilePicture} alt="Profile Picsmture" width={60} height={60} className="rounded-full" />
                                                ) : (
                                                    <label htmlFor='image'><div className='h-[60px] w-[60px] bg-slate-50 border rounded flex justify-center items-center'><CiCamera /></div></label>
                                                )}
                                            </div>
                                            <div className='flex flex-col items-start'>
                                                <input type="file" accept="image/*" name="image" id='image' className='w-[70%] hidden' />
                                                {editProfilePicture && (
                                                    <button onClick={removeProfilePicture} className="text-red-600 mt-2">
                                                        Remove
                                                    </button>)
                                                }
                                            </div>
                                        </div>
                                        <form className="">
                                            {/* --------NAME------ */}
                                            <div className="mb-6">
                                                <label className="block text-sm font-medium mb-1">
                                                    Name
                                                </label>
                                                <div className='flex flex-row justify-center items-center gap-4'>
                                                    {editNameActive ? <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Morty Smith"
                                                        className="shadow-sm border rounded-md w-full sm:text-sm p-3 ring-0 focus:outline-black"
                                                        value={editName}
                                                        onChange={(e) => { setEditName(e.target.value) }}
                                                    /> :
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            placeholder="Morty Smith"
                                                            className="shadow-sm border rounded-md w-full sm:text-sm p-3 caret-transparent ring-0 outline-none"
                                                            value={editName}
                                                        // onChange={handleChange}
                                                        />}
                                                    <label htmlFor='name' onClick={() => { setEditNameActive(true) }}>
                                                        <BorderColorIcon className='text-gray-500 cursor-pointer' />
                                                    </label>
                                                </div>
                                            </div>
                                            {/* -------EMAIL-------- */}
                                            <div className="mb-6">
                                                <label className="block text-sm font-medium mb-2">
                                                    Email
                                                </label>
                                                <div className='flex flex-row justify-center items-center gap-4'>
                                                    {editEmailActive ? <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Morty Smith"
                                                        className="shadow-sm border rounded-md w-full sm:text-sm p-3 ring-0 focus:outline-black"
                                                        value={editEmail}
                                                        onChange={(e) => { setEditEmail(e.target.value) }}
                                                    /> :
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            placeholder="Morty Smith"
                                                            className="shadow-sm border rounded-md w-full sm:text-sm p-3 caret-transparent ring-0 outline-none"
                                                            value={editEmail}
                                                        // onChange={handleChange}
                                                        />}
                                                    <label htmlFor='email' onClick={() => { setEditEmailActive(true) }}>
                                                        <BorderColorIcon className='text-gray-500 cursor-pointer' />
                                                    </label>
                                                </div>
                                            </div>
                                            {/* <div className="mb-4">
                            <label htmlFor="oldPassword" className="block text-sm font-medium mb-2">
                                Old Password
                            </label>
                            <input
                                type="password"
                                id="oldPassword"
                                name="oldPassword"
                                placeholder="****"

                                className="shadow-sm border  rounded-md w-full sm:text-sm px-3 py-2"
                                value={userData.oldPassword}
                                onChange={handleChange}
                            />
                        </div> */}

                                            {/* ---------- password --------- */}
                                            <div className="mb-10">
                                                <label className="block text-sm font-medium mb-1">
                                                    Password
                                                </label>
                                                <div className='flex flex-row justify-center items-center gap-4'>
                                                    {editPasswordActive ? <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        placeholder="****"
                                                        className="shadow-sm border rounded-md w-full sm:text-sm p-3 ring-0 focus:outline-black"
                                                        value={editPassword}
                                                        onChange={(e) => { setEditPassword(e.target.value) }}
                                                    /> :
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            name="password"
                                                            placeholder="****"
                                                            className="shadow-sm border rounded-md w-full sm:text-sm p-3 caret-transparent ring-0 outline-none"
                                                            value={editPassword}
                                                        // onChange={handleChange}
                                                        />}
                                                    <label htmlFor='password' onClick={() => { setEditPasswordActive(true) }}>
                                                        <BorderColorIcon className='text-gray-500 cursor-pointer' />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="flex gap-1">
                                                <button
                                                    type="submit"
                                                    className="w-[140px] hover:shadow border font-medium flex items-center justify-center h-[37px] rounded-[11px] bg-[#DDFF8F]"
                                                >
                                                    Submit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="ml-4 border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-[140px] border font-medium flex items-center justify-center h-[37px] rounded-[11px]"
                                                    onClick={() => { setDrawerOpen(false); emptyInputField(); }}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            )}
        </>
    );
}