import { Helmet } from "react-helmet";
import SuggestionBanner from "../../components/SuggestionBanner/SuggestionBanner";
import SugOfSubject from "../../components/SugOfSubject/SugOfSubject";

const SuggestionPage = () => {
  return (
    <div>
      <Helmet>
        <title>Suggestion | Cst Study Zone</title>
      </Helmet>
      <div>
        <SuggestionBanner />
        <SugOfSubject />
      </div>
    </div>
  );
};

export default SuggestionPage;
