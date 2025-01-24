import CodeSnippet, { SmallCode } from "@/components/commons/code-snippet";
import UnorderedList from "@/components/commons/unordered-list";
import { PRODUCER } from "./constants";

const Producer = () => {
  return (
    <div className="mt-12">
      <div id="producer" className="text-very-lg font-bold my-4">
        Producer
      </div>
      <div className="text-base">
        To send messages to a Kafka topic, a component has to extend the
        <SmallCode code="Producer()" />
        class, which basically, is just an empty class that extends the
        <SmallCode code="AbstractConsumer()" />
        class and the
        <SmallCode code="AIOKafkaProducer()" />
        class. You might wonder why a producer component should extend a
        consumer class even though it is designed to create a producer
        component. FogVerse is designed with data stream management in mind.
        Hence, as mentioned before, a component is expected to behave as a
        producer and consumer. The
        <SmallCode code="Producer()" />
        class has several attributes that you can declare during the class
        initialization.
        <CodeSnippet language="python" code={PRODUCER.initialization} />
        <div className="mt-4">
          <UnorderedList>
            <SmallCode code="producer_topic: str[]" />
            to declare which topics your messages would be sent. This attribute
            accepts string or array of strings. You can also set the value of
            this attribute through environment variable with
            <SmallCode code="PRODUCER_TOPIC" />
            as the key.
          </UnorderedList>
          <UnorderedList>
            <SmallCode code="producer_servers: str[]" />
            to declare which Kafka servers your messages would be sent. This
            attribute accepts string or array of strings. You can also set the
            value of this attribute through environment variable with
            <SmallCode code="PRODUCER_SERVERS" />
            as the key.
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
    </div>
  );
};

export default Producer;
