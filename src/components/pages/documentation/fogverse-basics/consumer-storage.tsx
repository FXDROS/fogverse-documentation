import CodeSnippet, { SmallCode } from "@/components/commons/code-snippet";
import { CONSUMER_STORAGE } from "./constants";

const ConsumerStorage = () => {
  return (
    <div className="mt-12">
      <div id="consumer-storage" className="text-very-lg font-bold my-4">
        Consumer storage
      </div>
      The
      <SmallCode code="ConsumerStorage()" />
      is a consumer that can receive and save messages from a broker. This class
      will come handy when you are facing a bottleneck in your system, well in
      this case is when the process time is longer than the consume time. Since
      this class will save the message in an asyncio queue, stored messages can
      be processed letter asynchronously. Utilizing the
      <SmallCode code="ConsumerStorage()" />
      requires some resources (since it store your message in a queue), so
      please be wise.
      <br />
      <br />
      To use this class, you need to initialize it together with the
      <SmallCode code="Consumer()" />
      class, since it does not extend the
      <SmallCode code="AIOKafkaProducer()" />, nor the
      <SmallCode code="AIOKafkaConsumer()" />
      class.
      <CodeSnippet language="python" code={CONSUMER_STORAGE.initialization} />
      You can declare whether you want keep the messages in the queue or not by
      declaring the value of
      <SmallCode code="keep_messages: bool" />
    </div>
  );
};

export default ConsumerStorage;
