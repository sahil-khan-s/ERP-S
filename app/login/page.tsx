"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from 'next/image';
import { SubmitButton } from '../submit-button';
import axios from 'axios';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/handleAuth", { action: 'login', ...data });

      // Store user data in localStorage upon successful login
      localStorage.setItem('user', JSON.stringify(response.data.user));

      router.push("/dashboard"); // Redirect to the dashboard or wherever you want after login
    } catch (error) {
      // setError(error);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };




  //   useEffect(() => {
 //     const storedUser = localStorage.getItem('user');
 //     if (storedUser) {
 //     //   setUser(JSON.parse(storedUser)); // Set user from localStorage if exists
 //       router.push('/dashboard'); // Redirect to dashboard
 //     }
 //   }, [router, setUser]);

  return (
    <div className="min-h-screen flex">
      <div className='hidden sm:block bg-black w-[40%] relative'>
        <div className='flex justify-center pt-[90px]'>
          <svg width="257" height="103" viewBox="0 0 297 103" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M64.5875 12.4855L75.884 0H17.6182C10.0873 6.14367 -3.78554 21.6416 0.970851 34.4838C2.75447 38.6456 10.2457 47.9206 25.9418 51.7257C31.6891 53.7075 42.9459 61.0007 41.9946 74.3186C41.7964 80.4622 36.1681 94.6521 15.2399 102.262C24.9509 102.262 45.5619 97.6249 50.3183 79.0749C52.3001 71.3458 51.3885 53.7472 31.8873 45.1857C23.1673 41.4202 5.72717 31.9867 5.72717 24.3765C5.52899 22.3947 5.84608 17.5986 8.69992 14.2692C6.71809 17.4401 6.32172 25.4467 20.5909 32.1056C34.6619 37.0602 61.6147 52.677 56.8583 75.5077C61.0202 68.3731 66.2522 51.0123 53.8856 38.6456C47.9401 32.8983 38.4273 20.8092 47.9401 18.431H27.7255C24.6418 18.2979 23.5636 17.2419 23.5636 14.8637C23.5636 12.4855 26.5364 12.4855 27.7255 12.4855H64.5875ZM96.7831 25.8442V74.7891H103.413V53.2787H126.827V47.2135H103.413V31.9094H128.026V25.8442H103.413H101.297H96.7831ZM135.601 24.4337V74.7891H141.948V24.4337H135.601ZM157.723 73.2375C160.403 74.742 163.412 75.4943 166.751 75.4943C169.384 75.4943 171.852 75.0006 174.156 74.0133C176.507 73.0259 178.481 71.5919 180.08 69.7112L175.99 65.5502C174.861 66.8667 173.498 67.854 171.899 68.5123C170.348 69.1705 168.631 69.4996 166.751 69.4996C164.494 69.4996 162.496 69.0295 160.756 68.0891C159.016 67.1018 157.676 65.7383 156.736 63.9986C156.161 62.9053 155.761 61.7064 155.538 60.4018H181.773C181.914 59.6966 182.008 59.0853 182.055 58.5681C182.102 58.0039 182.125 57.4867 182.125 57.0166C182.125 53.8664 181.444 51.0454 180.08 48.5535C178.764 46.0616 176.906 44.1104 174.509 42.6998C172.158 41.2893 169.431 40.5841 166.328 40.5841C163.083 40.5841 160.145 41.3599 157.512 42.9114C154.926 44.416 152.857 46.4847 151.306 49.1177C149.801 51.7506 149.049 54.7127 149.049 58.0039C149.049 61.3422 149.825 64.3277 151.376 66.9607C152.928 69.5937 155.043 71.6859 157.723 73.2375ZM155.551 55.1124C155.767 53.9011 156.139 52.7962 156.666 51.7977C157.559 50.105 158.828 48.7886 160.474 47.8482C162.12 46.9079 164.024 46.4377 166.187 46.4377C168.255 46.4377 170.018 46.8844 171.476 47.7777C172.933 48.624 174.062 49.8465 174.861 51.445C175.406 52.5034 175.766 53.7259 175.939 55.1124H155.551ZM201.029 62.1568L210.017 74.7891H217.704L205.158 57.4743L217.07 41.2893H209.665L201.421 52.9942L192.879 41.2893H185.192L197.331 57.5832L184.557 74.7891H192.033L201.029 62.1568ZM223.622 41.2893V74.7891H229.969V41.2893H223.622ZM223.904 33.461C224.656 34.2132 225.62 34.5894 226.796 34.5894C227.971 34.5894 228.935 34.2132 229.687 33.461C230.439 32.6617 230.816 31.6743 230.816 30.4989C230.816 29.3705 230.439 28.4301 229.687 27.6779C228.935 26.8786 227.971 26.4789 226.796 26.4789C225.62 26.4789 224.656 26.8786 223.904 27.6779C223.152 28.4301 222.776 29.3705 222.776 30.4989C222.776 31.6743 223.152 32.6617 223.904 33.461ZM244.119 47.0724V74.7891H250.466V47.0724H261.116V41.2893H250.466V36.282C250.466 34.2132 251.007 32.5912 252.089 31.4157C253.217 30.2403 254.792 29.6526 256.814 29.6526C257.895 29.6526 258.812 29.8406 259.564 30.2168C260.317 30.5459 260.998 31.0396 261.609 31.6978L265.771 27.6073C264.595 26.3379 263.302 25.374 261.892 24.7158C260.481 24.0575 258.812 23.7284 256.884 23.7284C254.345 23.7284 252.112 24.2691 250.184 25.3505C248.304 26.4319 246.823 27.9129 245.741 29.7936C244.66 31.6273 244.119 33.7901 244.119 36.282V41.2893H235.868V47.0724H244.119ZM281.201 75.0712L274.853 88.8237H267.801L276.042 71.9302L262.864 41.2893H269.917L279.607 65.0413L289.805 41.2893H296.857L281.201 75.0712Z" fill="#DDFF8F" />
          </svg>
        </div>
        <div className='mt-16'>
          <svg width="306" height="350" viewBox="0 0 236 430" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M157 214.5C157 297.127 82.6925 368 -14 368C-110.692 368 -185 297.127 -185 214.5C-185 131.873 -110.692 61 -14 61C82.6925 61 157 131.873 157 214.5Z" stroke="#DDFF8F" strokeWidth="50" />
            <path d="M235.5 215C235.5 333.422 130.108 429.5 0 429.5C-130.108 429.5 -235.5 333.422 -235.5 215C-235.5 96.5778 -130.108 0.5 0 0.5C130.108 0.5 235.5 96.5778 235.5 215Z" stroke="#DDFF8F" />
            <circle cx="163" cy="63" r="17" fill="#DDFF8F" />
          </svg>
        </div>
      </div>
      <div className="z-100 w-full sm:w-[60%] bg-white overflow-hidden">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="backgroundColor h-[100%] flex flex-col space-y-4 custom-form px-4 py-8 sm:px-16 border-0"
        >
          <div className='md:hidden flex flex-row justify-center items-center'>
            <Image src="/placeholder.svg" height={30} width={30} alt='Logo' className='block md:hidden' />
            <div className='text-2xl font-semibold'>Flexify</div>
          </div>
          <div className="flex flex-col items-center justify-center border-b border-gray-200 px-4 text-center sm:px-16">
            <h3 className="font-bold text-4xl md:text-[60px] mt-0 md:mb-[25px] md:mt-[9px]">Welcome Back</h3>
            <p className="font-medium pt-5 text-base md:text-[24px] text-[#424242]">
              Sign In to Access Your Account.
            </p>
            <div className="border border-gray-400 my-5 w-full md:w-[800px] mx-auto"></div>
          </div>

          <div className="w-full sm:w-[616px] mx-auto">
            <label
              htmlFor="email"
              className="block text-xs text-gray-600 uppercase font-bold"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="mt-1 block h-[61px] w-full sm:w-[616px] md:w-full mx-auto bg-[#E3E3E3] appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="w-full sm:w-[616px] mx-auto">
            <label
              htmlFor="password"
              className="block text-xs text-gray-600 uppercase font-bold"
            >
              Password
            </label>
            <input
              id="password"
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="****"
              className="mt-1 block h-[61px] w-full sm:w-[616px] md:w-full mx-auto bg-[#E3E3E3] appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black font-bold sm:text-sm"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

            <div className="flex justify-between pt-5">
              <div className="">
                <input
                  type="checkbox"
                  id="remember"
                  className="text-black"
                />
                <label htmlFor="remember" className="px-2">Remember Password</label>
              </div>
              <div>
                <Link href="/forgot-password" className="text-black">Forget Password?</Link>
              </div>
            </div>
          </div>

          {loading ? (
            <div className='pt-10'>
              <div className='bg-black rounded-md flex justify-center items-center sm:w-[616px] h-[61px] mx-auto w-full md:w-[616px] border transition-all focus:outline-none'>
                <div className='login-loader'></div>
              </div>
            </div>
          ) : (
            <div className="pt-7">
              <SubmitButton>Sign In</SubmitButton>
            </div>
          )}
          <p className="text-center text-sm text-gray-600 pt-4">
            Don't have an account?{' '}
            <Link href="/register" className="font-bold text-gray-800">
              Sign up
            </Link>
          </p>
          {error && <p className="text-red-500 text-center">{error}</p>}

        </form>
      </div>
    </div>
  );
}