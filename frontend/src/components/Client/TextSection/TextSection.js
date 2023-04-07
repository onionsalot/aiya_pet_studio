const TextSection = ({title, content}) => {
  return (
    <div className="h-14">
      <span className="text-xl pt-3">{title}</span>
      <p className="line-clamp-4 md:line-clamp-6">{content}</p>
    </div>
  )
}

export default TextSection