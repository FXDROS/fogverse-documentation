import DocumentationLayout from "@/components/commons/documentation-layout";
import { DOCUMENTATION } from "@/components/navbar/constants";
import Introduction from "./introduction";
import FogverseBasics from "./fogverse-basics";
import FogverseAdvances from "./fogvere-advances";

const DocumentationPage = () => {
  return (
    <DocumentationLayout contentList={DOCUMENTATION}>
      <Introduction />
      <FogverseBasics />
      <FogverseAdvances />
    </DocumentationLayout>
  );
};

export default DocumentationPage;
