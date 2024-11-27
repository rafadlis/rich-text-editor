import Tiptap from "@/components/tiptap";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background max-w-screen-md mx-auto">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6" />
            <h1>Rich Text Editor</h1>
            <div className="text-xs text-muted-foreground font-mono">
              v0.0.0-alpha for testing
            </div>
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
            placeholder="Write the title here..."
            className="w-full border-none bg-transparent text-4xl font-bold outline-none placeholder:text-muted-foreground/60"
          />
        </div>

        {/* Editor wrapper */}
        <Tiptap className="*:bg-transparent *:outline-none *:border-none *:ring-0" />
      </div>
    </main>
  );
}
