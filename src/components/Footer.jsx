import { Link } from "react-router-dom";
import { CODING_COMMUNITY } from "../utils/constant";
import { Button, ConfigProvider } from "antd";

export default function Footer() {
  const codeText = " <code/> ";
  const mailtext = " <mail/> ";
  return (
    <footer className="flex flex-col bg-black pb-8 text-center text-white shadow-md lg:gap-10">
      <div className="flex w-full items-center justify-center self-end border-b-2 border-accent bg-footer-CTA py-8 md:text-3xl lg:w-4/5 lg:rounded-l-full lg:py-16">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row lg:w-4/5 xl:w-3/5">
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold text-accent">Register Now</h3>
            <p className="text-2xl sm:text-3xl">
              Learn,
              <span className="font-mono font-bold text-accent">
                {codeText}
              </span>
              & Compete
            </p>
          </div>
          <Link to="/register" className="rounded-full">
            <ConfigProvider
              theme={{
                token: { colorPrimary: "#FFC854" },
                components: { Button: { defaultHoverBg: "#000" } },
              }}
            >
              <Button className="rounded-full border-none bg-accent px-12 py-6 font-mono font-bold text-black md:text-lg">
                Register Now
              </Button>
            </ConfigProvider>
          </Link>
        </div>
      </div>
      <div className="flex w-full items-center justify-center border-accent bg-footer-CTA py-8 md:text-3xl lg:w-4/5 lg:rounded-r-full lg:border-b-2 lg:py-16">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row lg:w-4/5 lg:flex-row-reverse xl:w-3/5">
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold text-accent">Contact Us</h3>
            <p className="text-2xl sm:text-3xl">
              Follow,
              <span className="font-mono font-bold text-accent">
                {mailtext}
              </span>
              & Assistance
            </p>
          </div>
          <a href={CODING_COMMUNITY} target="_blank" className="rounded-full">
            <ConfigProvider
              theme={{
                token: { colorPrimary: "#FFC854" },
                components: { Button: { defaultHoverBg: "#000" } },
              }}
            >
              <Button className="rounded-full border-none bg-accent px-12 py-6 font-mono font-bold text-black md:text-lg">
                Contact Us
              </Button>
            </ConfigProvider>
          </a>
        </div>
      </div>

      <p className="pt-5 text-sm">
        &copy; {new Date().getFullYear()} GDG On Campus MGMCOET. All rights
        reserved.
      </p>
    </footer>
  );
}
