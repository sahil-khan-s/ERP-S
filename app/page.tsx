"use client";

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
    <>
      <section className="font-outfit backgroundColor">
        <Header />
        <Image
          src={DashboardImage}
          className="mx-auto my-16"
          alt="dashboard"
          quality={100}
          width={900}
          height={900}
        />
      </section>
      <main className="max-w-7xl mx-auto">
        {/* Partners Section */}
        <section className="flex justify-center items-center mx-auto h-52 gap-x-20">
          <Image src={Zapier} alt="Zapier" width={90} />
          <Image src={Spotify} alt="Spotify" width={90} />
          <Image src={Zoom} alt="Zoom" width={90} />
          <Image src={Slack} alt="Slack" width={90} />
          <Image src={Amazon} alt="Amazon" width={90} />
          <Image src={Adobe} alt="Adobe" width={90} />
        </section>
        {/* Introduction Section */}
        <section>
          <div className="flex justify-between items-center flex-col gap-6 my-4">
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-black text-center text-4xl">
                Software is custom-built for the <br />
                work your team does
              </h3>
              <p className="text-center font-light">
                Jira facilities seamless connections for over 250,00- teams.{" "}
                <br />
                reducing the manual in work processes.
              </p>
            </div>
            <div className="px-4 py-2 rounded-lg bg-[#F5F7F9]">
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
        <section className="relative flex justify-center my-20">
          <Image
            src={LeftRingSvg}
            alt="svg"
            className="absolute left-[-20px] top-[-130px]"
          />
          <div className="flex justify-center items-center gap-4 w-[1100px]">
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
        <section className="relative flex mx-auto ml-10 my-52">
          <Image
            src={RightRingSvg}
            alt="svg"
            className="absolute right-[-20px] top-[-150px]"
          />
          <div className="flex justify-between w-full">
            <div>
              <div className="flex flex-col w-full">
                <h3 className="font-medium text-black text-4xl">
                  Bring the big picture into view
                </h3>
                <p className="font-light my-2">
                  Jira facilities seamless connections for over 250,00- teams.{" "}
                  <br />
                  reducing the manual in work processes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 my-3">
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
            <div className="relative">
              <div className="p-6 rounded-3xl Users_Background_color mr-20">
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
        <section className="relative flex justify-center">
          <Image
            src={LeftRingSvg}
            alt="svg"
            className="absolute left-[-20px] top-[-130px]"
          />
          <div className="flex justify-between w-full">
            <div className="p-6 rounded-3xl Users_Background_color ml-16 flex flex-col gap-3">
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
            <div className="w-[50%] mt-9 flex flex-col gap-10">
              <div>
                <h3 className="font-medium text-black text-4xl my-2">
                  Get going with templates
                </h3>
                <p>
                  Choose from over 40 pre-mod template for marketing, HR
                  finance, and more. From project management to budget process,
                  there’s a template to help any project up and running.
                </p>
              </div>
              <div>
                <Link href={"/"} className="active px-6 py-4">
                  Learn More
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <h3 className="font-medium text-black text-4xl">500+</h3>
                  <p className="text-center">
                    Comprehensive templates for all buisness
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-black text-4xl">200+</h3>
                  <p className="text-center">
                    Comprehensive Successful projects
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-black text-4xl">75%</h3>
                  <p className="text-center">
                    Comprehensive templates for all busness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative flex mx-auto ml-10 mt-52 mb-20">
          <Image
            src={RightRingSvg}
            alt="svg"
            className="absolute right-[-20px] top-[-100px]"
          />
          <div className="flex justify-between w-full my-12">
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-black text-4xl">
                Strategies to Make Work <br /> Fun and Fulfilling
              </h3>
              <p>
                Spice up tasks wth gamification, foster teamwork, offer growth{" "}
                <br />
                opportunities, and create a supportive culture for a fun and
                fulfilling workplace
              </p>
              <Link href={"/"} className="active px-6 py-4 w-fit">
                Learn More
              </Link>
            </div>
            <div className="relative">
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
        <section className="flex justify-between items-center ml-10">
          <h3 className="font-medium text-black text-4xl">
            Effortless Collaboration <br />
            Through Effective Tools
          </h3>
          <p>
            Effortless collaboration is the hallmark of effective tools. When
            every <br />
            component of your workflow seamlessly communicated, teamwork <br />
            becomes second nature.
          </p>
          <Link href={"/"} className="active px-6 py-4 w-fit">
            Learn More
          </Link>
        </section>
        <section className="flex my-10 ml-10">
          <div className="flex gap-2">
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
        </section>
        <section className="mb-10 mt-32">
          <h3 className="font-medium text-black text-center text-4xl">
            More Than 500 Reviews from <br />
            our Valued Clients
          </h3>
          <p className="text-center font-light">
            With over 500 reviews, our clients speak volumes about our quality
            and service. <br />
            Their satisfaction drives our commitment to excellence.
          </p>
        </section>
        <section className="relative flex w-full">
          <Image
            src={LeftRingSvg}
            alt="svg"
            className="absolute left-[-32px] top-[-110px]"
          />
          <div className="flex ml-10 gap-4 mx-auto my-6">
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
        </section>
        <div className="flex justify-center items-center my-6 gap-2">
          <Image src={leftArrowSvg} alt="leftarrow" />
          <Image src={RightArrowSvg} alt="leftarrow" />
        </div>
        <section className="flex justify-between items-center mt-20 mb-10 ml-10">
          <h3 className="font-medium text-black text-4xl my-2">
            Optimize Team Collaboration with <br />
            Jira’s Unified Plaform
          </h3>
          <div className="flex gap-3">
            <Link href={"/"} className="active rounded_Important px-4 py-2">
              Get Started
            </Link>
            <Link
              href={"/"}
              className="border-2 border-black rounded-3xl px-4 py-2"
            >
              Get it free
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
