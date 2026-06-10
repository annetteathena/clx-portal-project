"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/lib/auth";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "▦" },
  { href: "/profile", label: "Profile", icon: "👤" },
];

export default function Sidebar({ partnerName }: { partnerName: string }) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/login");
  }

  return (
    <aside className="w-64 min-h-screen bg-[#1e2a4a] flex flex-col">
      {/* Brand */}
      <div className="px-6 py-6 border-b border-[#2d3d6b]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">
            CLX
          </div>
          <span className="text-white font-semibold text-lg">PartnerHub</span>
        </div>
        <p className="text-slate-400 text-xs mt-3 truncate">{partnerName}</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-[#2d3d6b] hover:text-white"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-4 py-6 border-t border-[#2d3d6b]">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-red-600 hover:text-white transition-colors"
        >
          <span className="text-base">⎋</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
