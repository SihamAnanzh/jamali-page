import { ThreeDots } from "react-loader-spinner";
import { Random } from "react-animated-text";
import { Wave } from "react-animated-text";
export default function Home() {
  return (
    <div className="section">
      <h1>
        <Wave text="Under construction" effect="jump" effectChange={0.1} />
      </h1>
      <ThreeDots color="#FCE6E9" height={80} width={80} />
    </div>
  );
}
