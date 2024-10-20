"use client"

import React from 'react'

import Notification from '@/app/dashboard/components/notification/notification'


export interface Notification {
    title: string,
    time: string
    description: string
    userProfileImage: string | ""
}
const page = () => {


    const notifications: Array<Notification> = [
        {
            title: "Leave Request",
            time: "Just Now",
            description: "@Robert Fox has applied for leave",
            userProfileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltQfpfb_OH4uUzeUqOFguqsInW4p56onNGw&usqp=CAU"
        },
        {
            title: "Check In Issue",
            time: "11:46 AM",
            description: "@Alexa shared a message regarding check in issue",
            userProfileImage: "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg"
        }, {
            title: "password update successful",
            time: "yesterday",
            description: "Your password has been updated successfully",
            userProfileImage: ""
        }
    ]



    return (
        <div className='w-full border-[#A2A1A833]/20 mt-5 rounded-2xl border-[1px]'>
            {
                notifications.map((notification, index) => {
                    return (
                        <Notification notification={notification} key={index} />
                    )
                })
            }
        </div>
    )
}

export default page