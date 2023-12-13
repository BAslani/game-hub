import SkeletonCard from './SkeletonCard'

const SkeletonLoadingSection = () => {
  const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <div className='flex flex-col gap-6 items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
      {skeletons.map((_, index) => {
        return <SkeletonCard key={index} />
      })}
    </div>
  )
}

export default SkeletonLoadingSection
