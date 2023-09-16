"use client";

import { MediaItem, LikeButton } from '@/components'
import { useOnPlay } from '@/hooks';
import { Song } from '@/types';
import { FC } from 'react'

interface SearchContentProps {
    songs: Song[]
}

const SearchContent: FC<SearchContentProps> =
    ({ songs }) => {
        const onPlay = useOnPlay(songs)
        if (songs.length === 0) {
            return (
                <div
                    className='
                    flex
                    flex-col
                    gap-y-2
                    w-full
                    px-6
                    text-neutral-400
                    '
                >
                    No songs found.
                </div>
            )
        }

        return (
            <div
                className='
                    flex 
                    flex-col
                    gap-y-2
                    w-full
                    px-6
                    '
            >
                {songs.map((song) => (
                    <div
                        key={song.id}
                        className='
                        flex
                        items-center
                        gap-x-4
                        w-full
                        '
                    >
                        <div className='flex-1'>
                            <MediaItem
                                onClick={(id: string) => onPlay(id)}
                                data={song}
                            />
                        </div>
                        <LikeButton songId={song.id} />
                    </div>
                ))}
            </div>
        )
    }

export { SearchContent };