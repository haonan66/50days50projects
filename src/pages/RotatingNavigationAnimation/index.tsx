import { useRef, useState } from 'react'
import Expading from './Expanding'
import Nav from './Nav'
import './index.scss'

export default function RoutatingNavigationAnimation() {

  const newsRef = useRef<HTMLDivElement>(null)
  const [isExpanding, setIsExpanding] = useState<boolean>(false)
  const  getIsExpanding = (value: boolean) => {
    setIsExpanding(value)
  }

  return (
    <>
        <div className='all-wrapper'>
            <div className='news-wrapper' ref={newsRef}>
                <div className="news">
                    <h1>Amazing Article</h1>
                    <i>Florin Pop</i>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque maxime quia error eius, illo pariatur voluptatem vel facilis sapiente nemo animi veniam tempore modi fuga? Inventore eius culpa eos aliquid?
                        Consectetur nulla repudiandae similique distinctio sapiente aperiam nesciunt nostrum minima! Aliquid sint consequatur ullam, placeat earum quia, minima nesciunt quaerat, fugit unde laborum! Repellat earum sequi, fuga eum et tempore.
                        Hic possimus culpa nisi deserunt. Iure dignissimos nihil eveniet! Unde, nam. Aspernatur blanditiis cumque quasi quisquam molestias, inventore possimus distinctio enim dicta ipsam quam quas porro dolore culpa totam ex.
                        Consequuntur et, ea doloribus aut quibusdam minus cupiditate labore quaerat eveniet totam aspernatur adipisci fugiat veniam tempore dolore porro quia dolorem ex sit repellat iste obcaecati itaque aliquid sint. Voluptate.
                        Ea vero facilis iusto blanditiis eveniet libero asperiores veritatis expedita similique, adipisci tenetur laudantium unde labore nulla, quo, porro nobis explicabo reiciendis cumque fugiat distinctio. Quam optio cupiditate temporibus quae!
                        Ducimus reprehenderit atque, labore adipisci cum vero corrupti distinctio, numquam dolore tenetur odio veniam nemo! Nam minima non qui illo suscipit tempore facere voluptas laboriosam quas. Ratione dicta autem praesentium?
                    </p>
                    <h4>My Dog</h4>
                    <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="修勾" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, consectetur facilis sunt in deleniti maxime corporis soluta minima tenetur explicabo perspiciatis aspernatur, ea, dolorem similique exercitationem temporibus neque sit reiciendis.
                        Eaque quos distinctio sit in vel! Voluptatem ipsa ratione, cum consequatur harum consequuntur tempora iusto sint quasi aut corporis odit modi at qui aperiam quos inventore cumque reiciendis voluptas quaerat!
                        Officia quas unde est aspernatur beatae ullam, sint distinctio et voluptatem aliquid qui fuga! Deserunt voluptas error labore quidem. Facilis ea doloremque tempora voluptatem voluptatum odit velit consequuntur id suscipit.
                        Sed accusamus amet veritatis nemo culpa ut reiciendis sit. Impedit velit laudantium consectetur, rerum inventore dolor illum, ipsum pariatur sequi minus at aliquam omnis amet delectus officiis sapiente molestias beatae.
                    </p>
                </div>
            </div>
            <Expading newsRef={newsRef} getIsExpanding={getIsExpanding} />
            <Nav isExpanding={isExpanding} />
        </div>
    </>
  )
}
