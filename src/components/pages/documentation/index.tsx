import DocumentationLayout from "@/components/commons/documentation-layout";
import { DOCUMENTATION } from "@/components/navbar/constants";
import Introduction from "./introduction";

const DocumentationPage = () => {
  return (
    <DocumentationLayout contentList={DOCUMENTATION}>
      <Introduction />
    </DocumentationLayout>
  );
};

export default DocumentationPage;
