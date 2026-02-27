import { useMemo, useState } from "react";
import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview,
    SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import { buildSandpackFiles, examples } from "./examples/sandpack/sandpackFiles";

export function PlaygroundSandpack() {
    const [selectedId, setSelectedId] = useState(examples[0].id);
    const [filesOpen, setFilesOpen] = useState(true);

    const example = useMemo(
        () => examples.find((e) => e.id === selectedId) ?? examples[0],
        [selectedId]
    );

    const files = useMemo(
        () => buildSandpackFiles(example.appFsPath),
        [example.appFsPath]
    );

    return (
        <div style={{ padding: 16, display: "grid", gap: 12 }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                }}
            >
                <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    Component
                    <select
                        value={selectedId}
                        onChange={(e) => setSelectedId(e.target.value)}
                        style={{ height: 34 }}
                    >
                        {examples.map((e) => (
                            <option key={e.id} value={e.id}>
                                {e.title}
                            </option>
                        ))}
                    </select>
                </label>
                <button
                    type="button"
                    onClick={() => setFilesOpen((v) => !v)}
                    style={{
                        height: 34,
                        padding: "0 10px",
                        borderRadius: 10,
                        border: "1px solid rgba(0,0,0,0.12)",
                        background: "#fff",
                        cursor: "pointer",
                    }}
                >
                    {filesOpen ? "Hide files" : "Show files"}
                </button>

            </div>

            <SandpackProvider
                template="react-ts"
                files={files}
                key={example.id}
                options={{
                    autorun: true,
                    autoReload: true,
                }}
            >
                <SandpackLayout className={"sandpack-layout"}
                    style={{
                        height: "calc(100vh - 92px)",
                        display: "grid",
                        gridTemplateColumns: filesOpen
                            ? "220px minmax(0, 1.2fr) minmax(0, 1fr)"
                            : "0px minmax(0, 1.2fr) minmax(0, 1fr)",
                        overflow: "hidden",
                        borderRadius: 14,
                        border: "1px solid rgba(0,0,0,0.08)",
                        background: "#fff",
                    }}
                >
                    {/* File explorer */}
                    <div
                        style={{
                            borderRight: "1px solid rgba(0,0,0,0.06)",
                            overflow: "auto",
                            display: filesOpen ? "block" : "none",
                        }}
                    >
                        <SandpackFileExplorer />
                    </div>

                    {/* Code editor */}
                    <div
                        style={{
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <SandpackCodeEditor
                            showTabs
                            showLineNumbers
                            style={{
                                flex: 1,
                                overflow: "auto",
                            }}
                        />
                    </div>

                    {/* Preview */}
                    <div
                        style={{
                            borderLeft: "1px solid rgba(0,0,0,0.06)",
                            background: "#f6f7fb",
                            overflow: "auto",
                        }}
                    >
                        <SandpackPreview style={{ height: "100%" }} />
                    </div>
                </SandpackLayout>

            </SandpackProvider>
        </div>
    );
}
