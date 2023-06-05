import { useRef, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { headerHeightState } from '../states/headerHeightState';

const useElementHeight = (): [React.RefObject<HTMLElement>, number] => {
  const elementRef = useRef<HTMLElement>(null);
  const [elementHeight, setElementHeight] = useRecoilState(headerHeightState);

  useEffect(() => {
    const getElementHeight = () => {
      if (elementRef.current) {
        setElementHeight(elementRef.current.clientHeight);
      }
    };

    getElementHeight(); // 初回レンダリング時に要素の高さを取得する

    const resizeObserver = new ResizeObserver(getElementHeight);
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current); // 要素のリサイズを監視する
    }

    return () => {
      if (elementRef.current) {
        resizeObserver.unobserve(elementRef.current); // コンポーネントがアンマウントされたときに監視を停止する
      }
    };
  }, [elementRef]);

  return [elementRef, elementHeight];
};

export default useElementHeight;
