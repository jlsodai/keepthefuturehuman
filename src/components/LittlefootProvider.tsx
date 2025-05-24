"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "littlefoot/dist/littlefoot.css";

export default function LittlefootProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let instance: any;
    import("littlefoot").then((mod) => {
      instance = mod.default({
        activateOnHover: true,
        dismissOnUnhover: true,
        buttonTemplate: `
          <button
              aria-label="Footnote <% number %>"
              class="littlefoot__button"
              id="<% reference %>"
              title="See Footnote <% number %>"
          />
              <% number %>
          </button>
        `
      });
    });

    return () => {
      if (instance && typeof instance.unmount === "function") {
        instance.unmount();
      }
    };
  }, [pathname]);

  return <>{children}</>;
} 