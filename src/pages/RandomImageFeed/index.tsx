import './index.scss'

export default function RandomImageFeed() {
  return (
    <div className='random-image-wrap'>
      <div className="main-wrap">
        <h1>Random Image Feed</h1>
        <div className="image-wrap">
          {
            [...Array(30)].map((_, i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/${Math.random()}/300/300`}
                alt='random image'
              />
            ))
          }
        </div>

      </div>

    </div>
  )
}
