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

import { useForm } from "react-hook-form";

const AddSkillModal = () => {
  const form = useForm();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-gradient flex items-center gap-2 px-4 py-2 text-sm font-medium">
          <Plus size={16} />
          Add Skill
        </Button>
      </DialogTrigger>

      <DialogContent
        className="
          text-white border-gray-800
          
          p-4 sm:p-6
           overflow-y-auto
          space-y-6
        "
      >
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skill Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Skill Name"
                        className="border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Photo</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="file"
                        className="border-gray-800 file:text-white file:mr-2"
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
