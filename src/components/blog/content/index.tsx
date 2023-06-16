import Parser from 'html-react-parser'
import { Blog } from "../../../type/blog"

type Blogs = {
  blog: Blog
}

export function Content({ blog }: Blogs) {
  const regex = /https:\/\/cdn(.*?)&schema=codepen/g
  const matches = blog.body.match(regex)
  let replacedContent = blog.body

  if (matches) {
    for (const match of matches) {
      const ID = /preview%2F(.*?)%3F/.exec(match)
      const replacement = `https://codepen.io/tzptzptzptzptzp/embed/${ID![1]}?default-tab=js%2Cresult`
      replacedContent = replacedContent.replace(match, replacement)
    }
  }

  return (
    <main className='px-8 s:px-6 leading-loose s:leading-relaxed'>
      <div className='w-[70%] s:w-full max-w-[1536px] m-auto'>
        {Parser(replacedContent)}
      </div>
    </main>
  )
}