import { DiWindows } from 'react-icons/di'
import { FaPlaystation } from 'react-icons/fa'
import { FaXbox } from 'react-icons/fa'

const GameCard = () => {
  return (
    <article className='bg-gray-100 rounded-xl w-80'>
      <img src='/public/images/placeholder-image.webp' alt='game' className='rounded-xl w-full' />
      <div className='flex flex-col gap-4 w-[90%] mx-auto py-5'>
        <div className='flex w-full justify-between mx-auto'>
          <div className='flex flex-row gap-2'>
            <DiWindows className='text-gray-500 text-lg' />
            <FaPlaystation className='text-gray-500 text-lg' />
            <FaXbox className='text-gray-500 text-lg' />
          </div>
          <div className='bg-[#3E5641] rounded px-1'>
            <p className='text-green-300'>90</p>
          </div>
        </div>
        <h3 className='text-2xl font-bold'>Grand Theft Auto V</h3>
        <img src='/public/images/bulls-eye.webp' alt='bulls' className='w-8' />
      </div>
    </article>
  )
}

export default GameCard
