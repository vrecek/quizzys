import React from "react"

export type BoolState = React.Dispatch<React.SetStateAction<boolean>> 

export type ProfileState = {
    set: BoolState
}

export type AllowCookiesState = {
    isAllowed: boolean
    toggleAllow: BoolState
}

export type KeyAndValue = {
    pkey: string
    pvalue: string | number
    cname?: string
}