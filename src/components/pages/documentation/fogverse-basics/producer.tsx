import CodeSnippet, { SmallCode } from "@/components/commons/code-snippet";
import UnorderedList from "@/components/commons/unordered-list";
import { PRODUCER } from "./constants";
import {
  AsyncFunction,
  EmptyFunction,
  Required,
  RequireImplementation,
} from "@/components/commons/tags";

const Producer = () => {
  return (
    <div className="mt-12">
      <div id="producer" className="text-very-lg font-bold my-4">
        Producer
      </div>
      To send messages to a Kafka topic, a component has to extend the
      <SmallCode code="Producer()" />
      class, which basically, is just an empty class that extends the
      <SmallCode code="AbstractConsumer()" />
      class, the
      <SmallCode code="AIOKafkaProducer()" />
      class, and the
      <SmallCode code="Runnable()" />
      class. You might wonder why a producer component should extend a consumer
      class even though it is designed to create a producer component. FogVerse
      is designed with data stream management in mind. Hence, as mentioned
      before, a component is expected to behave as a producer and consumer.
      <div>
        <div className="text-lg font-semibold my-4">
          Producer&apos;s base attributes
        </div>
        When initializing a
        <SmallCode code="Producer()" />
        class, there are several attributes that you can declare, and some of
        them are required.
        <CodeSnippet language="python" code={PRODUCER.initialization} />
        <div className="mt-4 ml-4">
          <UnorderedList>
            <SmallCode code="producer_topic: str[]" />
            to declare which topics your messages would be sent. This attribute
            accepts string or array of strings. You can also set the value of
            this attribute through environment variable with
            <SmallCode code="PRODUCER_TOPIC" />
            as the key.
            <Required />
          </UnorderedList>
          <UnorderedList>
            <SmallCode code="producer_servers: str[]" />
            to declare which Kafka servers your messages would be sent. This
            attribute accepts string or array of strings. You can also set the
            value of this attribute through environment variable with
            <SmallCode code="PRODUCER_SERVERS" />
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
      </div>
      <div>
        <div className="text-lg font-semibold my-4">
          Producer&apos;s built-in functions
        </div>
        The
        <SmallCode code="Producer()" />
        class has some built in functions. Please be aware when you are going to
        override it and ended up breaking up your program, since it might be not
        an empty function. The functions mentioned in this section are just some
        essentials function. Please check further for the inherited
        classes&apos;, since you might inadvertently overridding existing class.
        <CodeSnippet language="python" code={PRODUCER.base_functions} />
        <div className="mt-4 ml-4">
          <UnorderedList>
            <SmallCode code="start_producer(self)" />
            to configure and start a producer as well as setting up the log
            system for a producer component.
            <AsyncFunction />
          </UnorderedList>
          <UnorderedList>
            <SmallCode
              code="send(self, data, topic=None, key=None, headers=None,
                   callback=None)"
            />
            to send messages to a Kafka server.
            <AsyncFunction />
          </UnorderedList>
          <UnorderedList>
            <SmallCode code="close_producer(self)" />
            to stop a runnning producer component.
            <AsyncFunction />
          </UnorderedList>
          <UnorderedList>
            <SmallCode code="receive(self)" />
            to do something when data is received. When your producer and
            consumer component is the same class, you do not really need to
            implement this function, since the consumer component has already
            implemented it.
            <AsyncFunction />
            <EmptyFunction />
            <RequireImplementation />
          </UnorderedList>
        </div>
      </div>
    </div>
  );
};

export default Producer;
