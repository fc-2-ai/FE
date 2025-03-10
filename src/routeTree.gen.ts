/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SideBarLayoutImport } from './routes/_sideBarLayout'
import { Route as HelpPasswordIndexImport } from './routes/help/password/index'
import { Route as AuthSignInIndexImport } from './routes/auth/sign-in/index'
import { Route as AuthLoginIndexImport } from './routes/auth/login/index'
import { Route as SideBarLayoutVideoArchiveIndexImport } from './routes/_sideBarLayout/video-archive/index'
import { Route as SideBarLayoutMyProjectIndexImport } from './routes/_sideBarLayout/my-project/index'
import { Route as SideBarLayoutDashboardIndexImport } from './routes/_sideBarLayout/dashboard/index'
import { Route as AuthCallbackKakaoIndexImport } from './routes/auth/callback/kakao/index'
import { Route as AuthCallbackGoogleIndexImport } from './routes/auth/callback/google/index'
import { Route as SideBarLayoutDashboardComponentsCardImport } from './routes/_sideBarLayout/dashboard/_components/card'

// Create/Update Routes

const SideBarLayoutRoute = SideBarLayoutImport.update({
  id: '/_sideBarLayout',
  getParentRoute: () => rootRoute,
} as any)

const HelpPasswordIndexRoute = HelpPasswordIndexImport.update({
  id: '/help/password/',
  path: '/help/password/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignInIndexRoute = AuthSignInIndexImport.update({
  id: '/auth/sign-in/',
  path: '/auth/sign-in/',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginIndexRoute = AuthLoginIndexImport.update({
  id: '/auth/login/',
  path: '/auth/login/',
  getParentRoute: () => rootRoute,
} as any)

const SideBarLayoutVideoArchiveIndexRoute =
  SideBarLayoutVideoArchiveIndexImport.update({
    id: '/video-archive/',
    path: '/video-archive/',
    getParentRoute: () => SideBarLayoutRoute,
  } as any)

const SideBarLayoutMyProjectIndexRoute =
  SideBarLayoutMyProjectIndexImport.update({
    id: '/my-project/',
    path: '/my-project/',
    getParentRoute: () => SideBarLayoutRoute,
  } as any)

const SideBarLayoutDashboardIndexRoute =
  SideBarLayoutDashboardIndexImport.update({
    id: '/dashboard/',
    path: '/dashboard/',
    getParentRoute: () => SideBarLayoutRoute,
  } as any)

const AuthCallbackKakaoIndexRoute = AuthCallbackKakaoIndexImport.update({
  id: '/auth/callback/kakao/',
  path: '/auth/callback/kakao/',
  getParentRoute: () => rootRoute,
} as any)

const AuthCallbackGoogleIndexRoute = AuthCallbackGoogleIndexImport.update({
  id: '/auth/callback/google/',
  path: '/auth/callback/google/',
  getParentRoute: () => rootRoute,
} as any)

const SideBarLayoutDashboardComponentsCardRoute =
  SideBarLayoutDashboardComponentsCardImport.update({
    id: '/dashboard/_components/card',
    path: '/dashboard/card',
    getParentRoute: () => SideBarLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_sideBarLayout': {
      id: '/_sideBarLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof SideBarLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_sideBarLayout/dashboard/': {
      id: '/_sideBarLayout/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof SideBarLayoutDashboardIndexImport
      parentRoute: typeof SideBarLayoutImport
    }
    '/_sideBarLayout/my-project/': {
      id: '/_sideBarLayout/my-project/'
      path: '/my-project'
      fullPath: '/my-project'
      preLoaderRoute: typeof SideBarLayoutMyProjectIndexImport
      parentRoute: typeof SideBarLayoutImport
    }
    '/_sideBarLayout/video-archive/': {
      id: '/_sideBarLayout/video-archive/'
      path: '/video-archive'
      fullPath: '/video-archive'
      preLoaderRoute: typeof SideBarLayoutVideoArchiveIndexImport
      parentRoute: typeof SideBarLayoutImport
    }
    '/auth/login/': {
      id: '/auth/login/'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/sign-in/': {
      id: '/auth/sign-in/'
      path: '/auth/sign-in'
      fullPath: '/auth/sign-in'
      preLoaderRoute: typeof AuthSignInIndexImport
      parentRoute: typeof rootRoute
    }
    '/help/password/': {
      id: '/help/password/'
      path: '/help/password'
      fullPath: '/help/password'
      preLoaderRoute: typeof HelpPasswordIndexImport
      parentRoute: typeof rootRoute
    }
    '/_sideBarLayout/dashboard/_components/card': {
      id: '/_sideBarLayout/dashboard/_components/card'
      path: '/dashboard/card'
      fullPath: '/dashboard/card'
      preLoaderRoute: typeof SideBarLayoutDashboardComponentsCardImport
      parentRoute: typeof SideBarLayoutImport
    }
    '/auth/callback/google/': {
      id: '/auth/callback/google/'
      path: '/auth/callback/google'
      fullPath: '/auth/callback/google'
      preLoaderRoute: typeof AuthCallbackGoogleIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/callback/kakao/': {
      id: '/auth/callback/kakao/'
      path: '/auth/callback/kakao'
      fullPath: '/auth/callback/kakao'
      preLoaderRoute: typeof AuthCallbackKakaoIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface SideBarLayoutRouteChildren {
  SideBarLayoutDashboardIndexRoute: typeof SideBarLayoutDashboardIndexRoute
  SideBarLayoutMyProjectIndexRoute: typeof SideBarLayoutMyProjectIndexRoute
  SideBarLayoutVideoArchiveIndexRoute: typeof SideBarLayoutVideoArchiveIndexRoute
  SideBarLayoutDashboardComponentsCardRoute: typeof SideBarLayoutDashboardComponentsCardRoute
}

const SideBarLayoutRouteChildren: SideBarLayoutRouteChildren = {
  SideBarLayoutDashboardIndexRoute: SideBarLayoutDashboardIndexRoute,
  SideBarLayoutMyProjectIndexRoute: SideBarLayoutMyProjectIndexRoute,
  SideBarLayoutVideoArchiveIndexRoute: SideBarLayoutVideoArchiveIndexRoute,
  SideBarLayoutDashboardComponentsCardRoute:
    SideBarLayoutDashboardComponentsCardRoute,
}

const SideBarLayoutRouteWithChildren = SideBarLayoutRoute._addFileChildren(
  SideBarLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof SideBarLayoutRouteWithChildren
  '/dashboard': typeof SideBarLayoutDashboardIndexRoute
  '/my-project': typeof SideBarLayoutMyProjectIndexRoute
  '/video-archive': typeof SideBarLayoutVideoArchiveIndexRoute
  '/auth/login': typeof AuthLoginIndexRoute
  '/auth/sign-in': typeof AuthSignInIndexRoute
  '/help/password': typeof HelpPasswordIndexRoute
  '/dashboard/card': typeof SideBarLayoutDashboardComponentsCardRoute
  '/auth/callback/google': typeof AuthCallbackGoogleIndexRoute
  '/auth/callback/kakao': typeof AuthCallbackKakaoIndexRoute
}

export interface FileRoutesByTo {
  '': typeof SideBarLayoutRouteWithChildren
  '/dashboard': typeof SideBarLayoutDashboardIndexRoute
  '/my-project': typeof SideBarLayoutMyProjectIndexRoute
  '/video-archive': typeof SideBarLayoutVideoArchiveIndexRoute
  '/auth/login': typeof AuthLoginIndexRoute
  '/auth/sign-in': typeof AuthSignInIndexRoute
  '/help/password': typeof HelpPasswordIndexRoute
  '/dashboard/card': typeof SideBarLayoutDashboardComponentsCardRoute
  '/auth/callback/google': typeof AuthCallbackGoogleIndexRoute
  '/auth/callback/kakao': typeof AuthCallbackKakaoIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_sideBarLayout': typeof SideBarLayoutRouteWithChildren
  '/_sideBarLayout/dashboard/': typeof SideBarLayoutDashboardIndexRoute
  '/_sideBarLayout/my-project/': typeof SideBarLayoutMyProjectIndexRoute
  '/_sideBarLayout/video-archive/': typeof SideBarLayoutVideoArchiveIndexRoute
  '/auth/login/': typeof AuthLoginIndexRoute
  '/auth/sign-in/': typeof AuthSignInIndexRoute
  '/help/password/': typeof HelpPasswordIndexRoute
  '/_sideBarLayout/dashboard/_components/card': typeof SideBarLayoutDashboardComponentsCardRoute
  '/auth/callback/google/': typeof AuthCallbackGoogleIndexRoute
  '/auth/callback/kakao/': typeof AuthCallbackKakaoIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/dashboard'
    | '/my-project'
    | '/video-archive'
    | '/auth/login'
    | '/auth/sign-in'
    | '/help/password'
    | '/dashboard/card'
    | '/auth/callback/google'
    | '/auth/callback/kakao'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/dashboard'
    | '/my-project'
    | '/video-archive'
    | '/auth/login'
    | '/auth/sign-in'
    | '/help/password'
    | '/dashboard/card'
    | '/auth/callback/google'
    | '/auth/callback/kakao'
  id:
    | '__root__'
    | '/_sideBarLayout'
    | '/_sideBarLayout/dashboard/'
    | '/_sideBarLayout/my-project/'
    | '/_sideBarLayout/video-archive/'
    | '/auth/login/'
    | '/auth/sign-in/'
    | '/help/password/'
    | '/_sideBarLayout/dashboard/_components/card'
    | '/auth/callback/google/'
    | '/auth/callback/kakao/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  SideBarLayoutRoute: typeof SideBarLayoutRouteWithChildren
  AuthLoginIndexRoute: typeof AuthLoginIndexRoute
  AuthSignInIndexRoute: typeof AuthSignInIndexRoute
  HelpPasswordIndexRoute: typeof HelpPasswordIndexRoute
  AuthCallbackGoogleIndexRoute: typeof AuthCallbackGoogleIndexRoute
  AuthCallbackKakaoIndexRoute: typeof AuthCallbackKakaoIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  SideBarLayoutRoute: SideBarLayoutRouteWithChildren,
  AuthLoginIndexRoute: AuthLoginIndexRoute,
  AuthSignInIndexRoute: AuthSignInIndexRoute,
  HelpPasswordIndexRoute: HelpPasswordIndexRoute,
  AuthCallbackGoogleIndexRoute: AuthCallbackGoogleIndexRoute,
  AuthCallbackKakaoIndexRoute: AuthCallbackKakaoIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_sideBarLayout",
        "/auth/login/",
        "/auth/sign-in/",
        "/help/password/",
        "/auth/callback/google/",
        "/auth/callback/kakao/"
      ]
    },
    "/_sideBarLayout": {
      "filePath": "_sideBarLayout.tsx",
      "children": [
        "/_sideBarLayout/dashboard/",
        "/_sideBarLayout/my-project/",
        "/_sideBarLayout/video-archive/",
        "/_sideBarLayout/dashboard/_components/card"
      ]
    },
    "/_sideBarLayout/dashboard/": {
      "filePath": "_sideBarLayout/dashboard/index.tsx",
      "parent": "/_sideBarLayout"
    },
    "/_sideBarLayout/my-project/": {
      "filePath": "_sideBarLayout/my-project/index.tsx",
      "parent": "/_sideBarLayout"
    },
    "/_sideBarLayout/video-archive/": {
      "filePath": "_sideBarLayout/video-archive/index.tsx",
      "parent": "/_sideBarLayout"
    },
    "/auth/login/": {
      "filePath": "auth/login/index.tsx"
    },
    "/auth/sign-in/": {
      "filePath": "auth/sign-in/index.tsx"
    },
    "/help/password/": {
      "filePath": "help/password/index.tsx"
    },
    "/_sideBarLayout/dashboard/_components/card": {
      "filePath": "_sideBarLayout/dashboard/_components/card.tsx",
      "parent": "/_sideBarLayout"
    },
    "/auth/callback/google/": {
      "filePath": "auth/callback/google/index.tsx"
    },
    "/auth/callback/kakao/": {
      "filePath": "auth/callback/kakao/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
