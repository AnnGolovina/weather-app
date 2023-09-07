import { useState, useEffect } from "react";

export const useFetchData = <TData>(url: string, options?: RequestInit, isSearched?: boolean) => {
    const [data, setData] = useState<TData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getData = () => {
        setIsLoading(true);
        return fetch(url, options)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);                
                setData(responseData)
                return responseData;
            })
            .catch(() => {
                setIsLoading(false)
                setData(null)
            })
    }

    useEffect(() => {
        isSearched && getData()
    },
         [url, options])

    return isSearched ? {data, isLoading} : getData;
}