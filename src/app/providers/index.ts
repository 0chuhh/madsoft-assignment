import compose from "compose-function";
import { withRouter } from "./with-router";
import { WithRedux } from "./with-redux";

export const withProviders = compose(WithRedux,withRouter);