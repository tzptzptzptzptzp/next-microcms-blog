import { useRef, useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { headerHeightState } from '../states/headerHeightState'

const useElementHeight = (): [React.RefObject<HTMLElement>, number] => {
  const elementRef = useRef<HTMLElement>(null)
  const [elementHeight, setElementHeight] = useRecoilState(headerHeightState)

  useEffect(() => {
    const getElementHeight = () => {
      const currentElement = elementRef.current
      if (currentElement) {
        setElementHeight(currentElement.clientHeight)
      }
    }
    getElementHeight()

    const resizeObserver = new ResizeObserver(getElementHeight)
    const observedElement = elementRef.current
    if (observedElement) {
      resizeObserver.observe(observedElement)
    }

    return () => {
      const cleanupElement = observedElement
      if (cleanupElement) {
        resizeObserver.unobserve(cleanupElement)
      }
    }
  }, [elementRef, setElementHeight])

  return [elementRef, elementHeight]
}

export default useElementHeight
