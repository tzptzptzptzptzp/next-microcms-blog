import { Blog } from "../../../type/blog"
import { Comment } from "../../../type/comment"
import { CommentsList } from "./list"
import { Form } from "./form"

type Props = {
  blog: Blog
  comments: null | Comment[]
}

export function Comments({ blog, comments }: Props) {
  return (
    <div className='mb-24 s:mb-12 px-8 s:px-6'>
      <div className='w-[60%] s:w-full max-w-[1536px] m-auto'>

        <h2 className="mb-12 s:mb-6 text-[2.7rem] s:text-4xl text-center">ー コメント ー</h2>

        <CommentsList comments={comments}></CommentsList>

        <Form blog={blog}></Form>

      </div>
    </div>
  )
}
