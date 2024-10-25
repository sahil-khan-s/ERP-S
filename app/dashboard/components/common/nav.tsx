
'use client';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link'
import { List, ListItemButton, ListItemIcon, ListItemText, Box, Modal } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from '@/lib/firebaseConfig'
import { CiCamera } from "react-icons/ci";



interface User {
    name: string;
    email: string;
    image?: string; // Optional if not provided
}

interface SessionData {
    user: User;
}

export default function Nav() {

    const [sessionData, setSessionData] = useState<SessionData | null>(null);
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('user');

        if (user) {
            try {
                // Ensure the data is valid JSON
                const parsedUser = JSON.parse(user);
                setSessionData(parsedUser);
            } catch (error) {
                console.error("Error parsing user data from localStorage:", error);
                // Optionally, you can remove the invalid data from localStorage
                localStorage.removeItem('user');
            }
        } else {
            console.warn("No user data found in localStorage");
        }
    }, []);


    const [user, setUser] = useState();
    const [open, setOpen] = useState(false);

    const [editNameActive, setEditNameActive] = useState<boolean>(false)
    const [editEmailActive, setEditEmailActive] = useState<boolean>(false)
    const [editPasswordActive, setEditPasswordActive] = useState<boolean>(false)

    const handleClose = () => setOpen(false);

    const handleSignOut = () => {
        // Remove user data from localStorage on logout
        localStorage.removeItem('user');
        router.push('/login'); // Redirect to login page after logout
    };

    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        handleClose();
    };

    const fillInputFeild = () => {
        // if (user) {
        //     setFormData({ name: user.name, email: user.email, password: user.password });
        //     setProfilePicture(user.profilePicture);
        // }
    }

    const emptyInputField = () => {
        setFormData({ name: "", email: "", password: "" });
        setEditNameActive(false);
        setEditEmailActive(false);
        setEditPasswordActive(false);
    }

    const [hasUnread, setHasUnread] = useState(false);


    //////--------------Edit profile ------------------///
    const [formData, setFormData] = useState({ name: sessionData?.user?.name || "", email: sessionData?.user?.email || "", password: "" });
    const [profilePicture, setProfilePicture] = useState<string | null>(sessionData?.user?.image || null);
    const [image, setImage] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    let imageURL: string;

    //   IMAGE PREVIEW
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setImage(event.target.files?.[0])
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                setProfilePicture(base64);
            };
            reader.readAsDataURL(file);
        }
    };

    const closeProfileModel = () => {
        emptyInputField();
        setDrawerOpen(false)
    }

    // IMAGE TO STRING
    const handleImageUpload = async () => {
        const storageRef = ref(storage, `profile-Picture/${image.name}`)
        try {
            await uploadBytes(storageRef, image)
            imageURL = await getDownloadURL(storageRef)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await handleImageUpload();
            const response = await fetch('/api/users/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ ...formData, profilePicture: imageURL, userId: user?.id }),
            });

            if (response.ok) {
                const updatedUser = await response.json();
                localStorage.setItem('user', JSON.stringify(updatedUser));
                setUser(updatedUser);
                emptyInputField();
                setDrawerOpen(false);
                router.push('/dashboard');
            } else {
                throw new Error('Failed to update profile');
            }
        } catch (error) {
            console.error('Failed to update profile', error);
        } finally {
            setIsLoading(false);
        }
    };

    const removeProfilePicture = () => setProfilePicture(null);

    const [notificationDrawerOpen, setNotificationDrawerOpen] = useState(false);
    const [notifications, setNotifications] = useState<string[]>([]);

 
    return (

        <div className="flex justify-between items-center max-h-screen pt-5">
            <div className="">
                <h1 className="text-lg  whitespace-nowrap">Welcome back , <span className="text-sm md:text-md lg:text-lg whitespace-nowrap font-semibold">{sessionData?.user?.name}</span></h1>
            </div>

            <div className="flex items-center gap-2 md:gap-5">
                <div className="justify-between gap-x-5 items-center">
                    <div className="flex gap-x-4">
                        <div className="hidden  md:flex justify-between gap-x-5 items-center">
                            <Link href="/dashboard/setting">
                                <div className="">
                                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.4284 19.9047C22.4284 21.7457 20.936 23.2381 19.0951 23.2381C17.2541 23.2381 15.7617 21.7457 15.7617 19.9047C15.7617 18.0638 17.2541 16.5714 19.0951 16.5714C20.936 16.5714 22.4284 18.0638 22.4284 19.9047Z" stroke="black" strokeWidth="0.952381" />
                                        <path d="M27.4671 17.1924C28.235 18.516 28.6189 19.1778 28.6189 19.9048C28.6189 20.6318 28.235 21.2936 27.4671 22.6172L25.635 25.7751C24.8702 27.0934 24.4877 27.7526 23.8588 28.1144C23.23 28.4762 22.4667 28.4762 20.9402 28.4762L17.25 28.4762C15.7235 28.4762 14.9602 28.4762 14.3314 28.1144C13.7025 27.7526 13.32 27.0934 12.5552 25.7751L10.7231 22.6172C9.95523 21.2936 9.57129 20.6318 9.57129 19.9048C9.57129 19.1778 9.95523 18.516 10.7231 17.1924L12.5552 14.0345C13.32 12.7162 13.7025 12.057 14.3314 11.6952C14.9602 11.3334 15.7235 11.3334 17.25 11.3334L20.9402 11.3334C22.4667 11.3334 23.23 11.3334 23.8588 11.6952C24.4877 12.057 24.8702 12.7162 25.635 14.0345L27.4671 17.1924Z" stroke="black" strokeWidth="0.952381" />
                                    </svg>

                                </div>
                            </Link>

                            <div className="cursor-pointer">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.09497 8.52405L9.89689 10.1806C11.5304 11.1465 12.1833 11.1465 13.8169 10.1806L16.6188 8.52405" stroke="black" strokeWidth="0.952381" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.34802 13.2628C2.41028 16.1824 2.44142 17.6421 3.51868 18.7235C4.59595 19.8049 6.09523 19.8425 9.0938 19.9179C10.9419 19.9643 12.7718 19.9643 14.6198 19.9179C17.6184 19.8425 19.1177 19.8049 20.195 18.7235C21.2722 17.6421 21.3034 16.1824 21.3656 13.2628C21.3856 12.3241 21.3856 11.3909 21.3656 10.4521C21.3034 7.53255 21.2722 6.07277 20.195 4.99141C19.1177 3.91005 17.6184 3.87238 14.6198 3.79703C12.7718 3.7506 10.9419 3.7506 9.09379 3.79703C6.09523 3.87236 4.59594 3.91003 3.51868 4.99139C2.44141 6.07276 2.41028 7.53254 2.34802 10.4521C2.328 11.3908 2.328 12.3241 2.34802 13.2628Z" stroke="black" strokeWidth="0.952381" strokeLinejoin="round" />
                                </svg>


                            </div>
                            <div onClick={() => { setNotificationDrawerOpen(true) }} className="relative cursor-pointer" >
                                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.50408 14.1375C2.30156 15.4261 3.20701 16.3205 4.31564 16.7662C8.56588 18.4751 14.4805 18.4751 18.7308 16.7662C19.8394 16.3205 20.7449 15.4261 20.5423 14.1375C20.4179 13.3455 19.8024 12.6861 19.3464 12.0422C18.7492 11.1884 18.6898 10.2572 18.6898 9.26639C18.6898 5.43753 15.4812 2.33362 11.5232 2.33362C7.56523 2.33362 4.35666 5.43753 4.35666 9.26639C4.35657 10.2572 4.29723 11.1884 3.69997 12.0422C3.244 12.6861 2.62855 13.3455 2.50408 14.1375Z" stroke="black" strokeWidth="0.952381" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.66626 20.4288C9.42448 21.0211 10.4258 21.3812 11.5234 21.3812C12.6211 21.3812 13.6223 21.0211 14.3805 20.4288" stroke="black" strokeWidth="0.952381" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {hasUnread && (
                                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
                                )}
                                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>

                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className=" flex items-center">
                                <div className="hidden md:block">
                                    {/* <h1 className="font-semibold">{user?.name}</h1> */}
                                    <h1 className="font-semibold">{sessionData?.user?.email}</h1>
                                </div>
                                <div className="">

                                    <AccountCircleSharpIcon
                                        style={{ fontSize: "50px" }}
                                        className="text-[40px] "
                                    />

                                </div>
                                <div className="flex items-center md:flex">
                                    <ExpandMoreIcon
                                        className="cursor-pointer"
                                        onClick={handleModalOpen}
                                    />
                                </div>
                            </div>
                            <div style={{ position: 'relative', backgroundColor: 'white' }}>
                                {open && (
                                    <div style={{
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backdropFilter: 'blur(100px)',
                                        zIndex: 998, // Adjust the z-index as needed
                                    }} />
                                )}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: "10px",
                                        right: "40px",
                                        zIndex: 999,
                                    }}
                                >
                                </Box>
                                <Modal
                                    open={modalOpen}
                                    onClose={handleModalClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    style={{ display: 'flex', justifyContent: 'end', alignItems: 'flex-start', margin: "40px 70px" }}
                                >
                                    <Box sx={{ bgcolor: 'background.paper', borderRadius: '8px' }}>
                                        <List sx={{ pt: 0 }}>


                                            <ListItemButton onClick={() => { handleModalClose(); setDrawerOpen(true); fillInputFeild(); }}>
                                                <ListItemIcon>
                                                    <PersonOutlineIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="My Profile" />
                                            </ListItemButton>

                                            <div className="block md:hidden">
                                                <ListItemButton onClick={() => router.push("/dashboard/notification")}>
                                                    <ListItemIcon>
                                                        <div className="relative">
                                                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2.50408 14.1375C2.30156 15.4261 3.20701 16.3205 4.31564 16.7662C8.56588 18.4751 14.4805 18.4751 18.7308 16.7662C19.8394 16.3205 20.7449 15.4261 20.5423 14.1375C20.4179 13.3455 19.8024 12.6861 19.3464 12.0422C18.7492 11.1884 18.6898 10.2572 18.6898 9.26639C18.6898 5.43753 15.4812 2.33362 11.5232 2.33362C7.56523 2.33362 4.35666 5.43753 4.35666 9.26639C4.35657 10.2572 4.29723 11.1884 3.69997 12.0422C3.244 12.6861 2.62855 13.3455 2.50408 14.1375Z" stroke="black" strokeWidth="0.952381" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M8.66626 20.4288C9.42448 21.0211 10.4258 21.3812 11.5234 21.3812C12.6211 21.3812 13.6223 21.0211 14.3805 20.4288" stroke="black" strokeWidth="0.952381" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            {hasUnread && (
                                                                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
                                                            )}
                                                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>

                                                        </div>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Notifications" />
                                                </ListItemButton>

                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <div className="cursor-pointer">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.09497 8.52405L9.89689 10.1806C11.5304 11.1465 12.1833 11.1465 13.8169 10.1806L16.6188 8.52405" stroke="black" strokeWidth="0.952381" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M2.34802 13.2628C2.41028 16.1824 2.44142 17.6421 3.51868 18.7235C4.59595 19.8049 6.09523 19.8425 9.0938 19.9179C10.9419 19.9643 12.7718 19.9643 14.6198 19.9179C17.6184 19.8425 19.1177 19.8049 20.195 18.7235C21.2722 17.6421 21.3034 16.1824 21.3656 13.2628C21.3856 12.3241 21.3856 11.3909 21.3656 10.4521C21.3034 7.53255 21.2722 6.07277 20.195 4.99141C19.1177 3.91005 17.6184 3.87238 14.6198 3.79703C12.7718 3.7506 10.9419 3.7506 9.09379 3.79703C6.09523 3.87236 4.59594 3.91003 3.51868 4.99139C2.44141 6.07276 2.41028 7.53254 2.34802 10.4521C2.328 11.3908 2.328 12.3241 2.34802 13.2628Z" stroke="black" strokeWidth="0.952381" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Messages" />
                                                </ListItemButton>

                                                <ListItemButton onClick={() => router.push("/dashboard/setting")}>
                                                    <ListItemIcon>
                                                        <div>
                                                            <svg width="33" height="33" viewBox="8 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M22.4284 19.9047C22.4284 21.7457 20.936 23.2381 19.0951 23.2381C17.2541 23.2381 15.7617 21.7457 15.7617 19.9047C15.7617 18.0638 17.2541 16.5714 19.0951 16.5714C20.936 16.5714 22.4284 18.0638 22.4284 19.9047Z" stroke="black" strokeWidth="0.952381" />
                                                                <path d="M27.4671 17.1924C28.235 18.516 28.6189 19.1778 28.6189 19.9048C28.6189 20.6318 28.235 21.2936 27.4671 22.6172L25.635 25.7751C24.8702 27.0934 24.4877 27.7526 23.8588 28.1144C23.23 28.4762 22.4667 28.4762 20.9402 28.4762L17.25 28.4762C15.7235 28.4762 14.9602 28.4762 14.3314 28.1144C13.7025 27.7526 13.32 27.0934 12.5552 25.7751L10.7231 22.6172C9.95523 21.2936 9.57129 20.6318 9.57129 19.9048C9.57129 19.1778 9.95523 18.516 10.7231 17.1924L12.5552 14.0345C13.32 12.7162 13.7025 12.057 14.3314 11.6952C14.9602 11.3334 15.7235 11.3334 17.25 11.3334L20.9402 11.3334C22.4667 11.3334 23.23 11.3334 23.8588 11.6952C24.4877 12.057 24.8702 12.7162 25.635 14.0345L27.4671 17.1924Z" stroke="black" strokeWidth="0.952381" />
                                                            </svg>
                                                        </div>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Settings" />
                                                </ListItemButton>



                                            </div>


                                            <Link href="/">
                                                <div className="cursor-pointer border-none">
                                                    <ListItemButton className="border-none" onClick={handleSignOut}>
                                                        <ListItemIcon >
                                                            <LogoutIcon className="text-red-500" />
                                                        </ListItemIcon>
                                                        <ListItemText className="text-red-500" primary="Logout" />
                                                    </ListItemButton>
                                                </div>
                                            </Link>
                                        </List>
                                    </Box>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <>
                        {drawerOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                                <div className="bg-white w-full max-w-md p-6 shadow-lg overflow-y-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-lg font-semibold">Edit Profile</h2>

                                        <CloseIcon onClick={() => closeProfileModel()} className="cursor-pointer" />
                                    </div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div>
                                            {profilePicture ? (
                                                <Image src={profilePicture} alt="Profile Picsmture" width={60} height={60} className="rounded-full" />
                                            ) : (
                                                <label htmlFor='image'><div className='h-[60px] w-[60px] bg-slate-50 border rounded flex justify-center items-center'><CiCamera /></div></label>
                                            )}
                                        </div>
                                        <div>
                                            <input type="file" name='image' id='image' accept="image/*" onChange={handleFileChange} className='hidden' />
                                            {profilePicture && (
                                                <button onClick={removeProfilePicture} className="text-red-600 mt-2">
                                                    Remove
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit} className="">
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
                                                    className="shadow-sm border  rounded-md w-full sm:text-sm p-3"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                /> :
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Morty Smith"
                                                        className="shadow-sm border rounded-md w-full sm:text-sm p-3 outline-none caret-transparent"
                                                        value={formData.name}
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
                                                    placeholder="xyz@gmail.com"
                                                    className="shadow-sm border ring-1  rounded-md w-full sm:text-sm p-3 "
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                /> :
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="xyz@gmail.com"
                                                        className="shadow-sm border rounded-md w-full sm:text-sm p-3 outline-none caret-transparent"
                                                        value={formData.email}
                                                    />}
                                                <label htmlFor='email' onClick={() => { setEditEmailActive(true) }}>
                                                    <BorderColorIcon className='text-gray-500 cursor-pointer' />
                                                </label>
                                            </div>
                                        </div>

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
                                                    placeholder="*****"
                                                    className="shadow-sm border ring-1  rounded-md w-full sm:text-sm p-3 "
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                /> :
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        placeholder="******"
                                                        className="shadow-sm border rounded-md w-full sm:text-sm p-3 outline-none caret-transparent"
                                                        value={formData.password}
                                                    />}
                                                <label htmlFor='password' onClick={() => { setEditPasswordActive(true) }}>
                                                    <BorderColorIcon className='text-gray-500 cursor-pointer' />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-4 justify-center items-center">

                                            <button
                                                type="button"
                                                className="ml-4 border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-[140px] border font-medium flex items-center justify-center h-[37px] rounded-[11px]"
                                                onClick={() => { setDrawerOpen(false); emptyInputField(); }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="w-[140px] hover:shadow border font-medium flex items-center justify-center h-[37px] rounded-[11px] bg-[#DDFF8F]"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </>
                    <>
                        {notificationDrawerOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                                <div className="bg-white md:w-full sm:[90%] max-w-md p-6 shadow-lg overflow-y-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-lg font-semibold">Notifications</h2>

                                        <CloseIcon onClick={() => setNotificationDrawerOpen(false)} className="cursor-pointer" />
                                    </div>
                                    <>
                                        <ul>
                                            {notifications.map((notification, index) => (
                                                <li key={index} className="mb-1">
                                                    {notification}
                                                </li>
                                            ))}
                                        </ul>

                                        {notifications.length === 0 && (<h1>
                                            No notification to display
                                        </h1>)}
                                    </>
                                </div>
                            </div>
                        )}
                    </>
                </div>

            </div>
        </div>
    );
}