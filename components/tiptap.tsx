"use client";

import "./style.css";
import { useEditor, EditorContent } from "@tiptap/react";
import { Document } from "@tiptap/extension-document";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Text } from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";

export default function Tiptap({ className }: { className?: string }) {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading.configure({ levels: [1, 2, 3] }),
    ],
    content: "<p>Hello World! 🌎️ <br />You can edit me!</p>",
  });

  if (!editor) return null;

  return <EditorContent className={className} editor={editor} />;
}
