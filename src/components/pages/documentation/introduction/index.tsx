import { BASH_COMMAND, FIRST_RUN } from "./constants";
import CodeSnippet from "@/components/commons/code-snippet";
import SampleProducer from "./sample-producer";
import SampleConsumer from "./sample-consumer";

const Introduction = () => {
  return (
    <div>
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
        <div className="text-base">
          FogVerse is a Kafka-based Python library designed to manage the data
          flow of a stream application. FogVerse has three primary utilizable
          components: Producer, Consumer, and ConsumerStorage. The Producer
          component has the role of producing and publishing messages to a Kafka
          server. On the other hand, the Consumer component is responsible for
          consuming messages from a Kafka server, while the ConsumerStorage
          component stores consumed messages. To utilize FogVerse, a Kafka
          server must be run beforehand. The current version of FogVerse runs at
          the very least on <b>Python3.9</b>, but if you have a lower version of
          Python, you can check the previous versions.
        </div>
        <div className="text-lg font-semibold my-4">Why Kafka?</div>
        <div className="text-base">
          Based on Apache Kafka&apos;s official documentation, Apache Kafka is
          an open-source distributed event streaming platform used by thousands
          of companies for high-performance data pipelines, streaming analytics,
          data integration, and mission-critical applications. Apache Kafka
          provides high throughput and scalability, making it one of the most
          suitable tools for stream applications. To know more about Apache
          Kafka, check out its&nbsp;
          <a
            href="https://kafka.apache.org/"
            className="text-primaryblue underline"
          >
            official documentation
          </a>
          .
        </div>
      </div>
      <div className="mt-12">
        <div id="installation" className="text-very-lg font-bold my-4">
          Installation
        </div>
        <div className="text-lg font-semibold my-4">Using pip</div>
        <div className="text-base">
          There are various ways to install FogVerse to your project. The first
          way is the installation by pip. You can copy and run the below command
          in your terminal (or any other command line interface application).
          Using a virtual environment is highly recommended.
          <CodeSnippet code={BASH_COMMAND.pip_installation} language="sh" />
        </div>
        <div className="text-lg font-semibold my-4">
          Download directly from GitHub
        </div>
        <div className="text-base">
          Go to the&nbsp;
          <a
            href="https://github.com/FXDROS/fogverse"
            className="text-primaryblue underline"
          >
            FogVerse GitHub repository
          </a>
          &nbsp;and clone the project to your device. Once the clone has been
          completed, install the library using pip by running the following
          command in the terminal. Make sure that the command is executed in the
          directory where the FogVerse library is saved (or you can navigate it
          by yourself while executing the command).
          <CodeSnippet code={BASH_COMMAND.github_installation} language="sh" />
        </div>
      </div>
      <div className="mt-12">
        <div id="quickstart" className="text-very-lg font-bold my-4">
          FogVerse quickstart
        </div>
        <div className="text-lg font-semibold my-4">Running Kafka</div>
        <div className="text-base">
          Since FogVerse is a Kafka-based library, a Kafka server is necessary.
          There are some Kafka server options, such as Apache Kafka and
          Confluent. For starters, we will utilize a local Apache Kafka server.
          To do so, first, we need to download Apache Kafka from&nbsp;
          <a
            href="https://kafka.apache.org/downloads"
            className="text-primaryblue underline"
          >
            Apache Kafka&apos;s official documentation
          </a>
          . You can download the source download file, unzip it, and run it with
          zookeeper as mentioned in&nbsp;
          <a
            href="https://kafka.apache.org/quickstart"
            className="text-primaryblue underline"
          >
            Apache Kafka&apos;s quickstart
          </a>
          .
          <br />
          <br />
          First, run the zookeeper server by executing this command.
          <CodeSnippet code={BASH_COMMAND.zookeeper_server} language="sh" />
          Next, run the Kafka server after the zookeeper server is fully
          running. If you want to customize the Kafka server configurations, you
          can do it through the&nbsp;
          <code className="bg-gray p-1 rounded text-sm">server.properties</code>
          &nbsp;file.
          <CodeSnippet code={BASH_COMMAND.kafka_server} language="sh" />
        </div>
        <div className="text-lg font-semibold my-4">Create simple producer</div>
        <SampleProducer />
        <div className="text-lg font-semibold my-4">Create simple consumer</div>
        <SampleConsumer />
        <div className="text-lg font-semibold my-4">
          Run your first application
        </div>
        <div className="text-base">
          Run both consumer and producer simultaneously through terminal. Make
          sure your kafka server is running. You will be able to see the
          messages from your producer in your consumer terminal, similar as the
          output bellow:
          <CodeSnippet code={FIRST_RUN} language="bash" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
