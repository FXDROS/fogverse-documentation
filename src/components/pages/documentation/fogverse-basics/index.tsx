import Consumer from "./consumer";
import OpenCV from "./opencv";
import Producer from "./producer";
import ConsumerStorage from "./consumer-storage";

const FogverseBasics = () => {
  return (
    <div className="mt-12">
      <div id="fogverse-basics" className="text-semi-xl font-bold my-4">
        FogVerse Basics
      </div>
      <div className="text-base">
        FogVerse has some basic classes that we can utilize to manage our data
        stream. These classes make a component able to behave as a message
        consumer, producer, or consumer and producer at the same time. Some
        classes serve as a service basic utilities such as logging and storing
        messages.
      </div>
      <Producer />
      <Consumer />
      <ConsumerStorage />
      <OpenCV />
    </div>
  );
};

export default FogverseBasics;
