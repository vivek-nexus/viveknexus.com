"use client"

import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, FC } from 'react'

interface GlobalContextType {
    showEasterEggMessage: boolean
    setShowEasterEggMessage: Dispatch<SetStateAction<boolean>>,
    tooltipInvokedCount: number,
    setTooltipInvokedCount: Dispatch<SetStateAction<number>>,
    isTouchDevice: boolean,
    setIsTouchDevice: Dispatch<SetStateAction<boolean>>,
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

interface GlobalContextProviderProps {
    children: ReactNode
}

export const GlobalContextProvider: FC<GlobalContextProviderProps> = ({ children }) => {
    const [showEasterEggMessage, setShowEasterEggMessage] = useState(false)
    const [tooltipInvokedCount, setTooltipInvokedCount] = useState(0)
    const [isTouchDevice, setIsTouchDevice] = useState(false)

    return (
        <GlobalContext.Provider value={{
            showEasterEggMessage,
            setShowEasterEggMessage,
            tooltipInvokedCount,
            setTooltipInvokedCount,
            isTouchDevice,
            setIsTouchDevice
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

// Custom hook to use the GlobalContext
export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error('This must be used within a GlobalContextProvider')
    }
    return context
}
