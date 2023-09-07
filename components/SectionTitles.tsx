interface SectionTitleProps{
    title: string
}
const SectionTitles = ({title}:SectionTitleProps) => {
  return (
   <h2 className="flex font-titleFont text-2xl font-semibold items-center">
    {title}
    <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
   </h2>
  )
}

export default SectionTitles
