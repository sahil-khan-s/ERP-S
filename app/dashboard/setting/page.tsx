"use client"

import React from 'react'

import Nav from '../components/common/nav'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
  

const page = () => {
  return (
    <div className='min-h-screen  bg-white'>
      <div className="px-3 lg:px-6"><Nav/></div>
        <div className="w-full mx-auto p-4">
      <div className="bg-white border border-slate-100 rounded-2xl p-4 lg:p-6">
        <div className="space-y-4 lg:space-y-6">
          {/* Appearance Setting */}
          <div className="flex justify-between items-center border-b pb-2 lg:pb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Appearance</h3>
              <p className="text-gray-600 text-xs lg:text-sm">Customize how your theme looks on your device</p>
            </div>
            <Select >
  <SelectTrigger  className="w-auto">
    <SelectValue  placeholder="Theme" />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

          </div>

          {/* Language Setting */}
          <div className="flex justify-between items-center border-b pb-3 lg:pb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Language</h3>
              <p className="text-xs lg:text-sm text-gray-600">Select your language</p>
            </div>
            <Select >
  <SelectTrigger  className="w-auto">
    <SelectValue  placeholder="Language" />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="english">English</SelectItem>
    <SelectItem value="french">French</SelectItem>
    <SelectItem value="german">German</SelectItem>
  </SelectContent>
</Select>

          </div>

          {/* Two-factor Authentication */}
          <div className="flex justify-between items-center border-b pb-3 lg:pb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Two-factor Authentication</h3>
              <p className="text-xs lg:text-sm w-[14rem] md:w-full text-gray-600">Keep your account secure by enabling 2FA via mail</p>
            </div>
            <div className="checkbox-wrapper-2">
  <input type="checkbox" className="sc-gJwTLC ikxBAC"/>
</div>          </div>

          {/* Mobile Push Notifications */}
          <div className="flex justify-between items-center border-b pb-3 lg:pb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Mobile Push Notifications</h3>
              <p className="text-xs lg:text-sm text-gray-600">Receive push notification</p>
            </div>
            <div className="checkbox-wrapper-2">
  <input type="checkbox" className="sc-gJwTLC ikxBAC"/>
</div>          </div>

          {/* Desktop Notification */}
          <div className="flex justify-between items-center border-b pb-3 lg:pb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Desktop Notification</h3>
              <p className="text-xs lg:text-sm text-gray-600">Receive push notification in desktop</p>
            </div>
            <div className="checkbox-wrapper-2">
  <input type="checkbox" className="sc-gJwTLC ikxBAC"/>
</div>          </div>

          {/* Email Notifications */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Email Notifications</h3>
              <p className="text-xs lg:text-sm text-gray-600">Receive email notification</p>
            </div>
            <div className="checkbox-wrapper-2">
  <input type="checkbox" className="sc-gJwTLC ikxBAC"/>
</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page






  
