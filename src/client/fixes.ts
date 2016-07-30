
import { Router } from 'react-router';

export const withRouter: <T>(fun: (props: T & WithRouterProps) => JSX.Element) => (props: T) => JSX.Element = require("react-router").withRouter 

export interface WithRouterProps {
  router: typeof Router
}
