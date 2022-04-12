import { IBlock } from "./block/iblock";

export class Route {
  private readonly pathname: string;
  public block: IBlock;

  constructor(pathname: string, block: IBlock) {
    this.pathname = pathname;
    this.block = block;
  }

  matchCheck(pathname: string): boolean {
    return pathname === this.pathname;
  }
}

export class Router {
  private static instance: Router;
  public routes: Route[];
  private history: History;
  private currentPath: string;

  constructor(startPath: string) {
    this.routes = [];
    this.history = window.history;
    this.currentPath = startPath;

    if (Router.instance) {
      return Router.instance;
    }

    window.addEventListener("popstate", (event: PopStateEvent) => {
      // @ts-ignore
      this._onRoute(event.currentTarget!.location.pathname);
    });

    Router.instance = this;
  }

  use(pathname: string, block: IBlock) {
    const route = new Route(pathname, block);
    this.routes.push(route);
    return this;
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }
    this.currentPath = pathname;
  }

  getCurrentRoute(): Route {
    const router = this.getRoute(this.currentPath);
    if (router) {
      return router;
    } else {
      throw new Error(`Could not find route ${this.currentPath}`);
    }
  }

  getRoute(pathname: string): Route | undefined {
    return this.routes.find((item) => item.matchCheck(pathname));
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }
}
