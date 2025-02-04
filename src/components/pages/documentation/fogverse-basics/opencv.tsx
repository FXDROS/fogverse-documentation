import CodeSnippet, { SmallCode } from "@/components/commons/code-snippet";
import { OPENCV_CONSUMER } from "./constants";

const OpenCv = () => {
  return (
    <div className="mt-12">
      <div id="opencv-consumer" className="text-very-lg font-bold my-4">
        OpenCV Consumer
      </div>
      <div>
        The
        <SmallCode code="OpenCVConsumer()" />
        class is basically a consumer class that extends the
        <SmallCode code="AbstractConsumer()" />
        class. What differs it from the <SmallCode code="Consumer()" />
        class is that it consumes data from a camera, instead of a message
        broker. The implementation is quite straight forward, you only need to
        extend and initate it as you extend other classes. Remember that you
        will need a camera connected to your device (it can be external or
        built-in camera) to have this class functioning.
        <CodeSnippet language="python" code={OPENCV_CONSUMER.initialization} />
      </div>
      <div>
        Since
        <SmallCode code="OpenCVConsumer()" />
        is developed on opencv, you can also set the image attributes just the
        way you set opencv&apos;s attributes. To do so, you can follow this
        example.
        <CodeSnippet language="python" code={OPENCV_CONSUMER.set_properties} />
      </div>
    </div>
  );
};

export default OpenCv;
