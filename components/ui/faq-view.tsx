import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const FAQSection = () => {
  return (
    <div className=" py-10 sm:py-20  mt-8 sm:mt-16  w-full">
      <div className="flex flex-col gap-1  w-full justify-center items-center ">
        <h1 className="text-neutral-700 font-bold font-sans  sm:text-xl text-[16px]">
          FAQs
        </h1>
        <p className="text-2xl sm:text-4xl text-neutral-800 font-sans font-semibold text-center">
          Your questions, answered here ?
        </p>
      </div>
      <div className="px-2 sm:px-4  py-6 max-w-4xl mx-auto w-full ">
        <div className="px-1 sm:px-2 bg-white border-neutral-200 border rounded-md shadow-xs mt-2 ">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full p-2 border-neutral-600 "
          >
            <AccordionItem
              value="item-1 "
              className="  border-b-[1.5px] border-neutral-300 "
            >
              <AccordionTrigger className=" cursor-pointer text-[16px] font-sans font-medium text-neutral-800  ">
                What is Healvora AI?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  Healvora is an AI-powered hospital management system designed
                  to provide 24/7 healthcare assistance. It combines artificial
                  intelligence with real human interaction to help users analyze
                  health concerns, book appointments, and receive reliable
                  medical guidance in real time.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="  border-b-[1.5px] border-neutral-300 "
            >
              <AccordionTrigger className="text-[16px]  cursor-pointer font-sans font-medium  text-neutral-800">
                How does Healvora provide 24/7 support?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  Healvora offers round-the-clock AI chat support that instantly
                  responds to user queries. When needed, users can also connect
                  with healthcare professionals through live chat or video call
                  for more personalized assistance.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="  border-b-[1.5px] border-neutral-300 "
            >
              <AccordionTrigger className="text-[16px]  text-neutral-800  cursor-pointer font-sans font-medium ">
                Can Healvora help me find the right doctor?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  Yes. Healvora uses AI to analyze user symptoms and medical
                  needs, then recommends the most suitable doctor or specialist
                  based on expertise, availability, and urgency.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="  border-b-[1.5px] border-neutral-300 "
            >
              <AccordionTrigger className="text-[16px]   text-neutral-800  cursor-pointer  font-sans font-medium ">
                How does appointment booking work?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  Users can book appointments directly through the platform. The
                  AI assists in selecting the right department, doctor, and time
                  slot, making the booking process fast, simple, and efficient.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="  border-b-[1.5px] border-neutral-300 "
            >
              <AccordionTrigger className="text-[16px]   text-neutral-800   cursor-pointer  font-sans font-medium ">
                Does Healvora replace real doctors?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  No. Healvora is designed to assist—not replace—doctors. The AI
                  helps analyze symptoms, suggest preventive care, and
                  streamline hospital workflows, while final diagnosis and
                  treatment are always handled by qualified medical
                  professionals.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="  border-b-[1.5px] border-neutral-300 "
            >
              <AccordionTrigger className="text-[16px]   text-neutral-800  cursor-pointer  font-sans font-medium ">
                Is my medical data safe on Healvora?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  Yes. Healvora prioritizes user privacy and data security. All
                  medical information is handled securely, and access is limited
                  to authorized personnel only, following standard healthcare
                  data protection practices.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-7"
              className="  border-b-[1.5px] border-neutral-300 "
            >
              <AccordionTrigger className="text-[16px]   text-neutral-800  cursor-pointer  font-sans font-medium ">
                Can Healvora suggest preventive care and health tips?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-neutral-500 font-sans font-medium text-[14px]">
                  Yes. Based on user inputs and health patterns, Healvora
                  provides preventive healthcare suggestions, lifestyle tips,
                  and early warnings to help users maintain better long-term
                  health.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
