"use client";

import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { Copy, Check } from "lucide-react";

const CodeSnippet: React.FC<codeSnippetInterface> = ({ code, language }) => {
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = useRef<number>(0);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="relative group rounded-lg overflow-hidden bg-gray-900 my-4 text-sm z-0">
      <div className="absolute right-2 top-2">
        <button
          onClick={handleCopy}
          className="p-2 transition-colors duration-200 text-slate-400 hover:text-background"
          title="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>
      <pre className="!m-0 p-4">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;

export const SmallCode: React.FC<snippetInterface> = ({ code }) => {
  return (
    <>
      &nbsp;
      <code className="bg-gray p-1 rounded text-sm">{code}</code>&nbsp;
    </>
  );
};
