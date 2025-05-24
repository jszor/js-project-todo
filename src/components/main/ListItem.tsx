import { Checkbox } from "@/components/ui/checkbox"

type ListItemProps = {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
};

const ListItem = ({ id, text, completed, onToggle }: ListItemProps) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <Checkbox 
        className="ml-6"
        checked={completed}
        onCheckedChange={() => onToggle(id)}
      />
      <p className={`text-sm mr-6 text-left ${completed ? "line-through text-gray-400" : ""}`}>
        {text}
      </p>
    </div>
)
}

export default ListItem