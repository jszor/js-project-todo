import { Card } from "@/components/ui/card"
import { Button }from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ListItem from "./ListItem"
import EmptyState from "./EmptyState"

const Main = () => {
  return (
    <div className="min-h-screen bg-secondary-background bg-grid-light flex flex-col items-center">
      <Card className="m-12 w-7/10 gap-3">
        <h2 className="text-xl flex justify-center mb-1">Tasks:</h2>
        <Input placeholder="E.g. clean the house" className="w-5/6 mx-auto" />
        <Button className="mx-5 mb-4">
          Add
        </Button>
        <EmptyState />
      </Card>
    </div>
  )
}

export default Main