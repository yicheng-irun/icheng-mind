import { FunctionComponent, lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

let cacheRoutes: RouteObject[] = [];

export function getCacheRoutes() {
  return cacheRoutes;
}

export function createRouter({
  pages,
}: {
  pages: Record<string, () => Promise<Record<string, any>>>;
}) {
  const routes: RouteObject[] = [];
  cacheRoutes = routes;

  Object.keys(pages).forEach(path => {
    const match = /^\/src\/pages(.*)\/-page\.tsx$/.exec(path);
    if (match) {
      const name = match[1];
      if (name.toLocaleLowerCase() !== name) {
        console.error(new Error(`请使用小写路径为该路径进行命名:/pages${name}`));
        return;
      }

      let routerPath = name.replace(/\/index$/, '');
      if (routerPath === '/index') {
        routerPath = '';
      }

      routerPath = routerPath.replace(/^\//, '');

      const AsyncComp = lazy(async () => {
        const t = (await (pages[path]())) as { default: FunctionComponent<unknown> };
        return t;
      });

      routes.push({
        path: `${routerPath}`,
        errorElement: <div>出错了</div>,
        element: <AsyncComp />,
      });
    }
  });

  routes.sort((a, b) => ((b.path?.length ?? 0) - (a.path?.length ?? 0)));

  /**
   * 404 页面
   */
  // const NotFoundComp = loadable(async () => import('./pages/error/404/page'), {
  //   fallback: <div />,
  // });
  // routes.push({
  //   path: '*',
  //   errorElement: <div>出错了</div>,
  //   element: <NotFoundComp />,
  // });

  const router = createBrowserRouter(routes, {
    basename: import.meta.env.BASE_URL || '/',
  });

  return {
    router,
    routes,
  };
}
