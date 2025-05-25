import { Checkbox } from "@/components/ui/checkbox"

type ListItemProps = {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  deleteMode: boolean;
};

const ListItem = ({ id, text, completed, onToggle, onDelete, deleteMode }: ListItemProps) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="w-6 flex-shrink-0 h-6 flex items-center justify-left ml-6">
        {!deleteMode ? (
        <Checkbox
          className="hover:cursor-pointer"
          checked={completed}
          onCheckedChange={() => onToggle(id)}
        />
        ) : (
          <button
            onClick={() => onDelete(id)}
            className="text-xl hover:cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>
      <p className={`text-sm mr-6 text-left ${completed ? "line-through text-gray-400" : ""}`}>
        {text}
      </p>
    </div>
)
}

export default ListItem