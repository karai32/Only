import React, { useState } from "react";
import TimeCircle from "../TimeCircle/TimeCircle";
import Title from "../Title/Title";
import TimeSlider from "../TimeSlider/TimeSlider";
import { segments } from "../../data/data";
import CircleNavigation from "../CircleNavigation/CircleNavigation";
import { Wrapper } from "./TimelineBlock.styled";
import AnimatedYears from "../AnimatedYears/AnimatedYears";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const TimelineBlock: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Wrapper>
      <Title title={"Исторические\nдаты"} />
      <TimeCircle
        segments={segments}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
      <AnimatedYears
        startYear={+segments[activeIndex].date_1}
        endYear={+segments[activeIndex].date_2}
      />
      {!isMobile && (
        <CircleNavigation
          segments={segments}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />
      )}
      <TimeSlider activeIndex={activeIndex} segments={segments} />
      {isMobile && (
        <MobileNavigation
          segments={segments}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />
      )}
    </Wrapper>
  );
};

export default TimelineBlock;
