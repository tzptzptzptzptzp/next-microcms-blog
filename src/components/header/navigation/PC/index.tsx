export function PCNavigation() {
  return (
    <nav className="h-full block">
      <ul className="flex gap-16 h-full text-[2.5rem]">
        <li>
          <a href="#" className="h-circle">トップ</a>
        </li>
        <li>
          <a href="#recipe" className="h-circle">レシピ</a>
        </li>
        <li>
          <a href="#js" className="h-circle">JavaScript</a>
        </li>
        <li>
          <a href="#css" className="h-circle">CSS</a>
        </li>
        <li>
          <a href="#html" className="h-circle">HTML</a>
        </li>
      </ul>
    </nav>
  )
}