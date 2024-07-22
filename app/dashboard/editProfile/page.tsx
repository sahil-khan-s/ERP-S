import React from 'react';
import Nav from '../components/common/nav';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HiOutlineTrash } from "react-icons/hi";
import { CiCircleInfo } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const userData = {
  image: "https://github.com/shadcn.png",
  name: "Elon Musk",
  wellcomeMessage: "Welcome! We're excited to have you with us.",
  language: "English",
}

const ProfileSettings = () => {
  return (
    <div className="bg-white h-screen">
      <div className="px-6"><Nav/></div>
      <div className='w-[550px] flex flex-col gap-5 p-7'>
        <div className='flex flex-row items-center gap-10'>
          <Avatar>
            <AvatarImage src={userData.image} />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className='flex flex-row gap-2'>
          <button className='border rounded-full h-8 p-1 px-3 text-sm text-gray-500 border-slate-300'>Update</button>
          <button className='bg-gray-50 flex-row items-center rounded-full flex gap-1 h-8 p-1 px-3 text-slate-600'><HiOutlineTrash/><p>Remove</p></button>
          </div>
        </div>
        <div>
          <label className='flex flex-row gap-2 items-center' htmlFor='name'>Name <CiCircleInfo className='font-bold'/></label>
          <Input id='name' type='text'  defaultValue={userData.name} className='border border-slate-200 rounded-lg  my-2 px-4 '/>
        </div>
        <div>
          <label className='flex flex-row gap-2 items-center' htmlFor='message'>Wellcome Message<CiCircleInfo className='font-bold'/></label>
          <Textarea id='message' defaultValue={userData.wellcomeMessage} className='border border-slate-200 rounded-lg my-2 px-4  '/>
        </div>
        <div className='flex flex-row gap-5'>
        <Select >
  <SelectTrigger  className="w-[48%]">
    <SelectValue  placeholder="Date Formate" />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="1">MM/DD/YYYYY</SelectItem>
    <SelectItem value="2">MMM/YY</SelectItem>
    <SelectItem value="3">DD/MM/YY</SelectItem>
    <SelectItem value="4">YYYY/MM</SelectItem>
    <SelectItem value="5">MMM/YYYY</SelectItem>
  </SelectContent>
</Select>

<Select >
  <SelectTrigger  className="w-[48%]">
    <SelectValue  placeholder="Time Fomate" />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="12">12h (am/pm)</SelectItem>
    <SelectItem value="24">24 hour</SelectItem>
  </SelectContent>
</Select>
        </div>
        <Select >
  <SelectTrigger  className="w-auto">
    <SelectValue  placeholder="Country" />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="argentina">Argentina</SelectItem>
    <SelectItem value="brazil">Brazil</SelectItem>
    <SelectItem value="canada">Canada</SelectItem>
    <SelectItem value="denmark">Denmark</SelectItem>
    <SelectItem value="egypt">Egypt</SelectItem>
    <SelectItem value="france">France</SelectItem>
    <SelectItem value="germany">Germany</SelectItem>
    <SelectItem value="india">India</SelectItem>
    <SelectItem value="japan">Japan</SelectItem>
    <SelectItem value="pakistan">Pakistan</SelectItem>
    <SelectItem value="spain">Spain</SelectItem>
    <SelectItem value="unitedKingdom">United Kingdom</SelectItem>
  </SelectContent>
</Select>
<Select >
  <SelectTrigger  className="w-auto">
    <SelectValue  placeholder="Time Zone" />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="PKT">Pakistan Standard Time (PKT)</SelectItem>
    <SelectItem value="CT">Central Time - US & Canada (CT)</SelectItem>
    <SelectItem value="GMT">Greenwich Mean Time (GMT)</SelectItem>
    <SelectItem value="IST">India Standard Time (IST)</SelectItem>
    <SelectItem value="CET">Central European Time (CET)</SelectItem>
  </SelectContent>
</Select>
<div className='flex flex-row items-center justify-between'>
<div className='flex flex-row justify-start items-center gap-3'>
  <Button className='bg-[#d4fd75] text-black hover:bg-[#e1ff9b]'>Save Changed</Button>
  <Button className='border-slate-300' variant={"outline"}>Cancel</Button>
</div>
<Button variant={"destructive"}>Delete Account</Button>
</div>
      </div>
    </div>
  );
}

export default ProfileSettings;
