import { type Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";
import {
  Bold,
  Heading,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
} from "lucide-react";
import { useCallback } from "react";

export const TipTapEditor = ({
  about,
  onChange,
}: {
  about: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1],
          HTMLAttributes: { class: "text-xl font-bold", level: 1 },
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
          HTMLAttributes: {
            class: "list-disc list-inside",
          },
          // itemTypeName: "text",
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: true, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
          HTMLAttributes: {
            class: "list-decimal list-inside",
          },
        },
      }),
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          class: "underline cursor-pointer",
        },
      }),
    ],
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

      <EditorContent editor={editor} className="" />
    </div>
  );
};

const Menubar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    console.log(url);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className="p-1 border border-gray-500 rounded flex flex-wrap justify-start items-center gap-1">
      <Toggle
        variant="outline"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading className="h-4 w-4" />
      </Toggle>

      <Toggle
        variant="outline"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>

      <Toggle
        variant="outline"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>

      <Toggle
        variant="outline"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>

      <Toggle
        variant="outline"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>

      <Toggle
        variant="outline"
        pressed={editor.isActive("link")}
        onPressedChange={() => setLink()}
      >
        <LinkIcon className="h-4 w-4" />
      </Toggle>
    </div>
  );
};
