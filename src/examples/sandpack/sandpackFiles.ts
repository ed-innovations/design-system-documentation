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
    { id: "text-input", title: "TextInput", appFsPath: "/src/examples/text-input/App.tsx" },
    { id: "signup", title: "Signup", appFsPath: "/src/examples/signup/App.tsx" },
    { id: "listing", title: "Listing", appFsPath: "/src/examples/listing/App.tsx" },
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
