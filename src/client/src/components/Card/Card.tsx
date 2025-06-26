import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  title: string
}

const Card = ({ children, title }: CardProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center p-4">
      <h2 className="text-5xl font-bold text-center my-4">{title}</h2>
      <div className="flex h-50 w-80 flex-col gap-4 border border-gray-200 bg-white p-4 rounded-md shadow-sm">
        {children}
      </div>
    </div>
  );
}

export default Card;