import { useInView } from 'react-intersection-observer'

export const useIntersectionObserver = () => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false })
  return { ref, inView }
}
