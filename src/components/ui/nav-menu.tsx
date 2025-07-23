import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { motion } from "framer-motion";

export interface NavMenuProps {
  items: {
    href: string;
    title: string;
  }[];
  activeSection: string;
}

export function NavMenu({ items, activeSection }: NavMenuProps) {
  return (
    <nav className="hidden md:flex items-center space-x-4">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary relative px-3 py-2",
            item.href.slice(1) === activeSection
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {item.href.slice(1) === activeSection && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 bg-muted rounded-md z-[-1]"
              style={{ borderRadius: 12 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {item.title}
        </a>
      ))}
    </nav>
  );
}

export function MobileNav({ items, activeSection }: NavMenuProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("h-6 w-6 text-foreground", open && "hidden")}
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("h-6 w-6 text-foreground", !open && "hidden")}
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </Button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white glass-card rounded-b-lg py-3 border-t z-50">
          <div className="flex flex-col space-y-3 px-8 py-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary py-2",
                  item.href.slice(1) === activeSection
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}