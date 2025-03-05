import CodeSnippet, { SmallCode } from "@/components/commons/code-snippet";
import { PROFILING } from "./constants";
import UnorderedList from "@/components/commons/unordered-list";
import { Required } from "@/components/commons/tags";

const Profiling = () => {
  return (
    <div className="mt-12">
      <div id="profiling" className="text-very-lg font-bold my-4">
        Profiling
      </div>
      <div className="text-base">
        To get the idea of your system lattency, you can utilize the
        <SmallCode code="Profiling()" />
        class. Basically, this class produces logs that record the process time
        (e.g. message creation time and message consume time) and produced
        message size of each component. The logs will be stored in a csv file
        with a certain directory, set during the component initialization. To
        use this class, you can extend it together with a consumer or a producer
        component. There are some parameters that is required during the
        initialization.
        <CodeSnippet language="python" code={PROFILING.initialization} />
        <div className="mt-4 ml-4">
          <UnorderedList>
            <SmallCode code="name: str[]" />
            to set the name of the log file.
            <Required />
          </UnorderedList>
          <UnorderedList>
            <SmallCode code="dirname: str[]" />
            to set the directory of the log.
            <Required />
          </UnorderedList>
        </div>
      </div>
      <div className="text-base mt-4">
        As reference for the
        <SmallCode code="Profiling()" />
        class implementation, check the example below. In this example, the log
        file should be stored in the
        <SmallCode code="/logs/<current_date>" />
        with the class name as the file name (e.g.
        <SmallCode code="log_csv_MyProducer.csv" />)
        <CodeSnippet language="python" code={PROFILING.example} />
      </div>
    </div>
  );
};

export default Profiling;
