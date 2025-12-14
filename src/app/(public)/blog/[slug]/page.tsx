import BlogCard from "@/components/modules/cards/blog/BlogCard";
import BackLink from "@/components/shared/BackLink";
import { Blog } from "@/types";
import {
  Calendar,
  Clock10,
  Facebook,
  Link2,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const SingleBlogPage = () => {
  const blogs: Blog[] = [
    {
      id: "1",
      authorId: "shipan-mallik",
      title: "Building Scalable React Applications",
      slug: "building-scalable-react-applications",
      summary:
        "Best practices for structuring large React apps with proper state and code organization.",
      content:
        "In this guide, we cover project structure, state management choices, component design principles, performance tips, and code splitting with lazy loading…",
      published: true,
      coverUrl: "/images/blog1.jpeg",
      createdAt: new Date("2024-12-15"),
      updatedAt: new Date("2024-12-15"),
    },
    {
      id: "2",
      authorId: "moin-uddin",
      title: "Understanding React’s Virtual DOM",
      slug: "understanding-react-virtual-dom",
      summary:
        "How the Virtual DOM diffing and reconciliation model keeps UIs fast and predictable.",
      content:
        "React represents UI as a tree of elements. When state changes, it diffs trees and batches updates to the real DOM efficiently…",
      published: true,
      coverUrl: "/images/blog1.jpeg",
      createdAt: new Date("2025-01-05"),
      updatedAt: new Date("2025-01-05"),
    },
    {
      id: "3",
      authorId: "sadia-rahman",
      title: "Mastering TypeScript for Modern Web Apps",
      slug: "mastering-typescript-modern-web-apps",
      summary:
        "Why TypeScript scales teams and how to integrate it into existing JS projects.",
      content:
        "Adopt incremental typing, define strict tsconfig, leverage generics and utility types, and model domain data with discriminated unions…",
      published: true,
      coverUrl: "/images/blog1.jpeg",
      createdAt: new Date("2025-02-10"),
      updatedAt: new Date("2025-02-10"),
    },
    {
      id: "4",
      authorId: "hasibul-hasan",
      title: "Optimizing React Performance Like a Pro",
      slug: "optimizing-react-performance-like-a-pro",
      summary:
        "Memoization, selective re-renders, concurrent features, and production profiling.",
      content:
        "Use React.memo/useMemo/useCallback thoughtfully, split components by data ownership, profile with React DevTools, and enable production builds…",
      published: true,
      coverUrl: "/images/blog1.jpeg",
      createdAt: new Date("2025-03-22"),
      updatedAt: new Date("2025-03-22"),
    },
    {
      id: "5",
      authorId: "sajid-ahmed",
      title: "State Management Showdown: Redux vs Zustand",
      slug: "redux-vs-zustand-showdown",
      summary:
        "Trade-offs, ecosystem, ergonomics, and when to pick each for real projects.",
      content:
        "Redux offers powerful devtools and middleware for complex apps; Zustand shines for small to medium stores with minimal boilerplate…",
      published: true,
      coverUrl: "/images/blog1.jpeg",
      createdAt: new Date("2025-04-11"),
      updatedAt: new Date("2025-04-11"),
    },
    {
      id: "6",
      authorId: "ariana-tabassum",
      title: "The Future of React Server Components",
      slug: "future-of-react-server-components",
      summary:
        "What RSC changes for data fetching, bundles, and routing in modern frameworks.",
      content:
        "RSC moves data work to the server, reduces client JS, and pairs with streaming/SSR. Learn boundaries, cache, and when to keep client components…",
      published: true,
      coverUrl: "/images/blog1.jpeg",
      createdAt: new Date("2025-05-02"),
      updatedAt: new Date("2025-05-02"),
    },
    {
      id: "7",
      authorId: "tanvir-arafat",
      title: "Next.js 15: What’s New and Why It Matters",
      slug: "nextjs-15-whats-new",
      summary:
        "Turbopack improvements, routing polish, partial prerendering, and better DX.",
      content:
        "We explore key features, migration notes, and performance wins measured on a sample SaaS dashboard…",
      published: true,
      coverUrl: "/images/blog1.jpeg",
      createdAt: new Date("2025-06-18"),
      updatedAt: new Date("2025-06-18"),
    },
    {
      id: "8",
      authorId: "nusrat-jahan",
      title: "Design Systems in React: From Chaos to Consistency",
      slug: "design-systems-in-react",
      summary:
        "Tokens, theming, components, and governance to scale design across teams.",
      content:
        "Start with tokens, document variants, enforce accessibility, and automate checks with Storybook and visual regression tests…",
      published: true,
      coverUrl: "/images/blog1.jpeg",
      createdAt: new Date("2025-07-09"),
      updatedAt: new Date("2025-07-09"),
    },
    {
      id: "9",
      authorId: "rakib-hasan",
      title: "Integrating APIs in React with Axios and Fetch",
      slug: "integrating-apis-in-react",
      summary:
        "Patterns for error handling, cancellation, retries, and normalization.",
      content:
        "Use AbortController, map transport errors to UI states, centralize base clients, and co-locate data transforms with components…",
      published: true,
      coverUrl: "/images/blog1.jpeg",
      createdAt: new Date("2025-08-12"),
      updatedAt: new Date("2025-08-12"),
    },
    {
      id: "10",
      authorId: "mahin-rahman",
      title: "From React to React Native: Reusing Code Across Platforms",
      slug: "react-to-react-native-code-reuse",
      summary:
        "Share logic, not UI — and structure monorepos for mobile + web.",
      content:
        "Extract hooks and business logic to shared packages, use platform-specific components, and manage navigation/state differences…",
      published: true,
      coverUrl: "/images/blog1.jpeg",
      createdAt: new Date("2025-09-03"),
      updatedAt: new Date("2025-09-03"),
    },
    {
      id: "11",
      authorId: "tanjila-ferdous",
      title: "Managing Side Effects with React Query",
      slug: "managing-side-effects-with-react-query",
      summary:
        "Cache, background updates, optimistic UI, and mutation lifecycles.",
      content:
        "Configure query keys, stale times, dehydrated state for SSR, and mutation side-effects with toasts and rollback strategies…",
      published: true,
      coverUrl: "/images/blog1.jpeg",
      createdAt: new Date("2025-10-07"),
      updatedAt: new Date("2025-10-07"),
    },
    {
      id: "12",
      authorId: "imran-hossain",
      title: "Building Reusable Hooks in React",
      slug: "building-reusable-hooks-in-react",
      summary: "Patterns for composable, typed, and testable custom hooks.",
      content:
        "Encapsulate side-effects, expose stable APIs, add TypeScript generics, and provide sensible defaults with options objects…",
      published: true,
      coverUrl: "/images/blog1.jpeg",
      createdAt: new Date("2025-11-19"),
      updatedAt: new Date("2025-11-19"),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-6 sm:py-8 lg:py-12 flex flex-col gap-10 sm:gap-12">
      <div className="flex flex-col gap-4 sm:gap-6">
        <BackLink targetId="blogs" label="back to blogs" />

        <span className="bg-[#47cfeb] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[#11192c] text-xs sm:text-sm font-semibold capitalize w-fit">
          React
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-black dark:text-white">
          Building Scalable React Applications
        </h1>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-ring">
          Learn best practices for structuring large React applications with
          proper state management and code organization.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2 sm:gap-4 text-ring">
          {/* Author */}
          <h5 className="text-sm sm:text-base font-semibold text-black dark:text-white whitespace-nowrap">
            By Shipan Mallik
          </h5>

          {/* Date */}
          <div className="flex items-center gap-1 text-xs sm:text-sm font-normal">
            <Calendar size={14} className="shrink-0" />
            <p className="truncate">Dec 15, 2024</p>
          </div>

          {/* Read Time */}
          <div className="flex items-center gap-1 text-xs sm:text-sm font-normal">
            <Clock10 size={14} className="shrink-0" />
            <p className="truncate">8 min read</p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Image
          src="/images/blog1.jpeg"
          alt="project image"
          width={1600}
          height={900}
          priority
          className="rounded-2xl w-full h-auto object-cover"
        />
      </div>

      <p className="text-sm sm:text-base leading-relaxed text-ring">
        Building scalable React applications requires careful planning and
        adherence to best practices. In this comprehensive guide, we'll explore
        the key principles and techniques that will help you create maintainable
        and efficient React applications. Proper Project Structure A
        well-organized project structure is the foundation of any scalable
        application. Consider organizing your files by feature rather than by
        type. This approach makes it easier to locate related files and promotes
        better code organization. State Management Choosing the right state
        management solution is crucial. While React's built-in Context API works
        well for simpler applications, larger projects often benefit from
        dedicated state management libraries like Redux or Zustand. Consider
        your application's complexity and team familiarity when making this
        decision. Component Design Design your components to be reusable and
        composable. Follow the Single Responsibility Principle, ensuring each
        component has one clear purpose. This makes components easier to test,
        maintain, and reuse across your application. Performance Optimization
        Implement performance optimizations strategically. Use React.memo for
        expensive components, useMemo for complex calculations, and useCallback
        for function references. However, don't over-optimize prematurely –
        measure first, then optimize where it matters. Code Splitting and Lazy
        Loading Reduce initial bundle size by implementing code splitting and
        lazy loading. React's lazy() and Suspense make it easy to load
        components on demand, improving your application's initial load time
        significantly.
      </p>

      <hr className="border-gray-300 dark:border-gray-800" />

      <section className="flex flex-col items-start gap-3 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-black dark:text-white">
          Share this post
        </h2>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {[
            { Icon: Facebook, label: "Share on Facebook" },
            { Icon: Twitter, label: "Share on X/Twitter" },
            { Icon: Linkedin, label: "Share on LinkedIn" },
            { Icon: Link2, label: "Copy link" },
          ].map(({ Icon, label }, idx) => (
            <button
              key={idx}
              aria-label={label}
              className="border border-gray-300 dark:border-gray-700 p-2 rounded-lg cursor-pointer hover:bg-[#47cfeb] text-black dark:text-white hover:text-white dark:hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#47cfeb]"
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 sm:gap-5">
        <h2 className="text-2xl sm:text-3xl font-bold capitalize leading-tight text-black dark:text-white">
          Recent posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs?.slice(0, 3)?.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;
