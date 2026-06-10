"use client";

import { useState } from "react";
import { Lead, LeadStatus } from "@/lib/mockData";
import StatusBadge from "./StatusBadge";

const tabs: Array<"All" | LeadStatus> = ["All", "Pending", "In Progress", "Closed Won", "Closed Lost"];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function LeadsTable({ leads }: { leads: Lead[] }) {
  const [activeTab, setActiveTab] = useState<"All" | LeadStatus>("All");

  const filtered = activeTab === "All" ? leads : leads.filter((l) => l.status === activeTab);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      {/* Tabs */}
      <div className="px-6 pt-5 pb-0 border-b border-slate-200">
        <div className="flex gap-1 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-indigo-600 text-indigo-600 bg-indigo-50"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              }`}
            >
              {tab}
              <span className="ml-1.5 text-xs bg-slate-100 text-slate-600 rounded-full px-1.5 py-0.5">
                {tab === "All" ? leads.length : leads.filter((l) => l.status === tab).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              {["Lead Name", "Company", "Date Submitted", "Status", "Deal Value", "Commission", "Notes"].map((h) => (
                <th key={h} className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-10 text-center text-slate-400">
                  No leads match this filter.
                </td>
              </tr>
            ) : (
              filtered.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-800">{lead.leadName}</td>
                  <td className="px-6 py-4 text-slate-600">{lead.companyName}</td>
                  <td className="px-6 py-4 text-slate-500">{formatDate(lead.submittedDate)}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={lead.status} />
                  </td>
                  <td className="px-6 py-4 text-slate-700 font-medium">{formatCurrency(lead.dealValue)}</td>
                  <td className="px-6 py-4">
                    {lead.commission > 0 ? (
                      <span className="text-green-600 font-semibold">{formatCurrency(lead.commission)}</span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-slate-500 max-w-xs truncate" title={lead.notes}>
                    {lead.notes}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
