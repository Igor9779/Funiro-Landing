import React from 'react';
import { Achievements as achievementsData } from './json/achievements';

const Achievements = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-16 py-[88px]">
      {achievementsData.map((achievement, index) => (
        <div key={index} className="flex items-center p-4 bg-white ">
          <img
            src={achievement.icon}
            alt={achievement.title}
            className="w-12 h-12 mr-4"
          />
          <div>
            <h3 className="text-[18px] font-gilroy ">{achievement.title}</h3>
            <p className="text-[#898989]">{achievement.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Achievements;
