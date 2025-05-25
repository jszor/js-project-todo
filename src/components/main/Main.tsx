import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import useTodoStore from "../../stores/useTodoStore"
import EmptyState from "./EmptyState"
import ListItem from "./ListItem"

const Main = () => {

  const [text, setText] = useState("");
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const toggleDeleteMode = useTodoStore((state) => state.toggleDeleteMode);
  const deleteMode = useTodoStore((state) => state.deleteMode);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="min-h-screen bg-secondary-background bg-grid-light flex flex-col items-center">
      <Card className="m-12 w-7/10 gap-3">
        <h2 className="text-xl flex justify-center mb-1">Tasks ({todos.length})</h2>

        <Input
          placeholder="E.g. clean the house"
          className="w-5/6 mx-auto"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex gap-2 mx-5">
          <Button className="mb-4 w-3/4" onClick={handleAdd}>Add (+)</Button>
          <Button className="w-1/4 bg-orange-400" disabled={todos.length === 0} onClick={toggleDeleteMode}>{deleteMode ? "⬅" : "Del"}</Button>
        </div>

        {todos.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-2">
            {todos.map((todo) => (
              <ListItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                onToggle={toggleTodo}
                onDelete={removeTodo}
                deleteMode={deleteMode}
              />
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}

export default Main