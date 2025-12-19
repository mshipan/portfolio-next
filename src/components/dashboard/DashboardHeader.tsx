interface PageHeader {
  title?: string;
  subTitle?: string;
}
const DashboardHeader = ({ title, subTitle }: PageHeader) => {
  return (
    <div>
      <h1 className="text-3xl font-bold leading-9 text-black dark:text-white pb-2">
        {title}
      </h1>
      <p className="text-base leading-5 text-ring">{subTitle}</p>
    </div>
  );
};

export default DashboardHeader;
