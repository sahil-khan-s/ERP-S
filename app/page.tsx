"use client"

// components
import Header from "@/components/Header/Header";
import Card from "@/components/Card";
import TemplateCard from "@/components/TemplateCard";
import SmallCard from "@/components/SmallCard";
import ReviewCard from "@/components/ReviewCard";
import Footer from "@/components/Footer";
import StateCard from "@/components/StateCard";

// Material Ui icons
import DoneIcon from "@mui/icons-material/Done";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Svgs
import LeftRingSvg from "@/public/Svgs/Left_Ring.svg";
import RightRingSvg from "@/public/Svgs/Right_Ring.svg";
import avatarSvg from "@/public/Svgs/Avatar.svg";
import watchSvg from "@/public/Svgs/Watch.svg";
import avatar2Svg from "@/public/Svgs/Avatar2.svg";
import leftArrowSvg from "@/public/Svgs/left_arrow.svg";
import RightArrowSvg from "@/public/Svgs/Right_arrow.svg";

// Images
import DashboardImage from "@/public/Dashboard.png";
import Zapier from "@/public/Zapier.png";
import Adobe from "@/public/Adobe.png";
import Amazon from "@/public/Amazon.png";
import Slack from "@/public/Slack.png";
import Spotify from "@/public/Spotify.png";
import Zoom from "@/public/Zoom.png";
import Card_1 from "@/public/Card_1.png";
import Card_2 from "@/public/Card_2.png";
import Card_3 from "@/public/Card_3.png";
import HappyImage from "@/public/Happy.png";
import UsersImage from "@/public/Users.png";
import Users_graph_Image from "@/public/Users_graph.png";
import Cash_transfer from "@/public/Cash_transfer.png";
import users2Image from "@/public/Users2.png";
import grapgImage from "@/public/graph.png";
import Slack_logo from "@/public/Slack_logo.png";
import AWS_logo from "@/public/AWS.png";
import Gitlab_logo from "@/public/Gitlab_logo.png";
import Github_logo from "@/public/Github_logo.png";
import Hubspot_logo from "@/public/Hubspot_logo.png";
import Darkly_logo from "@/public/Darkly_logo.png";
import DropBox_logo from "@/public/dropbox_logo.png";

import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-white ">
      <section className="font-outfit backgroundColor px-3 md:px-0 mb-5 xl:mb-20">
        <Header />
        <Image
          src={DashboardImage}
          className="w-[360px] h-[204.5px] md:w-[900px] md:h-[511px] mx-auto mt-16 mb-10"
          alt="dashboard"
          quality={100}
          width={1600}
          height={1600}
        />
      </section>
      <main className="max-w-7xl mx-auto">
        {/* Partners Section */}
        <section className=" flex justify-evenly items-center mx-auto md:pb-20">
          <Image src={Zapier} alt="Zapier" width={90} className="w-[45px] md:w-[90px] h-[22px] md:h-[44px]" />
          <Image src={Spotify} alt="Spotify" width={90} className="w-[45px] md:w-[90px] h-[22px] md:h-[44px]" />
          <Image src={Zoom} alt="Zoom" width={90} className="w-[45px] md:w-[90px] h-[22px] md:h-[44px]" />
          <Image src={Slack} alt="Slack" width={90} className="w-[45px] md:w-[90px] h-[22px] md:h-[44px]" />
          <Image src={Amazon} alt="Amazon" width={90} className="w-[45px] md:w-[90px] h-[22px] md:h-[44px]" />
          <Image src={Adobe} alt="Adobe" width={90} className="w-[48px] md:w-[90px] h-[22px] md:h-[44px]" />
        </section>

        {/* Introduction Section */}
        <section>
          <div className="flex justify-between items-center flex-col gap-6 mt-12 md:mt-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-black text-center text-xl md:text-4xl">
                Software is custom-built for the <br />
                work your team does
              </h3>
              <p className="text-center font-light text-xs md:text-base">
                Jira facilities seamless connections for over 250,00- teams.{" "}
                <br />
                reducing the manual in work processes.
              </p>
            </div>
            <div className="hidden sm:block px-4 py-2 rounded-lg bg-[#F5F7F9]">
              <div className="flex gap-2 items-center justify-center">
                <div className="px-4 py-2">Software team</div>
                <div className="active px-4 py-2">Marketing teams</div>
                <div className="px-4 py-2">Operations</div>
                <div className="px-4 py-2">Product teams</div>
                <div className="px-4 py-2">Design teams</div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="2xl:relative flex  justify-center mb-14 mt-10 md:my-20 px-3 md:px-0">
          <Image
            src={LeftRingSvg}
            alt="svg"
            className="hidden 2xl:block absolute top-[-100px] md:left-[-20px] md:top-[-130px]"
          />
          <div className=" z-20 md:flex sm:grid sm:grid-cols-2 grid-cols-1  justify-center items-center gap-4 flex-col md:flex-row md:w-[1100px]">
            <Card
              image={Card_1}
              title={"Manage projects any way you want"}
              text={
                "Launch campaigns with ease. Use the timeline, list, or calendar views to map From your boss to colleagues, everyone can stay on top of important milestones."
              }
            />
            <Card
              image={Card_2}
              title={"Set up a custom form in seconds"}
              text={
                "Use drag and drop form builder to build a custom intake process. Easily manage every new graphic request or media buy that comes your way."
              }
            />
            <Card
              image={Card_3}
              title={"Get up and going with templates"}
              text={
                "20+ new project templates make it easy for marketing teams to get started instantly, with no set-up required. Easily manage every new graphic."
              }
            />
          </div>
        </section>
        {/* Statistics Section */}
        <section className="2xl:relative flex  mx-auto md:ml-10 md:my-52 px-3 md:px-0">
          <Image
            src={RightRingSvg}
            alt="svg"
            className="hidden 2xl:block absolute right-[-20px] top-[-150px]"
          />
          <div className="xl:flex  md:justify-between w-full px-5">
            <div>
              <div className="flex flex-col w-full">
                <h3 className="font-medium text-black text-xl md:text-4xl text-center">
                  Bring the big picture into view
                </h3>
                <p className="text-sm md:text-base font-light my-2 text-center">
                  Jira facilities seamless connections for over 250,00- teams.{" "}
                  <br />
                  reducing the manual in work processes.
                </p>
              </div>
              <div className=" flex flex-col md:grid md:grid-cols-2 gap-4 mt-10 md:my-3">
                <StateCard
                  color="#306950"
                  bgColor="#EBFDF2"
                  icon={<DoneIcon />}
                  title="12 Done"
                  subtitle="in the last 7 days"
                  image={HappyImage}
                />
                <StateCard
                  color="#0C46BE"
                  bgColor="#E3EBFF"
                  icon={<BorderColorIcon />}
                  title="10 Updated"
                  subtitle="in the last 7 days"
                  image={""}
                />
                <StateCard
                  color="#424B7E"
                  bgColor="#F2DCFA"
                  icon={<AddIcon />}
                  title="4 New"
                  subtitle="in the last 7 days"
                  image={""}
                />
                <StateCard
                  color="#BC3A1A"
                  bgColor="#FBEFE9"
                  icon={<DoneIcon />}
                  title="3 Due"
                  subtitle="in the last 7 days"
                  image={""}
                />
              </div>
            </div>
            <div className="hidden xl:block relative">
              <div className="p-6 rounded-3xl Users_Background_color pr-20">
                <Image src={UsersImage} alt="image" width={400} />
              </div>
              <Image
                src={Cash_transfer}
                alt="image"
                width={400}
                className="absolute top-[-30px] right-[225px]"
              />
              <Image
                src={Users_graph_Image}
                alt="image"
                width={350}
                className="absolute top-[150px] right-[290px]"
              />
            </div>
          </div>
        </section>
        {/* Templates Section */}
        <section className="2xl:relative flex justify-center">
          <Image
            src={LeftRingSvg}
            alt="svg"
            className="hidden 2xl:block absolute left-[-20px] top-[-130px]"
          />
          <div className="flex justify-center flex-wrap md:flex-row xl:justify-between w-full">
            <div className="px-4 md:p-6 rounded-3xl Users_Background_color mt-16 my-4 md:ml-16 md:my-0 flex flex-col gap-3">
              <TemplateCard
                Svgs={avatarSvg}
                title="Employment Attendance"
                description="Lorem ipsum dollar smit a iubm sdhkkk kugvyt"
                icon={<KeyboardArrowRightIcon />}
              />
              <TemplateCard
                Svgs={watchSvg}
                title="Overtime"
                description="Lorem ipsum dollar smit a iubm sdhkkk"
                icon={<KeyboardArrowRightIcon />}
              />
              <TemplateCard
                Svgs={avatar2Svg}
                title="Employee Late"
                description="Lorem ipsum dollar smit a iubm sdhkkk kugvyt"
                icon={<KeyboardArrowRightIcon />}
              />
            </div>
            <div className="md:w-[50%] mt-9 flex flex-col gap-10">
              <div>
                <h3 className="font-medium text-black text-2xl text-center md:text-left md:text-4xl my-2">
                  Get going with templates
                </h3>
                <p className="text-center md:text-left text-sm md:text-base px-4 md:px-0">
                  Choose from over 40 pre-mod template for marketing, HR
                  finance, and more. From project management to budget process,
                  there’s a template to help any project up and running.
                </p>
              </div>
              <div className="flex justify-center md:justify-normal">
                <Link href={"/signin"} className="text-sm md:text-base active px-4 py-2 md:px-6 md:py-4">
                  Learn More
                </Link>
              </div>
              <div className="flex justify-center px-1 md:px-0">
                <div className="text-center">
                  <h3 className="font-medium text-black text-2xl md:text-4xl">500+</h3>
                  <p className="text-center text-sm md:text-base">
                    Comprehensive templates for all buisness
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-black text-2xl md:text-4xl">200+</h3>
                  <p className="text-center text-sm md:text-base">
                    Comprehensive Successful projects
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-black text-2xl md:text-4xl">75%</h3>
                  <p className="text-center text-sm md:text-base">
                    Comprehensive templates for all busness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative flex mx-auto md:ml-10  mb-0 md:my-52 px-3 md:px-0">
          <Image
            src={RightRingSvg}
            alt="svg"
            className="hidden 2xl:block absolute right-[-20px] top-[-100px]"
          />
          <div className="flex justify-center xl:justify-between items-center w-full my-12">
            <div className="flex flex-col justify-center items-center md:items-start gap-4">
              <Image
                src={grapgImage}
                alt="image"
                width={1000}
                className="block md:hidden w-[340px]"
              />
              <h3 className="font-medium text-black text-xl text-center md:text-left md:text-4xl">
                Strategies to Make Work <br /> Fun and Fulfilling
              </h3>
              <p className="text-sm md:text-base text-center md:text-left px-2.5 md:px-0">
                Spice up tasks wth gamification, foster teamwork, offer growth{" "}
                <br />
                opportunities, and create a supportive culture for a fun and
                fulfilling workplace
              </p>
              <Link href={"/signin"} className="active px-4 py-2 text-sm md:text-base md:px-6 md:py-4 w-fit">
                Learn More
              </Link>
            </div>
            <div className="hidden xl:block relative">
              <div className="p-6 rounded-3xl Users_Background_color mr-20 w-[400px] h-[350px]"></div>
              <Image
                src={users2Image}
                alt="image"
                width={250}
                className="absolute top-[-35px] right-[225px]"
              />
              <Image
                src={grapgImage}
                alt="image"
                width={400}
                className="absolute top-[80px] right-[290px]"
              />
              <Image
                src={Users_graph_Image}
                alt="image"
                width={280}
                className="absolute top-[130px] right-[60px]"
              />
            </div>
          </div>
        </section>
        <section className="flex py-5 gap-5 flex-wrap justify-center md:flex-row xl:justify-between items-center pb-10 md:pb-0 md:ml-10 gap-4 md:gap-0">
          <h3 className="font-medium text-black text-xl md:text-4xl">
            Effortless Collaboration <br />
            Through Effective Tools
          </h3>
          <p className="pt-5  text-sm md:text-base text-center md:text-left px-3 md:px-0">
            Effortless collaboration is the hallmark of effective tools. When
            every <br className="hidden md:block" />
            component of your workflow seamlessly communicated, teamwork <br className="hidden md:block" />
            becomes second nature.
          </p>
          <Link href={"/signin"} className="ml-5 active px-4 py-2 md:px-6 md:py-4 w-fit text-sm md:text-base">
            Learn More
          </Link>
        </section>
        {/* --------------------- */}
        <section className="hidden md:block ">
          <div className="flex my-10">
            <div className="flex flex-wrap gap-2 justify-center ">
              <div className="bg-white border-2 border-[#EFF0F1] rounded-lg p-4 w-60 flex flex-col justify-between">
                <Image src={Slack_logo} alt="logo" width={80} className="my-3" />
                <div>
                  <h2 className="text-xl font-bold mt-2">Slack</h2>
                  <p>The most important data for your store, all in one view</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <SmallCard
                  title="Launch Darkly"
                  description="The most important data for your store, all in one view"
                  image={Darkly_logo}
                />
                <SmallCard
                  title="Amazon"
                  description="The most important data for your store, all in one view"
                  image={AWS_logo}
                />
              </div>
              <div className="bg-white border-2 border-[#EFF0F1] rounded-lg p-4 w-60 flex flex-col justify-between">
                <Image src={Github_logo} alt="logo" width={80} className="my-3" />
                <div>
                  <h2 className="text-xl font-bold mt-2">Github</h2>
                  <p>The most important data for your store, all in one view</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <SmallCard
                  title="Dropbox"
                  description="The most important data for your store, all in one view"
                  image={DropBox_logo}
                />
                <SmallCard
                  title="Hubspost"
                  description="The most important data for your store, all in one view"
                  image={Hubspot_logo}
                />
              </div>
              <div className="bg-white border-2 border-[#EFF0F1] rounded-lg p-4 w-60 flex flex-col justify-between">
                <Image src={Gitlab_logo} alt="logo" width={80} className="my-3" />
                <div>
                  <h2 className="text-xl font-bold mt-2">GitLab</h2>
                  <p>The most important data for your store, all in one view</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="block md:hidden">
          <div className="flex ">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 p-2">

                <div className="bg-white border-2 border-[#EFF0F1] rounded-lg p-2 flex flex-col">
                  <Image src={Slack_logo} alt="logo" width={80} className="my-1 w-[30px]" />
                  <div>
                    <h2 className="md:text-xl font-bold mt-2">Slack</h2>
                    <p className="text-xs">The most important data for your store, all in one view</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <SmallCard
                    title="Launch Darkly"
                    description="The most important data for your store, all in one view"
                    image={Darkly_logo}
                  />
                  <SmallCard
                    title="Amazon"
                    description="The most important data for your store, all in one view"
                    image={AWS_logo}
                  />
                </div>

              </div>
              <div className="flex flex-row gap-2 px-2">
                <div className="flex flex-col gap-2">
                  <SmallCard
                    title="Dropbox"
                    description="The most important data for your store, all in one view"
                    image={DropBox_logo}
                  />
                  <SmallCard
                    title="Hubspost"
                    description="The most important data for your store, all in one view"
                    image={Hubspot_logo}
                  />
                </div>
                <div className="bg-white border-2 border-[#EFF0F1] rounded-lg p-2 flex flex-col">
                  <Image src={Github_logo} alt="logo" width={80} className="my-1 w-[30px]" />
                  <div>
                    <h2 className="md:text-xl font-bold mt-2">Slack</h2>
                    <p className="text-xs">The most important data for your store, all in one view</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#EFF0F1] rounded-lg mt-2 mx-2 p-4 flex flex-row justify-between gap-3">
                <Image src={Gitlab_logo} alt="logo" width={80} className="w-[60px] h-[60px] my-3" />
                <div>
                  <h2 className="text-xl font-bold mt-2">GitLab</h2>
                  <p>The most important data for your store, all in one view</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-10 mt-20 md:mt-32 px-3">
          <h3 className="font-medium text-black text-center text-2xl md:text-4xl pb-2">
            More Than 500 Reviews from <br />
            our Valued Clients
          </h3>
          <p className=" text-sm md:text-base text-center font-light px-2">
            With over 500 reviews, our clients speak volumes about our quality
            and service. <br className="hidden md:block" />
            Their satisfaction drives our commitment to excellence.
          </p>
        </section>
        <section className="">
          <div className="hidden md:block">
            <div className="w-full flex flex-wrap gap-x-5 justify-center  2xl:ml-10 gap-4  my-6">
              <ReviewCard
                title="Marketing teams"
                subtitle="The easiest way for teams handle
event planning tasks whether it’s
talking to vendors, designing assets
single point"
                detail="CTO, FLO"
                name="ROMAN BUGAEV"
                color="#F9F9F9"
              />
              <ReviewCard
                title="Operations"
                subtitle="The biggest benefit consolidating
our platform on Atlassian products
has been providing a single point of
visibility over our projects"
                detail="CTO, FLO"
                name="DANIELE FARNEDI"
                color="#ffffff"
              />
              <ReviewCard
                title="Marketing teams"
                subtitle="The easiest way for teams handle
event planning tasks whether it’s
talking to vendors, designing assets
single point"
                detail="CTO, FLO"
                name="ROMAN BUGAEV"
                color="#F9F9F9"
              />
            </div>
          </div>

          <div className="flex justify-center w-full">
            <div className="block md:hidden max-w-md mx-3 bg-white rounded-lg shadow-md p-6 md:max-w-sm">
              <div className="flex items-center space-x-4 md:space-x-6">
                <div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-300"
                />
                <div >
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {/* Star icons for rating */}
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm md:text-base">
                "This product is amazing! It has exceeded all of my expectations. Highly
                recommended!"
              </p>
            </div>
          </div>

        </section>
        <div className="flex justify-center items-center my-6 gap-2">
          <Image src={leftArrowSvg} alt="leftarrow" />
          <Image src={RightArrowSvg} alt="leftarrow" />
        </div>
        <section className="flex flex-col md:flex-row md:justify-between items-center mt-20 mb-10 md:ml-10">
          <h3 className="font-medium text-black text-xl text-center  md:text-4xl my-2">
            Optimize Team Collaboration with <br />
            Jira’s Unified Plaform
          </h3>
          <div className="flex gap-3 mt-3 md:mt-0">
            <Link href={"/signin"} className="active rounded_Important px-4 py-2">
              Get Started
            </Link>
            <Link
              href={"/signin"}
              className="border-2 border-black rounded-3xl px-4 py-2"
            >
              Get it free
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
