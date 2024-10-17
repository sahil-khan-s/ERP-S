"use client"
import Image from "next/image";
import React, { useState } from "react";
import { cn, readFileAsDataUrl } from "@/lib/utils";
//COMPONENTS
import Nav from "../components/common/nav";
import SearchBar from "../components/common/SearchBar";
import VendorsList from "../components/vendor/VendorsList";
import NewVendor from "../components/vendor/NewVendor";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
//ICONS
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { HiOutlineCamera } from "react-icons/hi2";
// FIREBASE
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
// import { storage } from '@/lib/firebaseConfig'

import { UseMutationResult, useMutation } from "@tanstack/react-query";
import axios from "axios";
//React hook form
import { useForm, Controller } from "react-hook-form";
import { DivideIcon } from "lucide-react";

interface VendorFormData {
  selectedImage: string;
  vendorName: string;
  category: string;
  contractValue: string;
  date: Date | undefined;
  email: string;
  type: string;
  address: string;
  note: string;
}

export default function Vendor() {
  const [open, setOpen] = useState<boolean>(true);

  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<VendorFormData>();

  // input form 
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [image, setImage] = React.useState<File | null>(null);
  let imageUrl: string;

  const [buttonLoading, setButtonLoading] = useState(false)

  // PREVIEW IMAGE
  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await readFileAsDataUrl(file);
      setSelectedImage(dataUrl);
      setImage(file);
    }
  }

  // RESET DATA
  const resetData = () => {
    reset();
    setSelectedImage(null);
    setImage(null);
  }

  // IMAGE TO STRING
  // const handleImageUpload = async () => {
  //   if (image) {
  //     const storageRef = ref(storage, `images/${image.name}`)
  //     try {
  //       await uploadBytes(storageRef, image)
  //       imageUrl = await getDownloadURL(storageRef)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  // }

  // POST API
  const handleForm = async (data: VendorFormData) => {
    // await handleImageUpload();
    try {
      setButtonLoading(true)
      const response = await fetch("/api/vendor", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, selectedImage })
      });
      if (response.ok) {
        resetData();
        setOpen(true);
        setButtonLoading(false)
        
      } else {
        throw new Error('Failed to submit form');
      }
    
    } catch (error) {
      console.error(error);
    }
    finally{
      setButtonLoading(false)
    }
  }

  return (
    <div className="bg-white px-4 md:px-8">
      <Nav />
      {open ? (
        <div className="bg-gray-100">
          <main>
            <div className="bg-white py-2 rounded">
              <div className="flex justify-between items-center px-2 mb-2 md:mt-2 md:mb-4">
                <SearchBar />
                <button onClick={() => setOpen(false)} className="md:block hidden text-sm bg-[#DDFF8F] text-black px-[15.24px] py-3 rounded-[11.43px] w-42">
                  Add New Vendor<AddCircleOutlineIcon className="mx-1" />
                </button>
                <button onClick={() => setOpen(false)} className="md:hidden block text-sm bg-[#DDFF8F] text-black px-2 md:px-[20.24px] py-2 rounded-[11.43px]">
                  Add<AddCircleOutlineIcon className="text-base ml-1" />
                </button>
              </div>
              <div className="px-1">
                {/* Rendor Conditionally */}
                {/* <NewVendor /> */}
                <VendorsList />
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className="bg-white py-8 md:p-8 shadow-lg w-full">
          {/*  Input form   */}
          <form className="space-y-4" onSubmit={handleSubmit(handleForm)}>
            <div className="flex items-start justify-start w-full">
              {selectedImage ? (
                <Image className='rounded-xl h-48 w-48 object-cover' src={selectedImage} alt='Selected vendor image' height={300} width={300} />
              ) : (
                <label
                  htmlFor="image-upload"
                  className="border border-slate-300 appearance-none rounded-xl p-4 text-gray-700 focus:ring-1 leading-tight outline-none text-base flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 cursor-pointer"
                >
                  <HiOutlineCamera className="text-slate-500 text-xl" />
                  <span className="mt-2 text-sm text-gray-500">Upload Image</span>
                  <input 
                    {...register("selectedImage", { required: "Image is required" })}
                    onChange={fileChangeHandler}
                    id="image-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                  />
                </label>
              )}
              {errors.selectedImage && <p className="text-red-500 mt-1">{errors.selectedImage.message}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("vendorName", { required: "Vendor Name is required" })}
                  className="border-slate-300 appearance-none border rounded-xl w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black text-base"
                  type="text"
                  placeholder="Vendor Name"
                />
                {errors.vendorName && <p className="text-red-500 mt-1">{errors.vendorName.message}</p>}
              </div>
              <div>
                <input
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                  className="border-slate-300 appearance-none border rounded-xl w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black text-base"
                  type="email"
                  placeholder="Contract Email"
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("contractValue", { required: "Contract Value is required" })}
                  className="bg-white border-slate-300 appearance-none border rounded-xl w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black text-base"
                  type="text"
                  placeholder="Contract Value"
                />
                {errors.contractValue && <p className="text-red-500 mt-1">{errors.contractValue.message}</p>}
              </div>
              <div>
                <input
                  {...register("category", { required: "Category is required" })}
                  className="border-slate-300 appearance-none border rounded-xl w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black text-base"
                  type="text"
                  placeholder="Category"
                />
                {errors.category && <p className="text-red-500 mt-1">{errors.category.message}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: "Date is required" }}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          className={cn(
                            "bg-white ring-0 border border-slate-300 h-12 appearance-none rounded-xl w-full px-4 py-3 hover:bg-white text-gray-700 focus:ring-1 leading-tight outline-none text-base",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? format(field.value, "PPP") : <span className="text-gray-400">Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.date && <p className="text-red-500 mt-1">{errors.date.message}</p>}
              </div>
              <div>
                <Controller
                  name="type"
                  control={control}
                  rules={{ required: "Type is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="border border-slate-300 h-12 appearance-none rounded-xl w-full px-4 py-3 focus:ring-1 leading-tight outline-none text-base">
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Office">Office</SelectItem>
                        <SelectItem value="Remote">Remote</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.type && <p className="text-red-500 mt-1">{errors.type.message}</p>}
              </div>
            </div>
            <div>
              <input
                {...register("address", { required: "Address is required" })}
                className="border-slate-300 appearance-none border rounded-xl w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black text-base"
                type="text"
                placeholder="Address"
              />
              {errors.address && <p className="text-red-500 mt-1">{errors.address.message}</p>}
            </div>
            <div>
              <textarea
                {...register("note", { required: "Note is required" })}
                className="border-slate-300 appearance-none border rounded-xl w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black text-base"
                placeholder="Notes"
                rows={4}
              ></textarea>
              {errors.note && <p className="text-red-500 mt-1">{errors.note.message}</p>}
            </div>
            <div className='flex justify-end gap-3'>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
              {buttonLoading ? <div
                className="w-20 bg-[#DDFF8F] hover:bg-[#C8F064] text-gray-700 font-semibold py-2 rounded-lg focus:outline-none focus:border border-slate-300-outline flex justify-center items-center">
                <div className="submit-loader text-black bg-black"></div>
              </div> : <Button
                type="submit"
                className="w-20 bg-[#DDFF8F] hover:bg-[#C8F064] text-gray-700 font-semibold py-2 rounded-lg focus:outline-none focus:border border-slate-300-outline"
              >
                Submit
              </Button>}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}