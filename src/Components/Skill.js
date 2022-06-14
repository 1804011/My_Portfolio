import React from "react";

const Skill = ({ title, val, color }) => {
  return (
    <div className="my-[16px]">
      <h4 className="text-xl font-bold my-1 mb-2 capitalize">{title}</h4>
      <div
        className="bg-[rgba(0,0,0,0.1)]  h-4"
        style={{ borderRadius: "8px" }}
      >
        <div
          className={`h-[100%] flex justify-end`}
          style={{
            borderRadius: "8px",
            paddingRight: "10px",
            width: `${val}%`,
            backgroundColor: `${color}`,
          }}
        >
          <p className="text-white text-xs">{val}%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
