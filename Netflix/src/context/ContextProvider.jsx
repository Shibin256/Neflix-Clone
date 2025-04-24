import myContext from './myContext'

const ContextProvider = ({children}) => {
    const logState='Sign In'
  return (
    <div>
      <myContext.Provider value={{ logState }}>
        {children}
      </myContext.Provider>
    </div>
  )
}

export default ContextProvider
