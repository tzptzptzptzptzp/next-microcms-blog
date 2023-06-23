import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const Transition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: .3 } }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Transition