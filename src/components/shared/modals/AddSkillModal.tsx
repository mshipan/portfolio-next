"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import Image from "next/image";

import { useForm } from "react-hook-form";

const AddSkillModal = () => {
  const form = useForm();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-gradient flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer">
          <Plus size={16} />
          Add Skill
        </Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:cursor-pointer [&>button]:text-foreground [&>button]:hover:text-primary [&>button]:transition-colors text-black dark:text-white border-gray-300 dark:border-gray-800 p-4 sm:p-6 overflow-y-auto space-y-6">
        <DialogHeader className="pb-0">
          <DialogTitle className="text-base sm:text-lg font-semibold">
            Add New Skill
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-6">
            {/* Fields */}
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white">
                      Skill Logo/Icon
                    </FormLabel>
                    <div className="flex items-center gap-3">
                      {/* Preview box */}
                      <div className="w-20 h-16 bg-[#f7f1f1] dark:bg-white rounded flex items-center justify-center overflow-hidden relative">
                        {field.value ? (
                          <Image
                            src={URL.createObjectURL(field.value)}
                            alt="Preview"
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-gray-500 text-sm">+</span>
                        )}
                      </div>

                      {/* File input */}
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => field.onChange(e.target.files?.[0])}
                          className="border-gray-300 dark:border-gray-800 file:text-black dark:file:text-white file:mr-2"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white">
                      Skill Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Skill Name"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button type="submit" className="w-full btn-gradient">
                Add Skill
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSkillModal;
