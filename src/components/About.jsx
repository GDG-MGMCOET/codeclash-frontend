import React from "react";

const About = () => {
  return (
    <div className="background min-h-screen p-6 text-white md:p-10">
      <div className="container mx-auto flex max-w-[1200px] flex-col gap-10 px-6 text-justify">
        <section className="mt-10 sm:text-lg">
          <h1 className="sm:4xl mb-4 text-center font-mono text-3xl font-bold text-white">
            About <span className="">Competition</span>
          </h1>
          <p className="mb-4">
            <span className="text-accent">MGM Code Clash</span> is flagship
            coding contest, organized by the Google Developers Group On Campus
            MGMCOET. Whether you're a beginner or an experienced coder, this
            event is your chance to challenge yourself, enhance your coding
            skills, and compete with the best. Get ready for an electrifying
            experience with exciting challenges, interactive learning, and
            incredible rewards! Scheduled to take place on&nbsp;
            <strong className="text-accent">
              2nd December from 1:45 PM to 3:15 PM
            </strong>
            , this competition is crafted to push your problem-solving
            abilities, logical reasoning, and programming expertise to the next
            level.
          </p>
          <p className="mb-4">
            The competition features engaging problems based on programming
            concepts, data structures, and algorithms (DSA), designed to
            encourage logical thinking and creativity. Participants will have
            the opportunity to apply their knowledge to practical challenges,
            fostering both skill development and confidence. The event is
            divided into two divisions to ensure fair competition and
            inclusivity, catering to both newcomers and experienced coders
            alike.
          </p>
          <p className="">
            <span className="text-accent">MGM Code Clash</span> is more than
            just a coding contest—it's a platform for innovation, collaboration,
            and growth. Whether you’re a beginner looking to step into the
            exciting world of coding or a seasoned programmer ready to face
            tough challenges, this event promises to be a thrilling and
            enriching experience.
          </p>
        </section>

        <section className="">
          <h2 className="mb-4 text-center font-mono text-3xl font-bold text-white sm:text-4xl">
            Format
          </h2>
          <p className="mb-4 text-lg">
            The <span className="text-accent">MGM Code Clash</span> is
            structured to provide a fair and engaging experience for all
            participants. The competition is divided into two divisions, each
            tailored to different skill levels:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-yellow-400">
                Division 1:
              </h3>
              <ul className="list-inside list-disc">
                <li>Open to 1st and 2nd-year students only.</li>
                <li>
                  Designed to encourage newcomers to participate and test their
                  foundational knowledge, offering a beginner-friendly
                  environment
                </li>
                <li>
                  Problems will be beginner to intermediate level, focusing on
                  logical thinking and basic programming concepts.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-yellow-400">
                Division 2:
              </h3>
              <ul className="list-inside list-disc">
                <li>Open to students from any year.</li>
                <li>
                  Provides an opportunity to compete alongside experienced
                  peers, fostering growth and collaboration.
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
            conducted offline, and participants are expected to submit their
            solutions within the given time-frame of 1.5 hours. Rankings will be
            based on the number of problems solved and the efficiency of the
            solutions.
          </p>
        </section>

        <section className="">
          <h2 className="mb-4 text-center font-mono text-3xl font-bold text-white sm:text-4xl">
            Rules
          </h2>
          <ul className="list-inside list-decimal sm:text-lg">
            <li>
              <span className="font-bold text-accent">Eligibility:</span> Open
              to students from MGMCOET, Noida.
            </li>
            <li>
              <span className="font-bold text-accent">
                Individual Participation:
              </span>{" "}
              The contest is strictly individual, team participation is not
              allowed.
            </li>
            <li>
              <span className="font-bold text-accent">No Plagiarism:</span>{" "}
              Sharing solutions or copying code will lead to immediate
              disqualification.
            </li>
            <li>
              <span className="font-bold text-accent">Allowed Resources:</span>{" "}
              Participants can refer to official documentation for programming
              languages and concepts but must avoid any external help or tools
              like AI for problem-solving.
            </li>
            <li>
              <span className="font-bold text-accent">Ranking Criteria: </span>{" "}
              Participants will be ranked based on the number of problems solved
              correctly. In case of a tie, the participant with the least total
              time taken to solve the problems will rank higher.
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
          <h2 className="mb-4 text-center font-mono text-3xl font-bold text-white sm:text-4xl">
            Prizes
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 sm:text-2xl">
                Division 1 (1st & 2nd-Year Students):
              </h3>
              <p className="text-lg">
                Top 3 winners will receive exciting goodies as rewards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 sm:text-2xl">
                Division 2 (Open to All):
              </h3>
              <p className="text-lg">
                Top 3 winners will receive exciting goodies along with an
                exclusive cash prize.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 sm:text-2xl">
                Special Rewards:
              </h3>
              <ul className="list-inside list-disc text-lg">
                <li>
                  Two random participants from each division will receive
                  customized T-shirts as a token of appreciation.
                </li>
                <li>
                  Every participating student will receive exclusive Code Clash
                  stickers.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 sm:text-2xl">
                Certificates:
              </h3>
              <p className="text-base">
                Every participant will be awarded a certificate of
                participation, and winners will receive a certificate of
                excellence.
              </p>
            </div>
          </div>
          <p className="mt-10 font-mono text-xl">
            Follow the rules, compete with integrity, and let your coding skills
            shine! Good luck! 🚀
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
