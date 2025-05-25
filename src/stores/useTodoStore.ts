import { create } from 'zustand'

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoState = {
  todos: Todo[];
  deleteMode: boolean;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  toggleDeleteMode: () => void;
};

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  deleteMode: false,
  toggleDeleteMode: () =>
    set((state: TodoState): Partial<TodoState> => ({ 
      deleteMode: !state.deleteMode 
    })),
  addTodo: (text) => 
    set((state) => ({
      todos: [{id: Date.now(), text, completed: false}, ...state.todos],
      deleteMode: false,
    })),
  removeTodo: (id) =>
    set((state) => {
    const updatedTodos = state.todos.filter((todo) => todo.id !== id);
    return {
      todos: updatedTodos,
      deleteMode: updatedTodos.length === 0 ? false : state.deleteMode,
    };
  }),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}))

export default useTodoStore