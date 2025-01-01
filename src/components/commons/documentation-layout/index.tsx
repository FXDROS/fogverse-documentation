import SubNav from "@/components/navbar/subnav";

const DocumentationLayout: React.FC<documentationLayoutInterface> = ({
  contentList,
  children,
}) => {
  return (
    <div className="flex justify-center mt-12">
      <div className="w-1/4">
        <SubNav contentList={contentList} />
      </div>
      <div className="w-1/2">{children}</div>
    </div>
  );
};

export default DocumentationLayout;
