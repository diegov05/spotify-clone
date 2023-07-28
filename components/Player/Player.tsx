"use client";

import { useGetSongById, useLoadSongUrl, usePlayer } from '@/hooks';
import { FC } from 'react'

interface PlayerProps {

}

const Player: FC<PlayerProps> = () => {

    const player = usePlayer()
    const { song } = useGetSongById(player.activeId)

    const songUrl = useLoadSongUrl(song!)

    // if (!song || !songUrl || !player.activeId) {
    //     return null
    // }

    return (
        <div
            className='
            fixed
            bottom-0
            bg-black
            w-full
            py-2
            h-[80px]
            px-4    
        '
        >
            Player
        </div>
    )
}

export { Player };