import Tiptap from "@/components/tiptap";
import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background max-w-screen-md mx-auto">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-14 items-center px-4">
          <div className="flex items-center space-x-2">
            <FileIcon className="h-6 w-6" />
            <h1 className="font-semibold">Document Editor</h1>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Save
            </Button>
            <Button size="sm">Share</Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="container py-6">
        {/* Document title */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Untitled Document"
            className="w-full border-none bg-transparent text-2xl font-bold outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Editor wrapper */}
        <Tiptap className="*:bg-transparent *:outline-none *:border-none *:ring-0" />

        {/* Word count and other metadata */}
        <div className="mt-4 text-sm text-muted-foreground">
          <p>Last edited: Just now</p>
        </div>
      </div>
    </main>
  );
}
