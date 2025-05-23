import { Card } from "@/components/ui/card"
import { Button }from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

const Main = () => {
  return (
    <div className="min-h-screen bg-secondary-background bg-grid-light flex flex-col items-center">
      <Card className="m-12 w-7/10">
        <h2 className="text-xl flex justify-center">Tasks:</h2>
        <Input placeholder="What needs to be done?" className="w-5/6 mx-auto" />
        <div className="bg-secondary-background p-3 mx-4 flex flex-row items-center gap-2 border-2 rounded-[5px]">
          <Checkbox className="mx-auto" />
          <p className="mx-auto text-sm">Mark as done</p>
        </div>
        <Button className="mx-5">
          Add
        </Button>
      </Card>
    </div>
  )
}

export default Main