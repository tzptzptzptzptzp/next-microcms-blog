import React, { useState } from "react"
import { Blog } from "../../../../type/blog"

type Props = {
  blog: Blog
}

export function Form({ blog }: Props) {
  const [comment, setComment] = useState('')
  const [userName, setUserName] = useState('')
  const [consent, setConsent] = useState(false)
  const [posted, setPosted] = useState(false)
  const [commentError, setCommentError] = useState(false)
  const [userNameError, setUserNameError] = useState(false)
  const [commentEmpty, setCommentEmpty] = useState(false)
  const [userNameEmpty, setUserNameEmpty] = useState(false)

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsent(e.target.checked)
  }

  const commentChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.slice(0, 250)
    setComment(value)
    setCommentEmpty(false)
    if (value.length >= 250) {
      setCommentError(true)
    }
  }

  const userNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, 20)
    setUserName(value)
    setUserNameEmpty(false)
    if (value.length >= 20) {
      setUserNameError(true)
    }
  }

  const submitHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (consent && comment && userName) {
      const fetchData = async () => {
        const form = new FormData()
        form.append('postId', blog.id)
        form.append('userName', userName)
        form.append('comment', comment)
        try {
          await fetch(`https://tzp.pink/arekore-api/api/create/`, {
            method: 'POST',
            body: form
          })
          setUserName('')
          setComment('')
          setPosted(true)
          setCommentError(false)
          setUserNameError(false)
        } catch (err) {
          console.error('Error fetching data:', err)
        }
      }
      fetchData()
    } else {
      if (!comment) {
        setCommentEmpty(true)
      }
      if (!userName) {
        setUserNameEmpty(true)
      }
    }
  }

  return (
    <>
      {posted ? <p className="mb-4 text-center leading-tight">コメントを受け付けました。<br className="sp_only" />コメントは１分程度で反映されます。</p> : null}
      {commentError ? <p className="mb-4 text-center leading-tight text-[red]">コメントは250字以内です。</p> : null}
      {userNameError ? <p className="mb-4 text-center leading-tight text-[red]">名前は20字以内です。</p> : null}
      {commentEmpty ? <p className="mb-4 text-center leading-tight text-[red]">コメントを入力してください。</p> : null}
      {userNameEmpty ? <p className="mb-4 text-center leading-tight text-[red]">名前を入力してください。</p> : null}
      <form className="input_form ajax_form flex flex-wrap items-center justify-between" method="POST">
        <input type="hidden" name="postId" value={blog.id} />
        <textarea className="w-full h-24 s:h-40 mb-4 p-2 border-[3px] rounded-2xl" name="comment" placeholder="コメント" value={comment} onChange={commentChangeHandler} />
        <input className="w-1/2 s:w-full s:mb-4 p-2 border-[3px] rounded-2xl" type="text" name="userName" placeholder="名前" value={userName} onChange={userNameChangeHandler} />
        <div className="flex items-center s:justify-center gap-4 s:w-full">
          <input type="checkbox" id="check" onChange={checkHandler} style={{ transform: 'translateY(1.5px)' }} />
          <label htmlFor="check">
            <a href="../tos/" className="border-b-2" target="_blank" rel="noopener noreferrer">利用規約</a>
            に同意する
          </label>
          <button className={`px-6 py-4 rounded-2xl bg-text ${consent == false ? 'opacity-30' : null} text-bg`} type="submit" onClick={submitHandler}>送信</button>
        </div>
      </form>
    </>
  )
}
