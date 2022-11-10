import React from "react";

type CardProps = {
    text: string;
    urgent?: boolean;
}

export const Card = ({text}: CardProps) => {
    return <div className="border border-gray-700 card-container bg-slate-100 mx-2 my-2 p-3 min-h-[90px] min-w-[270px] rounded-md">{text}</div>
}