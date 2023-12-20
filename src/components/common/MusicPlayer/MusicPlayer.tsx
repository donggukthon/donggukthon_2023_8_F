import styled from '@emotion/styled'
import { FC, MouseEventHandler, useEffect, useState } from 'react'

import musicStartIconImg from 'public/images/music_start_icon.png'
import musicStopIconImg from 'public/images/music_stop_icon.png'
import { Image } from '../Image'
import { Row } from '../Row'

const StyledMusic = styled(Image)``

const useAudio = (url: string) => {
  const [song, setSong] = useState<any>()
  const [play, setPlay] = useState(false)
  const toggle: MouseEventHandler<HTMLImageElement> = () => setPlay(!play)

  useEffect(() => {
    setSong(new Audio(url))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (song) {
      play ? song.play() : song.pause()
    }
  }, [play, song])

  useEffect(() => {
    if (song) {
      song.addEventListener('ended', () => setPlay(false))
      return () => {
        song.removeEventListener('ended', () => setPlay(false))
      }
    }
  }, [song])

  return { play, toggle }
}

type Props = {
  className?: string
}

export const MusicPlayer: FC<Props> = ({ className }) => {
  const { play, toggle } = useAudio('/musics/tree_background.mp3')

  return (
    <StyledRow p={10} cursor={'pointer'} onClick={toggle} className={className}>
      <StyledMusic
        src={play ? musicStartIconImg : musicStopIconImg}
        width={24}
        height={24}
        alt={'music icon image'}
        background={false}
      />
    </StyledRow>
  )
}

const StyledRow = styled(Row)`
  z-index: 5;
`
