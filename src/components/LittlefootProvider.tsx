"use client";
import { useEffect } from "react";
import littlefoot from "littlefoot";
import "littlefoot/dist/littlefoot.css";

export default function LittlefootProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    littlefoot({
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
  }, []);

  return <>{children}</>;
} 