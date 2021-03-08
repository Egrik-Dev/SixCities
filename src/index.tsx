import ReactDOM from "react-dom";
import { App } from "./components/App/App";

const root = document.querySelector(`#root`);
const QUANTITY_PROPS = 162;

ReactDOM.render(<App quantityOffers={QUANTITY_PROPS} />, root);
