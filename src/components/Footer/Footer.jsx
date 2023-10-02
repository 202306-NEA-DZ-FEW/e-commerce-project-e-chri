import ItemsContainer from "@/components/Footer/ItemsContainer"

export default function Footer() {
  const current_year = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="dark:bg-OxfordBlue bg-DarkWhite dark:text-white text-black h-50 bottom-0 w-full"
    >
      <ItemsContainer />
      <div className="text-center pt-2 text-gray-400 text-sm pb-8">
        <span>Copyright © {current_year}. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
