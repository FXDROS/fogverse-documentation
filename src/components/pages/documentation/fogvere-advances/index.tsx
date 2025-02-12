import AutoScaling from "./auto-scaling";
import Logging from "./logging";

const FogverseAdvances = () => {
  return (
    <div className="mt-12">
      <div id="fogverse-advances" className="text-semi-xl font-bold my-4">
        More on FogVerse
      </div>
      <div className="text-base">...</div>
      <Logging />
      <AutoScaling />
    </div>
  );
};

export default FogverseAdvances;
