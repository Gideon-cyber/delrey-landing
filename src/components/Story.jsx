import React from "react";
import Owner1 from "../public/owner1.jpeg";
import Owner2 from "../public/owner2.jpeg";

const Story = () => {
  return (
    <div className="flex items-center flex-col justify-center py-[16px] px-[16px] md:py-[20px] md:px-[60px] min-h-screen h-auto w-full max-w-7xl mx-auto">
      <div className="flex items-center flex-col lg:flex-row py-[2rem] lg:py-[4rem] gap-[40px] lg:gap-[126px]">
        <div className="flex items-start flex-col gap-[36px] flex-1">
          <div className="w-full flex items-center justify-center lg:justify-start">
            <h1 className="text-[36px] lg:text-[58px] lg:leading-[65px] font-bold tracking-[0.2px] w-[80%] lg:w-auto text-center lg:text-left">
              <span className="text-bluePrim">Delrey</span> Story
            </h1>
          </div>
          <div className="flex items-start gap-[29px] flex-col">
            <p className="text-[16px] leading-[24px] text-blueTert lg:tracking-[0.7px]">
              #SunnySunday with my long dog story As you can see from my profile
              pic, I really love my dog. I read somewhere that having a dog is
              12 years of absolute joy, two years of vet bills, then tragedy.
              It’s still worth it. Let me help you through this
            </p>

            <p className="text-[16px] leading-[24px] text-blueTert lg:tracking-[0.7px]">
              21 years ago, I was given a dachshund-terrier mix, GM. He went
              with me everywhere. Friends said I would never survive if anything
              happened to him. He brought me much happiness through really hard
              times.
            </p>
            <p className="text-[16px] leading-[24px] text-blueTert lg:tracking-[0.7px]">
              My late sister, from Canmore, Canada, saw GM getting older and
              more feeble when I visited her. She said to me, humans live longer
              than dogs and I have to accept that. Enjoy the poem that she
              wrote. She also drew the pastel artwork.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1">
          <img src={Owner1} alt="owner" className="w-[70%]" />
        </div>
      </div>

      <div className="flex items-center flex-col lg:flex-row-reverse py-[2rem] lg:py-[4rem] gap-[40px] lg:gap-[126px]">
        <div className="flex items-center justify-center flex-col gap-[36px] flex-1">
          <div className="flex items-start gap-[29px] flex-col">
            <p className="text-[16px] leading-[24px] text-blueTert lg:tracking-[0.7px]">
              When GM was nearly 15 years old, couldn’t take stairs and was
              incontinent, I chose a lively maltese-terrier rescue to perk him
              up. (Actually, DelRey chose me. BTW, it is a long process to
              purchase a rescue.)
            </p>

            <p className="text-[16px] leading-[24px] text-blueTert lg:tracking-[0.7px]">
              GM did have more energy but couldn’t walk well. I would take them
              for a ride in a stroller. Then GM had a stroke and had to be put
              down. My daughter @toscamusk went with me to the vet. She stayed
              with him while I howled in the waiting room
            </p>
            <p className="text-[16px] leading-[24px] text-blueTert lg:tracking-[0.7px]">
              I returned home, devastated. My new puppy was excited to see me
              and actually go for a walk. He was loving and cuddly. This was the
              best way to heal. My advice: get a new dog before your aging dog
              passes away.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start flex-1">
          <img src={Owner2} alt="owner" className="w-[70%]" />
        </div>
      </div>
    </div>
  );
};

export default Story;
