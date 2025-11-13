"use client";

import { useState } from "react";
import AuthorizedNavbar from "@/app/components/AuthorizedNavbar";
import AuthorizedSidebar from "@/app/components/AuthorizedSidebar";
import UnauthorizedRedirect from "@/app/components/UnauthorizedRedirect";

export default function AdminShell({ children, adminExp }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthorizedNavbar
        role="admin"
        hasSidebar={true}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={setSidebarOpen}
      />

      <UnauthorizedRedirect exp={adminExp} immediate={false}/>

      {sidebarOpen && <AuthorizedSidebar role="admin"/>}

      <main
        className={`
        ${sidebarOpen ? "md:ml-56" : "md:ml-0"}
        h-[calc(100vh-4rem)]
        overflow-hidden
      `}
      >
        {children}
      </main>

    </div>
  );
}
