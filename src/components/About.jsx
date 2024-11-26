import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-slate-800 to-gray-900 p-6 text-white md:p-10">
      <div className="container mx-auto flex max-w-[1200px] flex-col gap-10 px-6 text-justify">
        <section className="mt-10">
          <h1 className="mb-4 text-center font-mono text-4xl font-bold text-white">
            About <span className="">Competition</span>
          </h1>
          <p className="mb-4 text-lg">
            <span className="text-accent">MGM Code Clash</span> is a highly
            anticipated event organized by the GDG team to inspire, challenge,
            and showcase the coding talent within our student community.
            Scheduled to take place on{" "}
            <strong>2nd December from 2:30 PM to 4:00 PM</strong>, this
            competition is crafted to push your problem-solving abilities,
            logical reasoning, and programming expertise to the next level.
          </p>
          <p className="mb-4 text-lg">
            The competition revolves around solving thought-provoking problems
            based on programming concepts, data structures, and algorithms
            (DSA). Participants will get a chance to apply their theoretical
            knowledge in real-world scenarios, fostering creativity and
            innovation in coding. The event is divided into two divisions to
            ensure fair competition and inclusivity, catering to both newcomers
            and experienced coders alike.
          </p>
          <p className="text-lg">
            <span className="text-accent">MGM Code Clash</span> is not just a
            competition; it’s an opportunity to learn, grow, and connect with
            like-minded individuals. Whether you’re a beginner looking to step
            into the exciting world of coding or a seasoned programmer ready to
            face tough challenges, this event promises to be a thrilling and
            enriching experience.
          </p>
        </section>

        <section className="">
          <h2 className="mb-4 text-center font-mono text-3xl font-bold text-white">
            Format
          </h2>
          <p className="mb-4 text-lg">
            The <span className="text-accent">MGM Code Clash</span> is
            structured to provide a fair and engaging experience for all
            participants. The competition is divided into two divisions, each
            tailored to different skill levels:
          </p>
          <div className="space-y-6">
            {/* Division 1 */}
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-yellow-400">
                Division 1:
              </h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Open to 1st and 2nd-year students only.</li>
                <li>
                  Designed to encourage newcomers to participate and test their
                  foundational knowledge in programming and data structures.
                </li>
                <li>
                  Problems will be beginner to intermediate level, focusing on
                  logical thinking and basic programming concepts.
                </li>
              </ul>
            </div>
            {/* Division 2 */}
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-yellow-400">
                Division 2:
              </h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Open to students from any year.</li>
                <li>
                  Aimed at advanced coders with strong problem-solving skills.
                </li>
                <li>
                  Problems will be challenging and require an in-depth
                  understanding of algorithms and data structures.
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-lg">
            Each division will have its own set of problems, and participants
            will compete within their respective groups. The competition will be
            conducted online/offline (mention the mode if applicable), and
            participants are expected to submit their solutions within the given
            time-frame of 1.5 hours. Rankings will be based on the number of
            problems solved and the efficiency of the solutions.
          </p>
        </section>

        <section className="">
          <h2 className="mb-4 text-center font-mono text-3xl font-bold text-white">
            Rules
          </h2>
          <ul className="list-inside list-decimal space-y-4 text-lg">
            <li>
              <span className="font-bold text-accent">No Use of AI Tools:</span>{" "}
              The use of AI tools like ChatGPT, Copilot, or any similar
              assistance is strictly prohibited. Participants must rely solely
              on their own knowledge and skills.
            </li>
            <li>
              <span className="font-bold text-accent">No Cheating:</span> Any
              form of cheating, including plagiarism or collaboration with
              others during the competition, will lead to immediate
              disqualification.
            </li>
            <li>
              <span className="font-bold text-accent">Code of Conduct:</span>{" "}
              Maintain professionalism and adhere to the competition’s ethical
              guidelines. Respect your fellow participants and the organizing
              team.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-center font-mono text-3xl font-bold text-white">
            Prizes
          </h2>
          <div className="space-y-6">
            {/* Division 1 */}
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-yellow-400">
                Division 1 (1st & 2nd-Year Students):
              </h3>
              <p className="text-lg">
                Top 3 winners will receive exciting goodies as rewards.
              </p>
            </div>
            {/* Division 2 */}
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-yellow-400">
                Division 2 (Open to All):
              </h3>
              <p className="text-lg">
                Top 3 winners will receive goodies along with an exclusive cash
                prize.
              </p>
            </div>
            {/* Special Rewards */}
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-yellow-400">
                Special Rewards:
              </h3>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  Two random participants will receive customized T-shirts as a
                  token of appreciation.
                </li>
                <li>
                  Every participating student will receive exclusive Code Clash
                  stickers.
                </li>
              </ul>
            </div>
            {/* Certificates */}
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-yellow-400">
                Certificates:
              </h3>
              <p className="text-lg">
                Every participant will be awarded a certificate of
                participation, and winners will receive a certificate of
                excellence.
              </p>
            </div>
          </div>
          <p className="mt-4 text-lg">
            Follow the rules, compete with integrity, and let your coding skills
            shine! Good luck! 🚀
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
