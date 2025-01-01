"use client";

import { useState } from "react";

const SubNav: React.FC<subNavInterface> = ({ contentList }) => {
  const [selectedSub, setSelectedSub] = useState("");

  return (
    <div className="text-base w-1/4">
      {contentList?.map((content, index) => (
        <div key={index} className="mb-4">
          <a className="font-bold" href={content.path}>
            {content.topic}
          </a>
          {content.content.map((subContent, subIndex) => (
            <a
              href={subContent.path}
              onClick={() => setSelectedSub(subContent.title)}
            >
              <div
                key={subIndex}
                className={`py-1 w-fit ${
                  selectedSub == subContent.title
                    ? `border-l-4 border-primaryred pl-3 text-primaryred font-bold`
                    : `pl-4 hover:text-primaryblue hover:font-bold`
                } `}
              >
                {subContent.title}
              </div>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SubNav;
