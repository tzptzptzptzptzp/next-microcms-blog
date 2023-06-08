import { useState, useEffect } from 'react'

const useCurrentPage = () => {
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    const handlePageChange = () => {
      const path = location.pathname // 現在のパスを取得
      setCurrentPage(path)
    };

    // 初期表示時にパスを取得
    handlePageChange()

    // ページ変更のイベントリスナーを追加
    addEventListener('popstate', handlePageChange)

    // コンポーネントのアンマウント時にイベントリスナーをクリーンアップ
    return () => {
      removeEventListener('popstate', handlePageChange)
    }
  }, [])

  return currentPage.trim() !== '' ? currentPage : null
}

export default useCurrentPage
