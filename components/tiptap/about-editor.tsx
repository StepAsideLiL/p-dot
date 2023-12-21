import { type Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export const TipTapEditor = ({
  about,
  onChange,
}: {
  about: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: about,
    editorProps: {
      attributes: {
        class: "p-2 border border-black rounded",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  return (
    <div className="space-y-3">
      <Menubar editor={editor} />

      <EditorContent editor={editor} />
    </div>
  );
};

const Menubar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="p-1 border border-gray-500 rounded">
      <Toggle
        variant="outline"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  );
};
