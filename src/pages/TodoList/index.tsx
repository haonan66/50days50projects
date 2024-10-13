import { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import './index.scss';


type TodoType = {
  id: string,
  content: string,
  completed: boolean
}

export default function TodoList() {

  const todoRef = useRef<HTMLInputElement>(null);
  const [todoList, setTodoList] = useState<TodoType[]>(JSON.parse(localStorage.getItem('todoList') || '[]'));

  // 添加 todo
  const addTodo = (e: React.KeyboardEvent) => {
    // 如果输入的是回车则新增 todo
    if (e.key === 'Enter' && e.code === 'Enter') {
      if (todoRef.current && todoRef.current.value.trim() !== '') {
        const value = todoRef.current.value;
        const todo = {
          id: nanoid(),
          content: value,
          completed: false
        }
        // 新加入的 todo 要放在最开始
        setTodoList([todo, ...todoList]);
        localStorage.setItem('todoList', JSON.stringify([todo, ...todoList]));
        // 清空输入框
        todoRef.current.value = '';
      }
    }
  }

  const toggleTodo = (id: string) => {
    // 左键
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    })
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  }

  // onContextMenu 监听鼠标的右击事件
  const deleteTodo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
    e.preventDefault();
    // 右键
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  }

  return (
    <div className='todo-list-wrap'>
      <h1 className="todo-list-title">
        todos
      </h1>
      <div className="todo-list-content">
        <input type="text" placeholder='Enter your todo' ref={todoRef} onKeyDown={(e) => addTodo(e)} />
        {
          todoList.map(item => (
            // 如果已完成，则将 todo 的文字内容改为划线
            <div
              key={item.id}
              style={{ textDecoration: item.completed ? 'line-through' : '', color: item.completed ? '#999' : '#333' }}
              onClick={() => toggleTodo(item.id)}
              onContextMenu={(e) => deleteTodo(e, item.id)}
            >
              {item.content}
            </div>
          ))
        }
      </div>
      <p className="todo-list-footer">
        Left click to toggle completed. <br />
        Right click to delete todo
      </p>
    </div>
  )
}
