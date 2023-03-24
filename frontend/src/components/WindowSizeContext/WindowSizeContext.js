import { createContext, useContext, useEffect, useState } from "react";

const WindowSizeContext = createContext({})

const WindowSizeProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const handleResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <WindowSizeContext.Provider value={{ width, height }}>
      {children}
    </WindowSizeContext.Provider>
  )
}

const useWindowSize = () => {
  const { width, height } = useContext(WindowSizeContext)
  return { width, height }
}

export { WindowSizeProvider, useWindowSize }