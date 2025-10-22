"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Send } from "lucide-react";

const GetInTouchForm = () => {
  const form = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="h-full flex flex-col bg-[#11192c] p-8 rounded-xl border border-gray-700 space-y-8"
        >
          <h1 className="text-2xl leading-8 font-bold">Send a Message</h1>

          <div className="flex flex-col gap-5 justify-center">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      {...field}
                      className="py-5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...field}
                      className="py-5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={12}
                      placeholder="Your Message"
                      {...field}
                      className="min-h-36 py-5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#9767e4] to-[#47cfeb] cursor-pointer w-full mt-3"
            >
              <Send />
              Send Message
            </Button>
          </div>

          <div className="w-full h-full"></div>
        </form>
      </Form>
    </div>
  );
};

export default GetInTouchForm;
