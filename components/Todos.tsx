import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  status: boolean;
};

export const Todos = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          setTodos([
            ...todos,
            { id: Math.random(), status: false, title: text },
          ]);
        }}
      >
        Add todo
      </button>
      <div>
        {todos.map((t) => (
          <div key={t.id}>
            {t.title}-{t.status ? "Done" : "Not Done"}
          </div>
        ))}
      </div>
    </div>
  );
};
