import React from 'react'
import { Notification as NotificationInterface } from '../../notification/page'

const Notification = ({ notification }: { notification: NotificationInterface }) => {
    return (
        <div className='p-5'>
            <div className='flex justify-between items-center'>

                <div className='flex items-center gap-x-3'>
                    {
                        notification.userProfileImage ?
                            <img className='size-14 rounded-full object-cover' src={notification.userProfileImage} alt='profile image'></img>
                            :
                            <div className='flex items-center justify-center size-14 rounded-full bg-[#6BA10F1A]/10'>
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="13.322" cy="19.7259" rx="7.50556" ry="3.75278" stroke="#6BA10F" strokeWidth="1.60833" strokeLinejoin="round" />
                                    <circle cx="13.3216" cy="8.4676" r="4.28889" stroke="#6BA10F" strokeWidth="1.60833" strokeLinejoin="round" />
                                </svg>
                            </div>

                    }
                    <div className='flex flex-col gap-y-2'>
                        <p className='font-lexend font-semibold text-[#16151C] text-[17px]'>{notification.title}</p>
                        <p className='font-lexend font-light text-[#A2A1A8] text-[17px]'>{notification.description}</p>
                    </div>
                </div>

                <p className='font-lexend font-light text-[#A2A1A8] text-[17px]'>{notification.time}</p>
            </div>

            <hr className='mt-4 border-[#A2A1A81A]/10 border-[1px]' />

        </div>
    )
}

export default Notification