import Item from "./Item"
import { members } from "@/context/data"

export default function ItemsContainer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-5 py-16 mx-auto">
      {members.map((member, index) => (
        <Item key={index} {...member} />
      ))}
    </div>
  )
}
