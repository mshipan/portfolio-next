"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  CircleCheckBig,
  Clock3,
  Eye,
  Mail,
  MailOpen,
  RefreshCcw,
  Trash2,
} from "lucide-react";
import { useState } from "react";

interface IMessage {
  name: string;
  email?: string;
  date: string;
  subject: string;
  message: string;
}

const messages = [
  {
    name: "Khokon",
    email: "khokon@gmail.com",
    date: "Mar 06,2026",
    subject: "bla bla bla",
    message:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
  },
  {
    name: "Bibek",
    email: "bibek@gmail.com",
    date: "Mar 08,2026",
    subject: "bla bla bla",
    message:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
  },
];

const TROW = ({
  name,
  date,
  subject,
  message,
  onClick,
}: IMessage & { onClick: () => void }) => {
  return (
    <TableRow
      onClick={onClick}
      className="group bg-[#222f44]/20 hover:bg-muted/80! cursor-pointer"
    >
      <TableCell className="py-5!">
        <Avatar className="h-8 w-12 ps-4">
          <AvatarFallback className="bg-[#222f44] text-white text-sm font-semibold">
            {name?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell className="py-5!">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-end gap-1">
              <h1 className="text-white text-base font-bold">{name}</h1>
              <span className="text-ring">{date}</span>
            </div>
            <h6 className="text-gray-400 font-bold">{subject}</h6>
            <p className="text-ring text-sm">{message}</p>
          </div>

          <div className="opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex gap-0.5">
            <Button
              variant="ghost"
              className="hover:bg-[#47cfeb]! hover:text-black cursor-pointer"
            >
              <CircleCheckBig />
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-[#47cfeb]! hover:text-black cursor-pointer"
            >
              <Eye />
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-[#47cfeb]! cursor-pointer"
            >
              <Trash2 className="text-red-500" />
            </Button>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
};

const MessagesPage = () => {
  const [selectedMessage, setSelectedMessage] = useState<IMessage | null>(null);
  return (
    <div>
      {!selectedMessage ? (
        <div className="space-y-8">
          <DashboardHeader
            title="Manage Messages"
            subTitle="Manage messages from the contact form"
          />

          <Tabs defaultValue="all" className="w-full">
            <div className="flex items-center justify-between mb-5">
              <TabsList>
                <TabsTrigger
                  value="all"
                  className="group  data-[state=active]:bg-[#9767e4]!"
                >
                  All
                  <div className="border border-white group-data-[state=active]:border-black! h-4 w-5 rounded-full flex items-center justify-center">
                    0
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  className="group  data-[state=active]:bg-[#9767e4]!"
                >
                  Unread
                  <div className="border border-white group-data-[state=active]:border-black! h-4 w-5 rounded-full flex items-center justify-center">
                    0
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="read"
                  className="group  data-[state=active]:bg-[#9767e4]!"
                >
                  Read
                  <div className="border border-white group-data-[state=active]:border-black! h-4 w-5 rounded-full flex items-center justify-center">
                    0
                  </div>
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-2">
                <Button variant="outline" className="px-4! py-0.5!">
                  <CircleCheckBig /> Mark all read
                </Button>
                <Button variant="outline" className="px-4! py-0.5!">
                  <RefreshCcw /> Refresh
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <div className="rounded-xl overflow-hidden border">
                <Table>
                  <TableBody>
                    {messages?.map((m, i) => (
                      <TROW
                        key={i}
                        name={m.name}
                        date={m.date}
                        subject={m.subject}
                        message={m.message}
                        onClick={() => setSelectedMessage(m)}
                      />
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="unread">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>
                    Track performance and user engagement metrics. Monitor
                    trends and identify growth opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Page views are up 25% compared to last month.
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="read">
              <Card>
                <CardHeader>
                  <CardTitle>Reports</CardTitle>
                  <CardDescription>
                    Generate and download your detailed reports. Export data in
                    multiple formats for analysis.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  You have 5 reports ready and available to export.
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="flex items-center gap-1">
            <Button
              onClick={() => setSelectedMessage(null)}
              variant="ghost"
              className="cursor-pointer hover:bg-[#47cfeb]! text-black hover:text-white dark:text-white dark:hover:text-black"
            >
              <ArrowLeft /> Back
            </Button>
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <h1 className="text-lg text-black dark:text-white font-bold">
              Message Details
            </h1>
          </div>

          <div className="rounded-xl overflow-hidden border p-6 bg-[#222f44]/20 space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-[#222f44] text-white text-sm font-semibold">
                    {selectedMessage.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-base font-bold text-white">
                    {selectedMessage.name}
                  </h1>
                  <p className="text-base text-ring">{selectedMessage.email}</p>
                </div>
              </div>
              <Badge className="text-black bg-[#47cfeb]">
                <MailOpen /> Read
              </Badge>
            </div>

            <div>
              <h1 className="text-lg text-white font-bold">
                {selectedMessage.subject}
              </h1>
              <div className="text-sm inline-flex items-center gap-1 text-ring">
                <Clock3 size="12" /> {selectedMessage.date}
              </div>
            </div>

            <Separator
              orientation="horizontal"
              className="mr-2 data-[orientation=vertical]:h-4"
            />

            <div className="p-4 bg-[#222f44]/40 rounded-xl">
              <p>{selectedMessage.message}</p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                className="flex-1 bg-[#0d1321] border hover:bg-[#47cfeb]! text-white hover:text-black cursor-pointer"
                onClick={() => {
                  window.location.href = "mailto:test@example.com";
                }}
              >
                <Mail /> Reply via Email
              </Button>
              <Button className="bg-[#0d1321] border hover:bg-red-500/10! cursor-pointer">
                <Trash2 className="text-red-500" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
