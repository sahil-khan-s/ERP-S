import React from "react";
// SHADCN UI
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { cn, readFileAsDataUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HiOutlineCamera } from "react-icons/hi2";
import Image from "next/image";
// FIREBASE
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";

const VendorInputFields = ({ page, setPage }: { page: any; setPage: any }) => {
  const [selectedImage, setSelectedImage] = React.useState<string>();
  const [image, setImage] = React.useState<any>();
  const [vendorName, setVendorName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [contractValue, setContractValue] = React.useState("");
  const [category, setCategory] = React.useState<string>("");
  const [date, setDate] = React.useState<Date>();
  const [type, setType] = React.useState<string>("");
  const [address, setAdress] = React.useState<string>("");
  const [note, setNote] = React.useState<string>("");
  let imageUrl: string;

  const handleImageUpload = async () => {
    const storageRef = ref(storage, `images/${image.name}`);
    try {
      await uploadBytes(storageRef, image);
      imageUrl = await getDownloadURL(storageRef);
    } catch (error) {
      console.error(error);
    }
  };

  const handleForm = async () => {
    await handleImageUpload();
    try {
      const response = await fetch("/api/vendor", {
        method: "POST",
        body: JSON.stringify({
          imageUrl,
          vendorName,
          category,
          contractValue,
          date,
          email,
          type,
          address,
          note,
        }),
      });
      resetData();
    } catch (error) {
      console.error(error);
    }
  };

  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await readFileAsDataUrl(file);
      setSelectedImage(dataUrl);
      setImage(e.target.files?.[0]!);
    }
  };

  const resetData = () => {
    setNote("");
    setType("");
    imageUrl = "";
    setEmail("");
    setAdress("");
    setCategory("");
    setVendorName("");
    setDate(undefined);
    setContractValue("");
    setSelectedImage(undefined);
  };

  return (
    <form action={handleForm}>
      <div className="flex items-start mb-4 justify-start w-full">
        {selectedImage ? (
          <Image
            className="min-h-52 rounded-xl h-64  w-52 object-cover"
            src={selectedImage}
            alt=""
            height={300}
            width={300}
          />
        ) : (
          <label
            htmlFor="image-upload"
            className="border border-slate-300 appearance-none rounded-xl p-4 -gray-700 focus:ring-1 leading-tight outline-none text-[16px] flex flex-col items-center justify-center w-32 h-32 "
          >
            <div className="flex flex-col items-center justify-center">
              <HiOutlineCamera className="text-slate-500 text-xl" />
            </div>

            <input
              onChange={fileChangeHandler}
              id="image-upload"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        )}
      </div>
      <div className="mb-4 flex gap-4">
        <div className="w-full">
          <input
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            className=" border-slate-300 appearance-none border rounded-xl w-full p-4 focus:outline-none focus:ring-1 focus:ring-black"
            id="vendorName"
            type="text"
            placeholder="Vendor Name"
          />
        </div>
        <div className="w-full">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black"
            id="contractEmail"
            type="email"
            placeholder="Contract Email"
          />
        </div>
      </div>
      <div className=" mb-4 flex gap-4">
        <div className="w-full">
          <input
            value={contractValue}
            onChange={(e) => setContractValue(e.target.value)}
            className="bg-white  border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black"
            id="contractNumber"
            type="text"
            placeholder="Contract Value"
          />
        </div>
        <div className="w-full">
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className=" border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black"
            id="contractName"
            type="text"
            placeholder="Category"
          />
        </div>
      </div>

      <div className="mb-4 flex gap-4">
        <div className="w-full">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={cn(
                  "bg-whitee  ring-0 border border-slate-300 h-12 appearance-none  rounded-xl w-full p-4  hover:bg-white text-gray-700 focus:ring-1 leading-tight outline-none text-[16px] ",
                  !date && "text-muted-foreground item-start justify-start"
                )}
              >
                {date ? (
                  format(date, "PPP")
                ) : (
                  <div className="text-gray-400 font-normal ">
                    Date of birth
                  </div>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="w-full">
          <Select
            onValueChange={(value: string) => {
              setType(value);
            }}
          >
            <SelectTrigger className=" border border-slate-300 h-12 appearance-none  rounded-xl w-full p-4 -gray-700 focus:ring-1 leading-tight outline-none text-[16px] text-gray-400 focus:text-black">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mb-4">
        <input
          value={address}
          onChange={(e) => setAdress(e.target.value)}
          className=" border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black"
          id="address"
          type="text"
          placeholder="Address"
        />
      </div>
      <div className="mb-4">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className=" border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black"
          id="notes"
          placeholder="Notes"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="absolute w-20 bg-[#DDFF8F] hover:bg-[#C8F064] text-gray-700 font-semibold py-2 rounded-lg focus:outline-none focus:border border-slate-300-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default VendorInputFields;
