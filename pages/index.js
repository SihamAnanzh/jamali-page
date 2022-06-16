import { ThreeDots } from "react-loader-spinner";
import { Random } from "react-animated-text";
import { Wave } from "react-animated-text";
export default function Home() {
  return (
    <div className="section">
      <h1>
        <Wave text="Under Construction" effect="jump" effectChange={0.1} />
      </h1>
      <ThreeDots color="#fff" height={100} width={100} />
    </div>
  );
}
