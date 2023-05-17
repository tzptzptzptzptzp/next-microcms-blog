import { useState, useEffect } from 'react';

const useCurrentPage = () => {
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const handlePageChange = () => {
      const path = location.pathname; // 現在のパスを取得
      setCurrentPage(path);
    };

    // ページ変更のイベントリスナーを追加
    addEventListener('popstate', handlePageChange);

    // コンポーネントのアンマウント時にイベントリスナーをクリーンアップ
    return () => {
      removeEventListener('popstate', handlePageChange);
    };
  }, []);

  return currentPage;
};

export default useCurrentPage;
