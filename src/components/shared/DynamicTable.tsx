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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  onRowsPerPageChange: (limit: number) => void;
  onPageChange: (page: number) => void;
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
  currentPage,
  totalPages,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  getRowBadge,
}: DynamicTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const valA = a[sortConfig.key!];
      const valB = b[sortConfig.key!];
      if (valA! < valB!) return sortConfig.direction === "asc" ? -1 : 1;
      if (valA! > valB!) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key: keyof T) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border-gray-300 dark:border-gray-800 hover:border-[#9767E4] transition-all duration-500 ease-out">
      <CardHeader>
        <CardTitle className="font-inter text-lg font-semibold leading-7 text-black dark:text-white flex items-center gap-2">
          {Icon && <Icon className={iconColor || "text-[#9767e4]"} />}

          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-gray-300 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-800">
                {columns.map((col) => (
                  <TableHead
                    key={String(col.key)}
                    onClick={() => col.sortable && handleSort(col.key)}
                    className="text-foreground select-none"
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
              {sortedData.map((row, rowIndex) => {
                return (
                  <TableRow
                    key={rowIndex}
                    className="hover:bg-gray-300 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-800"
                  >
                    {columns.map((col) => (
                      <TableCell
                        key={String(col.key)}
                        className="text-muted-foreground align-middle"
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

        <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              Rows per page
            </span>

            <Select
              value={String(rowsPerPage)}
              onValueChange={(value) => onRowsPerPageChange(Number(value))}
            >
              <SelectTrigger className="h-8 w-18">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[5, 10, 15].map((pageSize) => (
                  <SelectItem key={pageSize} value={String(pageSize)}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Page <span className="font-medium">{currentPage}</span> of{" "}
            <span className="font-medium">{totalPages}</span>
          </p>

          <div className="flex items-center justify-end gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
              className="cursor-pointer"
            >
              Prev
            </Button>

            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
              className="cursor-pointer"
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
