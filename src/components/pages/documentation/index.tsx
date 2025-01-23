import DocumentationLayout from "@/components/commons/documentation-layout";
import { DOCUMENTATION } from "@/components/navbar/constants";
import Introduction from "./introduction";
import FogverseBasics from "./fogverse-basics";

const DocumentationPage = () => {
  return (
    <DocumentationLayout contentList={DOCUMENTATION}>
      <Introduction />
      <FogverseBasics />
    </DocumentationLayout>
  );
};

export default DocumentationPage;
