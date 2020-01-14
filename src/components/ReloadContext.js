import React from 'react'

const ReloadContext = React.createContext({})
export const ReloadProvider = ReloadContext.Provider
export const ReloadConsumer = ReloadContext.Consumer
export default ReloadContext;