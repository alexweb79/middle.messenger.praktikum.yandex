import {Block} from '../Block'
import {Route} from "./Route";

class Router {
  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  private static __instance: Router;
  private routes: Route[];
  private history: History;
  private _currentRoute: Route | null;
  private readonly _rootQuery: string;

  use(pathname: string, block: Block) {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = ((event: Event) => {
      const pathname = event.currentTarget instanceof Window ? event.currentTarget.location.pathname : undefined;
      if (pathname) {
        this._onRoute(pathname);
      }
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  public reset() {
    this.routes = []
    this._currentRoute = null
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      this.go('/404');
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route: Route) => route.match(pathname));
  }
}

export default new Router('#root');
