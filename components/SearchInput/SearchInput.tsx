"use client"

import useDebounce from '@/hooks/useDebounce/useDebounce'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import qs from "query-string"
import { Input } from '../Input/Input'


interface SearchInputProps {

}

const SearchInput: FC<SearchInputProps> = () => {

    const router = useRouter()
    const [value, setValue] = useState<string>("")
    const debouncedValue =
        useDebounce<string>(value, 500)

    useEffect(() => {
        const query = {
            title: debouncedValue,
        }

        const url = qs.stringifyUrl({
            url: '/search',
            query: query
        })

        router.push(url)
    }, [debouncedValue, router])

    return (
        <Input
            placeholder='What do you want to listen to?'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export { SearchInput };