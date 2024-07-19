"use client";

import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import {
  Dialog,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Modal,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface User {
  id: number;
  name: string;
  email: string;
  profilePicture?: string;
}

export default function Nav() {
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    } 
    // else {
    //   router.push("/"); // Redirect to login if user is not found
    // }
  };

  const profile = user?.profilePicture;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    handleClose();
  };

  const [hasUnread, setHasUnread] = useState(false);

  useEffect(() => {
    const fetchUnreadNotifications = async () => {
      try {
        const response = await fetch("/api/notifications");
        if (response.ok) {
          const data = await response.json();
          const unreadNotifications = data.filter(
            (notification: any) => !notification.isRead
          );
          setHasUnread(unreadNotifications.length > 0);
        } else {
          console.error("Failed to fetch notifications");
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchUnreadNotifications();
  }, []);

  return (
    <div className="flex justify-between pt-5">
      <div>
        <h1 className="text-[19px]">
          Welcome back , <span className="font-medium">{user?.name}</span>
        </h1>
      </div>

      <div className="flex items-center gap-8 px-4">
        <Link href="/dashboard/setting">
          <div className="">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4284 19.9047C22.4284 21.7457 20.936 23.2381 19.0951 23.2381C17.2541 23.2381 15.7617 21.7457 15.7617 19.9047C15.7617 18.0638 17.2541 16.5714 19.0951 16.5714C20.936 16.5714 22.4284 18.0638 22.4284 19.9047Z"
                stroke="black"
                strokeWidth="0.952381"
              />
              <path
                d="M27.4671 17.1924C28.235 18.516 28.6189 19.1778 28.6189 19.9048C28.6189 20.6318 28.235 21.2936 27.4671 22.6172L25.635 25.7751C24.8702 27.0934 24.4877 27.7526 23.8588 28.1144C23.23 28.4762 22.4667 28.4762 20.9402 28.4762L17.25 28.4762C15.7235 28.4762 14.9602 28.4762 14.3314 28.1144C13.7025 27.7526 13.32 27.0934 12.5552 25.7751L10.7231 22.6172C9.95523 21.2936 9.57129 20.6318 9.57129 19.9048C9.57129 19.1778 9.95523 18.516 10.7231 17.1924L12.5552 14.0345C13.32 12.7162 13.7025 12.057 14.3314 11.6952C14.9602 11.3334 15.7235 11.3334 17.25 11.3334L20.9402 11.3334C22.4667 11.3334 23.23 11.3334 23.8588 11.6952C24.4877 12.057 24.8702 12.7162 25.635 14.0345L27.4671 17.1924Z"
                stroke="black"
                strokeWidth="0.952381"
              />
            </svg>
          </div>
        </Link>
        <div className="cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.09497 8.52405L9.89689 10.1806C11.5304 11.1465 12.1833 11.1465 13.8169 10.1806L16.6188 8.52405"
              stroke="black"
              strokeWidth="0.952381"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.34802 13.2628C2.41028 16.1824 2.44142 17.6421 3.51868 18.7235C4.59595 19.8049 6.09523 19.8425 9.0938 19.9179C10.9419 19.9643 12.7718 19.9643 14.6198 19.9179C17.6184 19.8425 19.1177 19.8049 20.195 18.7235C21.2722 17.6421 21.3034 16.1824 21.3656 13.2628C21.3856 12.3241 21.3856 11.3909 21.3656 10.4521C21.3034 7.53255 21.2722 6.07277 20.195 4.99141C19.1177 3.91005 17.6184 3.87238 14.6198 3.79703C12.7718 3.7506 10.9419 3.7506 9.09379 3.79703C6.09523 3.87236 4.59594 3.91003 3.51868 4.99139C2.44141 6.07276 2.41028 7.53254 2.34802 10.4521C2.328 11.3908 2.328 12.3241 2.34802 13.2628Z"
              stroke="black"
              strokeWidth="0.952381"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Link href="/dashboard/notification">
          <div className="relative">
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.50408 14.1375C2.30156 15.4261 3.20701 16.3205 4.31564 16.7662C8.56588 18.4751 14.4805 18.4751 18.7308 16.7662C19.8394 16.3205 20.7449 15.4261 20.5423 14.1375C20.4179 13.3455 19.8024 12.6861 19.3464 12.0422C18.7492 11.1884 18.6898 10.2572 18.6898 9.26639C18.6898 5.43753 15.4812 2.33362 11.5232 2.33362C7.56523 2.33362 4.35666 5.43753 4.35666 9.26639C4.35657 10.2572 4.29723 11.1884 3.69997 12.0422C3.244 12.6861 2.62855 13.3455 2.50408 14.1375Z"
                stroke="black"
                strokeWidth="0.952381"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.66626 20.4288C9.42448 21.0211 10.4258 21.3812 11.5234 21.3812C12.6211 21.3812 13.6223 21.0211 14.3805 20.4288"
                stroke="black"
                strokeWidth="0.952381"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {hasUnread && (
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
            )}
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
          </div>
        </Link>
        <div>
          <div className="flex items-center pl-4 space-x-2">
            <div>
              {/* <h1 className="font-semibold">{user?.name}</h1> */}
              <h1 className="font-semibold">{user?.email}</h1>
            </div>
            <div>
              {profile ? (
                <Image
                  src={profile}
                  className="rounded-full w-[50px] h-[50px]"
                  alt="Profile Picture"
                  width={50}
                  height={50}
                />
              ) : (
                <AccountCircleSharpIcon
                  style={{ fontSize: "50px" }}
                  className="text-[40px] "
                />
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 justify-between">
                <div className="flex items-center hidden md:flex">
                  <ExpandMoreIcon
                    className="cursor-pointer"
                    // onClick={handleChangePassword}
                    onClick={handleModalOpen}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", backgroundColor: "white" }}>
            {open && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backdropFilter: "blur(100px)",
                  zIndex: 998, // Adjust the z-index as needed
                }}
              />
            )}
            <Box
              sx={{
                position: "absolute",
                top: "10px",
                right: "40px",
                zIndex: 999,
              }}
            ></Box>
            <Modal
              open={modalOpen}
              onClose={handleModalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "flex-start",
                margin: "40px 70px",
              }}
            >
              <Box sx={{ bgcolor: "background.paper", borderRadius: "8px" }}>
                <List sx={{ pt: 0 }}>
                  <Link href="/dashboard/editProfile">
                    <ListItemButton
                      onClick={() => {
                        handleModalClose();
                      }}
                    >
                      <ListItemIcon>
                        <PersonOutlineIcon />
                      </ListItemIcon>
                      <ListItemText primary="My Profile" />
                    </ListItemButton>
                  </Link>
                  <Link href="/">
                    <div className="cursor-pointer border-none">
                      <ListItemButton
                        className="border-none"
                        onClick={handleSignOut}
                      >
                        <ListItemIcon>
                          <LogoutIcon className="text-red-500" />
                        </ListItemIcon>
                        <ListItemText
                          className="text-red-500"
                          primary="Logout"
                        />
                      </ListItemButton>
                    </div>
                  </Link>
                </List>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
