import { useRef } from "react";
import "./index.scss";
import SvgIcon from "@/components/SvgIcon";
import type { Note } from "..";

type propsType = {
  note: Note;
  deleteNote: (id: number) => void;
  saveNote: (note: Note) => void;
};

export default function Notes(props: propsType) {
  const { note, deleteNote, saveNote } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);
  // localstorage 中的存储形式
  // [ { id: 1, content: 'hello world' }, { id: 2, content: 'hello world' } ]
  // 保存笔记
  const save = () => {
    const content = textareaRef.current!.value;
    note.content = content;
    // 创建 note 对象
    const noteObj = JSON.stringify(note);
    // localstorage 中存储笔记数组
    const notes = localStorage.getItem("notes");
    if (notes) {
      const notesArr = JSON.parse(notes);
      notesArr.push(noteObj);
      localStorage.setItem("notes", JSON.stringify(notesArr));
    } else {
      localStorage.setItem("notes", JSON.stringify([]));
    }
    // 通知父元素向 localstorage 中添加笔记
    saveNote(note);
  };
  // 删除笔记
  const remove = () => {
    const notes = localStorage.getItem("notes");
    if (notes) {
      const notesArr = JSON.parse(notes);
      const index = notesArr.findIndex((item: any) => item.id === note.id);
      notesArr.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesArr));
    }
    deleteNote(note.id);
    noteRef.current!.style.display = "none";
  };

  return (
    <div className="notes-wrap" ref={noteRef}>
      <div className="header">
        <div className="right-header">
          <div className="edit-wrap" onClick={save}>
            <SvgIcon name="edit" color="#fff" size="20px" />
          </div>
          <div className="delete-wrap" onClick={remove}>
            <SvgIcon name="delete" color="#fff" size="20px" />
          </div>
        </div>
      </div>
      <div className="white-pad">
        <textarea ref={textareaRef}>{note.content}</textarea>
      </div>
    </div>
  );
}
