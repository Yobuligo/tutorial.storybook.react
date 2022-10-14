import { useState } from "react";
import { OverviewLesson } from "../lessons/00 Overview";
import { Detail } from "./Detail";
import { Master } from "./Master";
import "./MasterDetail.css";

export const MasterDetail = () => {
  const [lesson, setLesson] = useState(new OverviewLesson());

  return (
    <div className="master-detail">
      <Master
        onLessonSelected={(lesson) => {
          setLesson(lesson);
        }}
      />
      <Detail lesson={lesson} />
    </div>
  );
};
