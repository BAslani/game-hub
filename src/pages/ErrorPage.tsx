import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='fixed flex flex-row items-center inset-0 bg-slate-700'>
      <div className='mx-auto text-center flex flex-col gap-4'>
        <h1 className='text-9xl'>404</h1>
        <h3 className='text-5xl'>Page not found</h3>
        <Link to='/' className='text-2xl text-slate-300'>
          Back Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
