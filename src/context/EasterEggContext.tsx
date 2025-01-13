"use client"

import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, FC } from 'react'

interface EasterEggContextType {
    showEasterEggMessage: boolean
    setShowEasterEggMessage: Dispatch<SetStateAction<boolean>>,
}

const EasterEggContext = createContext<EasterEggContextType | undefined>(undefined)

interface EasterEggProviderProps {
    children: ReactNode
}

export const EasterEggProvider: FC<EasterEggProviderProps> = ({ children }) => {
    const [showEasterEggMessage, setShowEasterEggMessage] = useState(false)

    return (
        <EasterEggContext.Provider value={{ showEasterEggMessage, setShowEasterEggMessage }}>
            {children}
        </EasterEggContext.Provider>
    )
}

// Custom hook to use the context
export const useEasterEgg = (): EasterEggContextType => {
    const context = useContext(EasterEggContext)
    if (!context) {
        throw new Error('useEasterEgg must be used within an EasterEggProvider')
    }
    return context
}
