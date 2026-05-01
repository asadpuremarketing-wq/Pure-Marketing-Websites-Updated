import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("max-w-[1200px] mx-auto px-6 py-12 md:py-20", className)} {...props}>
      {children}
    </div>
  );
}
