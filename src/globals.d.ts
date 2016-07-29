
//globals
declare var __DEVELOPMENT__: boolean;
declare var __DEVTOOLS__: boolean;
declare var __webpack_public_path__: string;

// Add hot module reloading
declare interface NodeModule {
    hot?: {
        accept: (path?: string | string[], callback?: () => void) => void;
        decline: (dependencies?: string | string[]) => void;
        dispose: (callback: (data: any) => void) => void;
        addDisposeHandler: (callback: (data: any) => void) => void;
        removeDisposeHandler: (callback: (data: any) => void) => void;
        data: {
            [key: string]: any
        };

    };
}

interface Styles {
    [key: string]: boolean
}
interface StyleFunc {
    (...args: (Styles|string|((Styles|string)[]))[]): string
}

declare namespace ReactRouter {
    interface IndexRouteProps {
        name?: string
    }
    interface RouteProps {
        name?: string
    }
}
