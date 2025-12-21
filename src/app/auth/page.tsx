"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const form = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="bg-white dark:bg-[#0d1321] w-full h-screen flex items-center justify-center px-2.5 md:px-0">
      <div className="bg-[#fcfcfc] dark:bg-[#0e1626] p-5 md:p-10 w-full md:w-2/3 lg:w-2/3 xl:w-1/3 space-y-5 md:space-y-10 border border-gray-100 dark:border-gray-800 rounded-2xl font-inter shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="capitalize text-2xl md:text-3xl font-inter leading-9 font-bold tracking-[-0.75px] text-black dark:text-white">
            dashboard <span className="text-site-gradient">login</span>
          </h1>
          <p className="text-muted-foreground font-inter text-xs md:text-base leading-6 tracking-normal">
            Enter your credentials to continue
          </p>
        </div>

        <div>
          <Form {...form}>
            <form className="space-y-6">
              {/* Fields */}
              <div className="flex flex-col gap-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black dark:text-white capitalize text-sm md:text-base leading-5 font-medium tracking-normal">
                        email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          placeholder="admin@example.com"
                          className="border-gray-300 dark:border-gray-800 dark:bg-[#0e1424]! md:py-6"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black dark:text-white capitalize text-sm md:text-base leading-5 font-medium tracking-normal">
                        password
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          placeholder="••••••••"
                          type="password"
                          className="border-gray-300 dark:border-gray-800 dark:bg-[#0e1424]! md:py-6"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col items-center gap-3">
                <Button
                  type="submit"
                  className="w-full btn-gradient capitalize text-white md:py-6 text-sm md:text-base cursor-pointer"
                >
                  sign in
                </Button>
                <Button
                  type="submit"
                  className="w-fit capitalize text-black dark:text-white md:py-6 text-sm md:text-base cursor-pointer bg-transparent hover:text-white hover:bg-[#47cfeb]"
                >
                  back to home
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
