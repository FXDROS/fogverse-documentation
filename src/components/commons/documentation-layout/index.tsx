import SubNav from "@/components/navbar/subnav";

const DocumentationLayout: React.FC<documentationLayoutInterface> = ({
  contentList,
  children,
}) => {
  return (
    <div className="flex justify-center mt-12">
      <div className="w-64">
        <SubNav contentList={contentList} />
      </div>
      <div className="w-1/2 overflow-scroll">{children}</div>
    </div>
  );
};

export default DocumentationLayout;
