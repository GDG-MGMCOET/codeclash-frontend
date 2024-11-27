import { Link } from "react-router-dom";
import { CODING_COMMUNITY } from "../utils/constant";

export default function Footer() {
  const codeText = " <code/> ";
  const mailtext = " <mail/> ";
  return (
    <footer className="flex flex-col bg-black py-8 text-center text-white lg:gap-10">
      <div className="bg-footer-CTA flex w-full items-center justify-center self-end py-8 md:text-3xl lg:w-4/5 lg:rounded-l-full lg:py-16">
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
          <Link
            to="/register"
            className="rounded-full bg-accent px-10 py-3 font-mono text-xl font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-600"
          >
            Register Now
          </Link>
        </div>
      </div>
      <div className="bg-footer-CTA flex w-full items-center justify-center py-8 md:text-3xl lg:w-4/5 lg:rounded-r-full lg:py-16">
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
          <a
            href={CODING_COMMUNITY}
            target="_blank"
            className="rounded-full bg-accent px-10 py-3 font-mono text-xl font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-600"
          >
            Contact Us
          </a>
        </div>
      </div>

      <p className="pt-3 text-sm">
        &copy; {new Date().getFullYear()} GDG On Campus MGMCOET. All rights
        reserved.
      </p>
    </footer>
  );
}
