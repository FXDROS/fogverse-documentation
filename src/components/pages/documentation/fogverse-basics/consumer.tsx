import CodeSnippet, { SmallCode } from "@/components/commons/code-snippet";
import { CONSUMER } from "./constants";
import UnorderedList from "@/components/commons/unordered-list";
import {
  AsyncFunction,
  EmptyFunction,
  Required,
  RequireImplementation,
} from "@/components/commons/tags";

const Consumer = () => {
  return (
    <div className="mt-12">
      <div id="consumer" className="text-very-lg font-bold my-4">
        Consumer
      </div>
      To consume message from a Kafka topic, a component has to extend the
      <SmallCode code="Consumer()" />
      class. Just like a<SmallCode code="Producer()" /> class, it is just and
      empty class that extends the
      <SmallCode code="AbstractProducer()" />
      class, the
      <SmallCode code="AIOKafkaConsumer()" />
      class, and the
      <SmallCode code="Runnable()" />
      class.
      <div className="text-lg font-semibold my-4">
        Consumer&apos;s base attributes
      </div>
      Just like creating a producer component, when a consumer component is
      created, there are several attributes that you can declare during the
      <SmallCode code="Consumer()" />
      class initialization, and some of them are required.
      <CodeSnippet language="python" code={CONSUMER.initialization} />
      <div className="mt-4 ml-4">
        <UnorderedList>
          <SmallCode code="consumer_topic: str[]" />
          to declare from which topics your consumer will receive the message.
          This attribute accepts string or array of strings. You can also set
          the value of this attribute through environment variable with
          <SmallCode code="CONSUMER_TOPIC" />
          as the key.
          <Required />
        </UnorderedList>
        <UnorderedList>
          <SmallCode code="consumer_servers: str[]" />
          to declare from which Kafka servers your consumer will receive the
          message. This attribute accepts string or array of strings. You can
          also set the value of this attribute through environment variable with
          <SmallCode code="CONSUMER_SERVERS" />
          as the key.
          <Required />
        </UnorderedList>
        <UnorderedList>
          <SmallCode code="auto_decode: bool" />
          to decode received data (file) from bytes to numpy array.
        </UnorderedList>
        <UnorderedList>
          <SmallCode code="auto_encode: bool" />
          to encode data according to the encoding type.
        </UnorderedList>
        <UnorderedList>
          <SmallCode code="encode_encoding: str" />
          to declare type of encoding that is being used for the corresponding
          message e.g.
          <SmallCode code="jpg" />
          and
          <SmallCode code="png" />.
        </UnorderedList>
      </div>
      <div>
        <div className="text-lg font-semibold my-4">
          Consumer&apos;s built-in functions
        </div>
        The
        <SmallCode code="Consumer()" />
        class has some built in functions. Please be aware when you are going to
        override it and ended up breaking up your program, since it might be not
        an empty function. The functions mentioned in this section are just some
        essentials function. Please check further for the inherited classes,
        since you might inadvertently overridding existing class.
        <CodeSnippet language="python" code={CONSUMER.base_functions} />
        <div className="mt-4 ml-4">
          <UnorderedList>
            <SmallCode code="start_consumer(self)" />
            to configure and start a consumer as well as setting up the log
            system for a consumer component.
            <AsyncFunction />
          </UnorderedList>
          <UnorderedList>
            <SmallCode code="receive(self)" />
            to set behaviour how messages are received.
            <AsyncFunction />
          </UnorderedList>
          <UnorderedList>
            <SmallCode code="close_consumer(self)" />
            to stop a runnning consumer component.
            <AsyncFunction />
          </UnorderedList>
          <UnorderedList>
            <SmallCode code="_send(self, data, *args, **kwargs)" />
            to do something when a message is going to be sent. When your
            producer and consumer component is the same class, you do not really
            need to implement this function, since the producer component has
            already implemented it.
            <AsyncFunction />
            <EmptyFunction />
            <RequireImplementation />
          </UnorderedList>
        </div>
      </div>
    </div>
  );
};

export default Consumer;
