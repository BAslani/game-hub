import { Platform } from './GameCard'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { type IconType } from 'react-icons'

type PlatformListProps = {
  platforms: Platform[]
}

const PlatformList = ({ platforms }: PlatformListProps) => {
  const platformIconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  }

  return (
    <div className='flex flex-row gap-2'>
      {platforms.map(platform => {
        const IconComponent = platformIconsMap[platform.slug] // Use slug or appropriate property
        return IconComponent ? <IconComponent key={platform.slug} className='text-gray-600 dark:text-gray-400' /> : null
      })}
    </div>
  )
}

export default PlatformList
