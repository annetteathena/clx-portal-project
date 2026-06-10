"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getLoggedInPartner } from "@/lib/auth";
import { Partner, computeStats } from "@/lib/mockData";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import LeadsTable from "@/components/LeadsTable";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function DashboardPage() {
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

  const stats = computeStats(partner);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar partnerName={partner.name} />

      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">
            Welcome back, {partner.name}
          </h1>
          <p className="text-slate-500 mt-1 text-sm">
            Here&apos;s an overview of your referral activity.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          <StatCard
            title="Total Leads"
            value={stats.totalLeads}
            icon="📋"
            accent="border-indigo-500"
          />
          <StatCard
            title="Closed Won"
            value={stats.closedWonCount}
            icon="✅"
            accent="border-green-500"
          />
          <StatCard
            title="Total Revenue"
            value={formatCurrency(stats.totalRevenue)}
            icon="💰"
            accent="border-blue-500"
          />
          <StatCard
            title="Commission Earned"
            value={formatCurrency(stats.totalCommission)}
            icon="🏆"
            accent="border-amber-500"
          />
        </div>

        {/* Leads Section */}
        <div>
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Your Leads</h2>
          <LeadsTable leads={partner.leads} />
        </div>
      </main>
    </div>
  );
}
