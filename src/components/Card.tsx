import React from "react";

type CardProps = {
    text: string;
    urgent?: boolean;
}

export const Card = ({text}: CardProps) => {
    return <div className="card-container bg-slate-100 m-1 p-1">{text}</div>
}