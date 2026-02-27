type SandpackFile = { code: string };

function toSandpackPath(fsPath: string) {
    const idx = fsPath.indexOf("/src/");
    return idx >= 0 ? fsPath.slice(idx + "/src".length) : fsPath;
}

function globToFiles(glob: Record<string, string>) {
    const out: Record<string, SandpackFile> = {};
    for (const [path, code] of Object.entries(glob)) {
        out[toSandpackPath(path)] = { code };
    }
    return out;
}

const componentSources = import.meta.glob<string>(
    "/src/components/**/*.{ts,tsx,css}",
    { query: "?raw", import: "default", eager: true }
);

const exampleApps = import.meta.glob<string>(
    "/src/examples/*/App.tsx",
    { query: "?raw", import: "default", eager: true }
);

const sandpackSupportFiles = import.meta.glob<string>(
    "/src/examples/sandpack/*.css",
    { query: "?raw", import: "default", eager: true }
);

export type ExampleMeta = { id: string; title: string; appFsPath: string };

export const examples: ExampleMeta[] = [
    { id: "button", title: "Button", appFsPath: "/src/examples/button/App.tsx" },
    { id: "card-cta", title: "Card CTA", appFsPath: "/src/examples/card-cta/App.tsx" },
    { id: "card-lg", title: "Card Large", appFsPath: "/src/examples/card-lg/App.tsx" },
    { id: "confirmation-box", title: "Confirmation Box", appFsPath: "/src/examples/confirmation-box/App.tsx" },
    { id: "header-banner", title: "Header Banner", appFsPath: "/src/examples/header-banner/App.tsx" },
    { id: "listing", title: "Listing", appFsPath: "/src/examples/listing/App.tsx" },
    { id: "login", title: "Login", appFsPath: "/src/examples/login/App.tsx" },
    { id: "notification", title: "Notification", appFsPath: "/src/examples/notification/App.tsx" },
    { id: "popup", title: "Popup", appFsPath: "/src/examples/popup/App.tsx" },
    { id: "signup", title: "Signup", appFsPath: "/src/examples/signup/App.tsx" },
    { id: "text-input", title: "TextInput", appFsPath: "/src/examples/text-input/App.tsx" },
    { id: "toast", title: "Toast", appFsPath: "/src/examples/toast/App.tsx" },
    { id: "toggle", title: "Toggle", appFsPath: "/src/examples/toggle/App.tsx" },
    { id: "upload", title: "Upload", appFsPath: "/src/examples/upload/App.tsx" },
];

export function buildSandpackFiles(appFsPath: string) {
    const shared = {
        ...globToFiles(componentSources),
        ...globToFiles(sandpackSupportFiles),
    };

    const appCode = exampleApps[appFsPath];
    if (!appCode) throw new Error(`Missing example App at: ${appFsPath}`);

    return {
        ...shared,
        "/App.tsx": { code: appCode },
    };
}
