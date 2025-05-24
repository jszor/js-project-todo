import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button }from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ListItem from "./ListItem"
import EmptyState from "./EmptyState"
import useTodoStore from "../../stores/useToDoStore"

const Main = () => {

  const [text, setText] = useState("");
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="min-h-screen bg-secondary-background bg-grid-light flex flex-col items-center">
      <Card className="m-12 w-7/10 gap-3">
        <h2 className="text-xl flex justify-center mb-1">Tasks:</h2>

        <Input
          placeholder="E.g. clean the house"
          className="w-5/6 mx-auto"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="mx-5 mb-4" onClick={handleAdd}>Add</Button>

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
              />
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}

export default Main