import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function SectionLabel({ className, children, ...props }: SectionLabelProps) {
  return (
    <span className={cn("section-label", className)} {...props}>
      {children}
    </span>
  );
}
