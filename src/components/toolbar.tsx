"use client"

import { type Editor } from "@tiptap/react"

import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2
} from "lucide-react"
import { Toggle } from "./ui/toggle"

type Props = {
    editor: Editor | null
}


const Toolbar = ({ editor }: Props) => {
    if (!editor) {
        return null
    }
    return (
        <div className="border border-input bg-transparent rounded-br-sm">
            <Toggle
                size={"sm"}
                pressed={editor.isActive("heading")}
                onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
            >
                <Heading2 className="w-4 h-4" />
            </Toggle>
            <Toggle
                size={"sm"}
                pressed={editor.isActive("bold")}
                onPressedChange={() => editor.chain().focus().toggleBold().run()
                }
            >
                <Bold className="w-4 h-4" />
            </Toggle>
            <Toggle
                size={"sm"}
                pressed={editor.isActive("italic")}
                onPressedChange={() => editor.chain().focus().toggleItalic().run()
                }
            >
                <Italic className="w-4 h-4" />
            </Toggle>
            <Toggle
                size={"sm"}
                pressed={editor.isActive("strike")}
                onPressedChange={() => editor.chain().focus().toggleStrike().run()
                }
            >
                <Strikethrough className="w-4 h-4" />
            </Toggle>
            <Toggle
                size={"sm"}
                pressed={editor.isActive("bulletList")}
                onPressedChange={() => editor.chain().focus().toggleBulletList().run()
                }
            >
                <List className="w-4 h-4" />
            </Toggle>
            <Toggle
                size={"sm"}
                pressed={editor.isActive("orderList")}
                onPressedChange={() => editor.chain().focus().toggleOrderedList().run()
                }
            >
                <ListOrdered className="w-4 h-4" />
            </Toggle>
        </div>
    )
}

export default Toolbar