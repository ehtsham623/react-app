import Module1, { two, three } from "./Module1";
import Module2 from "./Module2";

const ExportExample = () => {
  return (
    <div>
      <h2>Export Example</h2>
      <p>{Module1}</p>
      <p>{two}</p>
      <p>{three}</p>
      <p>{Module2.one}</p>
      <p>{Module2.two}</p>
      <p>{Module2.three}</p>
    </div>
  );
};

export default ExportExample;
