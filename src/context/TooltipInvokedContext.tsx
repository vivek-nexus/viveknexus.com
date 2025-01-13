"use client"

import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, FC } from 'react'

interface TooltipInvokedContextType {
    tooltipInvokedCount: number,
    setTooltipInvokedCount: Dispatch<SetStateAction<number>>
}

const TooltipInvokedContext = createContext<TooltipInvokedContextType | undefined>(undefined)

interface TooltipInvokedProviderProps {
    children: ReactNode
}

export const TooltipInvokedProvider: FC<TooltipInvokedProviderProps> = ({ children }) => {
    const [tooltipInvokedCount, setTooltipInvokedCount] = useState(0)

    return (
        <TooltipInvokedContext.Provider value={{ tooltipInvokedCount, setTooltipInvokedCount }}>
            {children}
        </TooltipInvokedContext.Provider>
    )
}

// Custom hook to use the context
export const useTooltipInvoked = (): TooltipInvokedContextType => {
    const context = useContext(TooltipInvokedContext)
    if (!context) {
        throw new Error('useTooltipInvoked must be used within an TooltipInvokedProvider')
    }
    return context
}
