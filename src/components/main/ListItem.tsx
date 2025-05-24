import { Checkbox } from "@/components/ui/checkbox"

const ListItem = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <Checkbox className="ml-6" />
      <p className="text-sm mr-6 text-left">Mark as done or whatever you think is good for example.</p>
    </div>
)
}

export default ListItem