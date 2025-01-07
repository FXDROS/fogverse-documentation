import CodeSnippet, { SmallCode } from "@/components/commons/code-snippet";
import { SAMPLE_CONSUMER } from "./constants";

const SampleConsumer = () => {
  return (
    <div className="text-base">
      <div>
        To consume messages from a producer, we can create a consumer component
        by extending the <SmallCode code="Consumer()" /> class. Let's try
        consuming messages sent by the random number producer that we have
        created. First, we need to initialize the Consumer.
        <CodeSnippet code={SAMPLE_CONSUMER.initialization} language="python" />
      </div>
      <div>
        Contrary to a producer, a consumer is expected to consume the data or
        messages and send them after being processed. Hence, we need to
        overwrite the <SmallCode code="_send()" /> function and we can process
        our data there. Note that the <SmallCode code="run_in_executor()" />{" "}
        function accepts three parameters: <SmallCode code="executor" />,
        <SmallCode code="func" />, and <SmallCode code="*args" />.
        <CodeSnippet code={SAMPLE_CONSUMER.send} language="python" />
      </div>
      <div>
        Similar with the producer, to run the consumer we need a
        <SmallCode code="main()" /> function.
        <CodeSnippet code={SAMPLE_CONSUMER.run} language="python" />
      </div>
      <div>
        With that, our whole consumer component will look like this:
        <CodeSnippet code={SAMPLE_CONSUMER.all} language="python" />
      </div>
    </div>
  );
};

export default SampleConsumer;
