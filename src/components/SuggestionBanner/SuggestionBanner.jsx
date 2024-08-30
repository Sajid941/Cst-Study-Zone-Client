import { Parallax } from "react-parallax";
import cse from "../../assets/CSE.jpg";

const SuggestionBanner = () => {
  return (
    <div>
      <Parallax
        blur={{ min: -10, max: 10 }}
        bgImage={cse}
        bgImageAlt="the dog"
        strength={-50}
        className="bg-cover bg-center bg-no-repeat bg-fixed"
      >
        <div className="p-3">
          <div className="hero h-[400px]">
            <div className="hero-content text-center text-neutral-content bg-black/60 p-10 md:p-24 md:w-[1000px] rounded-2xl ">
              <div className="max-w-md pt-8">
                <h1 className="mb-8 text-5xl md:text-6xl font-bold uppercase">
                  suggestion
                </h1>
                <p className="mb-5 uppercase text-lg">Computer Science & Technology</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
    
  );
};

export default SuggestionBanner;
