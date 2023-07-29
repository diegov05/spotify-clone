"use client";

import { Song } from '@/types';
import { FC } from 'react'
import { MediaItem } from '../MediaItem/MediaItem';
import { LikeButton } from '../LikeButton/LikeButton';

interface PlayerContentProps {
    song: Song
    songUrl: string
}

const PlayerContent: FC<PlayerContentProps> = ({ song, songUrl }) => {
    return (
        <div
            className='
            grid
            grid-cols
            md:grid-cols-3
            h-full
        '
        >
            <div
                className='
                flex
                w-full
                justify-start
            '
            >
                <div
                    className='
                    flex
                    items-center 
                    gap-x-4
                '
                >
                    <MediaItem data={song} />
                    <LikeButton songId={song.id} />
                </div>
            </div>
            <div
                className='
                
            '
            >

            </div>
        </div>
    )
}

export { PlayerContent };