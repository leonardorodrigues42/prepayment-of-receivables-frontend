import axios from "axios";
import { ReactNode, createContext, useState } from "react";

interface IProviderProps {
    children: ReactNode
}

interface IProviderContext {
    data: any
    request: (data: FormData) => void
}

export const RequestContext = createContext<IProviderContext>({} as IProviderContext)

export const RequestProvider = ({ children }: IProviderProps) => {
    const [data, setData] = useState()

    const request = (requestData: FormData) => {
        axios
            .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", requestData)
            .then(resp => setData(resp.data))
    }

    return (
        <RequestContext.Provider value={{ data, request }}>
            {children}
        </RequestContext.Provider>
    )
}
