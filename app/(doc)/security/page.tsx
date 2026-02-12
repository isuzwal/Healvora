"use client";
import { NavBara } from "@/components/ui/navbar-view";
import DataSecurity from "../../../markdown/data-security.mdx";

export default function Page() {
  return (
    <div className="flex max-w-7xl w-full mx-auto flex-col min-h-screen ">
      <NavBara />
      <div className="w-full  max-w-3xl mx-auto py-8">
        <article
          className="prose prose-indigo 
        prose-a:underline prose-h1:underline prose-h1:font-medium prose-h1:tracking-tighter prose-h1:font-sans
        max-w-none p-2 prose-strong:text-green-600"
        >
          <DataSecurity />
        </article>
      </div>
    </div>
  );
}
