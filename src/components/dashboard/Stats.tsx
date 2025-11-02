import { CircleCheck, Clock3, FileText, TrendingUp } from "lucide-react";
import CircleLight from "../shared/CircleLight";

const Stats = () => {
  return (
    <div className="relative overflow-hidden rounded-tl-xl shadow-2xl w-fit">
      <CircleLight className="absolute -top-14 -left-12" />

      <div className="border border-gray-800 rounded-xl p-6 space-y-4 w-fit">
        <div className="flex items-center justify-between">
          <FileText className="size-8" color="#9767e4" />
          <TrendingUp className="text-ring" />
        </div>
        <div className="space-y-2">
          <div>
            <h1 className="text-3xl font-bold leading-9">45</h1>
            <p className="text-base font-medium leading-4 capitalize text-ring">
              total blogs
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 border border-gray-800 rounded-full p-1 w-fit">
              <CircleCheck color="#9767e4" />
              <div className="flex flex-col pr-3">
                <p className="text-base font-semibold leading-4">38</p>
                <p className="text-base font-normal leading-4">Published</p>
              </div>
            </div>

            <div className="flex items-center gap-2 border border-gray-800 rounded-full p-1 w-fit">
              <Clock3 color="#9767e4" />
              <div className="flex flex-col pr-3">
                <p className="text-base font-semibold leading-4">7</p>
                <p className="text-base font-normal leading-4">Drafts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
