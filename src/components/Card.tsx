import React from "react";

type CardProps = {
    text: string;
    urgent?: boolean;
}

export const Card = ({text}: CardProps) => {
    return <div className="shadow card-container bg-slate-100 mx-2 my-4 p-3 min-h-[90px] rounded-md">{text}</div>
}