import CodeSnippet, { SmallCode } from "@/components/commons/code-snippet";
import { SAMPLE_PRODUCER } from "./constants";

const SampleProducer = () => {
  return (
    <div className="text-base">
      <div>
        To create a simple producer component, you need to extend the Producer
        class. Let&apos;s start by creating a simple
        <SmallCode code="producer.py" />
        that generates random numbers. First, we need to initialize the
        Producer.
        <CodeSnippet code={SAMPLE_PRODUCER.initialization} language="python" />
      </div>
      <div>
        We are expected to receive data from a topic and process it. But since
        in this tutorial we are not receiving data from anywhere, yet producing
        it ourselves, we can generate our random number by overwriting the
        <SmallCode code="async def receive()" /> function.
        <CodeSnippet code={SAMPLE_PRODUCER.receive} language="python" />
      </div>
      <div>
        To run the producer, you need to run <SmallCode code="MyProducer()" />
        class asynchronously. There are many ways to do it, but for now, you can
        follow this example.
        <CodeSnippet code={SAMPLE_PRODUCER.run} language="python" />
      </div>
      <div>
        In the end, the producer will look like this:
        <CodeSnippet code={SAMPLE_PRODUCER.all} language="python" />
      </div>
    </div>
  );
};

export default SampleProducer;
