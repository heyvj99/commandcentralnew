import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IncidentCardProps {
  timestamp: string;
  ticketId: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  description: string;
  severity: "High" | "Medium" | "Low";
  status: string;
  statusColor?: string;
  needsHelp?: boolean;
  onClick?: () => void;
  className?: string;
}

export function IncidentCard({
  timestamp,
  ticketId,
  address,
  city,
  state,
  zipCode,
  description,
  severity,
  status,
  statusColor = "#6366F1",
  needsHelp = false,
  onClick,
  className,
}: IncidentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "relative flex flex-col bg-background rounded-xl border cursor-pointer hover:shadow-lg hover:border-gray-300 transition-all duration-200 group",
        className
      )}
      onClick={onClick}
      style={{
        borderLeft: `5px solid ${statusColor}`,
      }}
    >
      {/* Header Section */}
      <div className="px-6 pt-5 pb-3">
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {timestamp}
            </span>
            <span className="text-sm font-semibold text-gray-700">
              #{ticketId}
            </span>
          </div>
          <div className={cn(
            "px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide",
            severity === "High" ? "bg-red-50 text-red-700 border border-red-200" :
            severity === "Medium" ? "bg-yellow-50 text-yellow-700 border border-yellow-200" :
            "bg-green-50 text-green-700 border border-green-200"
          )}>
            {severity}
          </div>
        </div>

        {/* Location Section */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {address}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{city}, {state} {zipCode}</span>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="px-6 pb-4">
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer Section */}
      <div className="px-6 pb-5 pt-2 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: statusColor }}
              ></div>
              <span className="text-sm font-medium text-gray-700">{status}</span>
            </div>
          </div>
          {needsHelp && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-lg border border-red-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-xs font-medium text-red-700">Help Required</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
} 