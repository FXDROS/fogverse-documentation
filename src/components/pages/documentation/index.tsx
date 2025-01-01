import DocumentationLayout from "@/components/commons/documentation-layout";
import { DOCUMENTATION } from "@/components/navbar/constants";

const DocumentationPage = () => {
  return (
    <DocumentationLayout contentList={DOCUMENTATION}>
      <div id="get-started" className="text-semi-xl font-bold">
        Documentation
      </div>
      <div className="text-base font-bold mt-4">
        FogVerse Documentation Version 1.0
      </div>
      <div className="mt-12">
        <div id="introduction" className="text-very-lg font-bold my-4">
          Introduction
        </div>
        <div className="text-lg font-semibold my-4">What is FogVerse?</div>
        <div className="text-base">Fogverse...</div>
        <div className="text-lg font-semibold my-4">Why Apache Kafka?</div>
        <div className="text-base">Reason for using apache kafka</div>
      </div>
      <div className="mt-12">
        <div id="introduction" className="text-very-lg font-bold my-4">
          Installation
        </div>
        <div className="text-lg font-semibold my-4">Using pip</div>
        <div className="text-base">Installation using pip</div>
        <div className="text-lg font-semibold my-4">
          Download directly from GitHub
        </div>
        <div className="text-base">Github download</div>
      </div>
      <div className="mt-12">
        <div id="introduction" className="text-very-lg font-bold my-4">
          FogVerse quickstart
        </div>
        <div className="text-lg font-semibold my-4">Running Kafka</div>
        <div className="text-base">To use FogVerse, you will need kafka</div>
        <div className="text-lg font-semibold my-4">Create simple producer</div>
        <div className="text-base">Creating simple producer...</div>
        <div className="text-lg font-semibold my-4">Create simple consumer</div>
        <div className="text-base">Creating simple consumer...</div>
        <div className="text-lg font-semibold my-4">
          Run your first application
        </div>
        <div className="text-base">Running your first application...</div>
      </div>
    </DocumentationLayout>
  );
};

export default DocumentationPage;
