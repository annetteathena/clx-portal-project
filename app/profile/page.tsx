"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getLoggedInPartner } from "@/lib/auth";
import { Partner } from "@/lib/mockData";
import Sidebar from "@/components/Sidebar";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ProfilePage() {
  const router = useRouter();
  const [partner, setPartner] = useState<Partner | null>(null);

  useEffect(() => {
    const p = getLoggedInPartner();
    if (!p) {
      router.replace("/login");
    } else {
      setPartner(p);
    }
  }, [router]);

  if (!partner) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-slate-400 text-sm">Loading...</div>
      </div>
    );
  }

  const tierColors: Record<string, string> = {
    Gold: "bg-amber-100 text-amber-700 border border-amber-200",
    Silver: "bg-slate-100 text-slate-600 border border-slate-300",
    Platinum: "bg-indigo-100 text-indigo-700 border border-indigo-200",
  };
  const tierClass = tierColors[partner.tier] ?? "bg-slate-100 text-slate-600";

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar partnerName={partner.name} />

      <main className="flex-1 p-8 overflow-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Partner Profile</h1>
          <p className="text-slate-500 mt-1 text-sm">Your account information and partner details.</p>
        </div>

        <div className="max-w-2xl space-y-6">
          {/* Avatar + Name card */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              {partner.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">{partner.name}</h2>
              <p className="text-slate-500 text-sm">{partner.email}</p>
              <span className={`inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-semibold ${tierClass}`}>
                {partner.tier} Partner
              </span>
            </div>
          </div>

          {/* Details card */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4">
              Contact Information
            </h3>
            <dl className="space-y-4">
              <div className="flex items-start gap-3">
                <dt className="w-36 flex-shrink-0 text-sm text-slate-500">Email</dt>
                <dd className="text-sm text-slate-800 font-medium">{partner.email}</dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="w-36 flex-shrink-0 text-sm text-slate-500">Phone</dt>
                <dd className="text-sm text-slate-800 font-medium">{partner.phone}</dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="w-36 flex-shrink-0 text-sm text-slate-500">Address</dt>
                <dd className="text-sm text-slate-800 font-medium">{partner.address}</dd>
              </div>
            </dl>
          </div>

          {/* Partner details card */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4">
              Partnership Details
            </h3>
            <dl className="space-y-4">
              <div className="flex items-start gap-3">
                <dt className="w-36 flex-shrink-0 text-sm text-slate-500">Partner Since</dt>
                <dd className="text-sm text-slate-800 font-medium">{formatDate(partner.partnerSince)}</dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="w-36 flex-shrink-0 text-sm text-slate-500">Partner Tier</dt>
                <dd>
                  <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold ${tierClass}`}>
                    {partner.tier}
                  </span>
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="w-36 flex-shrink-0 text-sm text-slate-500">Partner ID</dt>
                <dd className="text-sm text-slate-800 font-mono">{partner.id}</dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="w-36 flex-shrink-0 text-sm text-slate-500">Commission Rate</dt>
                <dd className="text-sm text-slate-800 font-medium text-green-600">10% on Closed Won deals</dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </div>
  );
}
