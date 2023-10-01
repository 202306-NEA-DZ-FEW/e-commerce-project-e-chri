import Item from "./Item"
import { members } from "@/context/data"

export default function ItemsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-6 sm:px-8 px-5 py-16 mx-auto">
      {members.map((member, index) => (
        <Item key={index} {...member} />
      ))}
    </div>
  )
}
