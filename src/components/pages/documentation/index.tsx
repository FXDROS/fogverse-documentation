import DocumentationLayout from "@/components/commons/documentation-layout";
import { DOCUMENTATION } from "@/components/navbar/constants";

const DocumentationPage = () => {
  return (
    <DocumentationLayout contentList={DOCUMENTATION}>
      <div>FogVerse Documentation</div>
    </DocumentationLayout>
  );
};

export default DocumentationPage;
