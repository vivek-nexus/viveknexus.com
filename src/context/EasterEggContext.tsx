"use client"

import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, FC } from 'react'

interface EasterEggContextType {
    showEasterEggMessage: boolean
    setShowEasterEggMessage: Dispatch<SetStateAction<boolean>>,
    tooltipInvokedCount: number,
    setTooltipInvokedCount: Dispatch<SetStateAction<number>>
}

const EasterEggContext = createContext<EasterEggContextType | undefined>(undefined)

interface EasterEggProviderProps {
    children: ReactNode
}

export const EasterEggProvider: FC<EasterEggProviderProps> = ({ children }) => {
    const [showEasterEggMessage, setShowEasterEggMessage] = useState(false)
    const [tooltipInvokedCount, setTooltipInvokedCount] = useState(0)

    return (
        <EasterEggContext.Provider value={{ showEasterEggMessage, setShowEasterEggMessage, tooltipInvokedCount, setTooltipInvokedCount }}>
            {children}
        </EasterEggContext.Provider>
    )
}

// Custom hook to use the EasterEggContext
export const useEasterEgg = (): EasterEggContextType => {
    const context = useContext(EasterEggContext)
    if (!context) {
        throw new Error('useEasterEgg must be used within an EasterEggProvider')
    }
    return context
}
