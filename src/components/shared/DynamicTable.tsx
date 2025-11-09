"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState, useMemo, ElementType } from "react";
import { Button } from "../ui/button";

interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
}

interface DynamicTableProps<T> {
  title: string;
  icon?: ElementType;
  iconColor?: string;
  columns: Column<T>[];
  data: T[];
  rowsPerPage?: number;
  getRowBadge?: (row: T) => {
    label: string;
    color?: string;
    variant?: "default" | "outline" | "secondary" | "destructive";
    icon?: ElementType;
  } | null;
}

export function DynamicTable<T>({
  title,
  icon: Icon,
  iconColor,
  columns,
  data,
  rowsPerPage = 5,
  getRowBadge,
}: DynamicTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  const [page, setPage] = useState(1);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    const sorted = [...data].sort((a, b) => {
      const valA = a[sortConfig.key!];
      const valB = b[sortConfig.key!];
      if (valA! < valB!) return sortConfig.direction === "asc" ? -1 : 1;
      if (valA! > valB!) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortConfig]);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const paginatedData = sortedData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleSort = (key: keyof T) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <Card className="w-full bg-[#0B111E] border-gray-800 hover:border-[#9767E4] transition-all duration-500 ease-out">
      <CardHeader>
        <CardTitle className="font-inter text-lg font-semibold leading-7 text-white flex items-center gap-2">
          {Icon && <Icon className={iconColor || "text-[#9767e4]"} />}

          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-gray-800 border-gray-800">
                {columns.map((col) => (
                  <TableHead
                    key={String(col.key)}
                    onClick={() => col.sortable && handleSort(col.key)}
                    className="text-ring select-none"
                  >
                    <div className="flex items-center gap-1">
                      {col.label}
                      {col.sortable &&
                        sortConfig.key === col.key &&
                        (sortConfig.direction === "asc" ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        ))}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedData.map((row, rowIndex) => {
                return (
                  <TableRow
                    key={rowIndex}
                    className="hover:bg-gray-800 border-gray-800"
                  >
                    {columns.map((col) => (
                      <TableCell
                        key={String(col.key)}
                        className="text-white align-middle"
                      >
                        {col.key === "status" && getRowBadge
                          ? (() => {
                              const badgeData = getRowBadge(row);
                              if (!badgeData) return String(row[col.key]);

                              const BadgeIcon = badgeData.icon;

                              return (
                                <Badge
                                  variant={badgeData.variant || "outline"}
                                  className={`${
                                    badgeData.color || "bg-[#9767e4]"
                                  } text-white flex items-center gap-1`}
                                >
                                  {BadgeIcon && <BadgeIcon size={14} />}
                                  {badgeData.label}
                                </Badge>
                              );
                            })()
                          : col.render
                          ? col.render(row)
                          : String(row[col.key])}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-ring">
            Page {page} of {totalPages}
          </p>
          <div className="flex gap-2 text-ring">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
            >
              Prev
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
