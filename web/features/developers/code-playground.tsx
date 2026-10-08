"use client";
import { useState } from "react";
import { Copy, Check, Code2 } from "lucide-react";
const samples = {
  TypeScript:
    'const response = await fetch(\n  "https://api.spiragiving.com/v1/integrations",\n  {\n    headers: {\n      Authorization: `Bearer ${API_KEY}`,\n    },\n  }\n);\n\nconst integrations = await response.json();\n// Illustrative endpoint — not a live API',
  Python:
    'import os\nimport requests\n\nresponse = requests.get(\n    "https://api.spiragiving.com/v1/integrations",\n    headers={\n        "Authorization": f"Bearer {os.environ[\'API_KEY\']}"\n    },\n    timeout=30,\n)\nresponse.raise_for_status()\n# Illustrative endpoint — not a live API',
  cURL: 'curl "https://api.spiragiving.com/v1/integrations" \\\n  -H "Authorization: Bearer $API_KEY"\n\n# Illustrative endpoint — not a live API',
};
function Highlight({ code }: { code: string }) {
  return (
    <>
      {code
        .split(
          /("[^"]*"|'[^']*'|`[^`]*`|\b(?:const|await|import|from)\b|\/\/[^\n]*|#[^\n]*)/g,
        )
        .map((part, i) => (
          <span
            key={i}
            className={
              part.startsWith("//") || part.startsWith("#")
                ? "syntax-muted"
                : /^["'`]/.test(part)
                  ? "syntax-green"
                  : /^(const|await|import|from)$/.test(part)
                    ? "syntax-purple"
                    : ""
            }
          >
            {part}
          </span>
        ))}
    </>
  );
}
export function CodePlayground() {
  const [language, setLanguage] = useState<keyof typeof samples>("TypeScript");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(samples[language]);
      setCopied(true);
      setError("");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError(
        "Copy is unavailable in this browser. Select and copy the code directly.",
      );
    }
  }
  return (
    <div>
      <div className="code-card">
        <div className="code-top">
          <div className="code-tabs" role="group" aria-label="Code language">
            {Object.keys(samples).map((l) => (
              <button
                key={l}
                className={language === l ? "selected" : ""}
                aria-pressed={language === l}
                onClick={() => setLanguage(l as keyof typeof samples)}
              >
                {l}
              </button>
            ))}
          </div>
          <button className="code-copy" onClick={copy}>
            {copied ? <Check size={14} /> : <Copy size={14} />}{" "}
            {copied ? "Copied" : "Copy code"}
          </button>
        </div>
        <pre>
          <code>
            <Highlight code={samples[language]} />
          </code>
        </pre>
        <div className="code-bottom">
          <span>
            <Code2 size={12} /> API architecture example
          </span>
          <span>Production API coming soon</span>
        </div>
      </div>
      {error && (
        <p className="form-status" role="status">
          {error}
        </p>
      )}
      <div className="code-card" style={{ marginTop: 20 }}>
        <div className="code-top">
          <span>Example response</span>
          <span>Illustrative JSON</span>
        </div>
        <pre>
          <code>
            <Highlight
              code={
                '{\n  "data": [\n    { "id": "demo_01", "app": "slack", "status": "demo" }\n  ],\n  "mode": "illustration"\n}'
              }
            />
          </code>
        </pre>
      </div>
    </div>
  );
}
