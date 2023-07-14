import { Comment } from "../../../../type/comment"

type Props = {
  comments: null | Comment[]
}

export function CommentsList({ comments }: Props) {

  const content = () => {
    if (comments?.length! > 0) {
      return <>
        {
          comments?.map((comment) => (
            <div key={comment.id} className="p-4" style={{ borderLeft: '3px solid #EBDFDF', background: 'rgba( 253 , 251 , 251, .3 )' }}>
              <p className="mb-4 text-[1.8rem] leading-relaxed break-words">{comment.comment}</p>
              <div className="flex justify-end gap-4 text-xl">
                <p>{comment.user_name}</p>
                <p className="opacity-50">{comment.formatted_created_at}</p>
              </div>
            </div>
          ))
        }
      </>
    } else {
      return <p className="text-center">まだコメントはありません</p>
    }
  }

  return (
    <div className="flex flex-col gap-16 s:gap-6 mb-16 s:mb-8">
      {content()}
    </div>
  )
}