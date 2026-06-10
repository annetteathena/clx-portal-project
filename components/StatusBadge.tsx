import { LeadStatus } from "@/lib/mockData";

const statusStyles: Record<LeadStatus, string> = {
  Pending: "bg-blue-100 text-blue-700 border border-blue-200",
  "In Progress": "bg-yellow-100 text-yellow-700 border border-yellow-200",
  "Closed Won": "bg-green-100 text-green-700 border border-green-200",
  "Closed Lost": "bg-red-100 text-red-700 border border-red-200",
};

export default function StatusBadge({ status }: { status: LeadStatus }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
