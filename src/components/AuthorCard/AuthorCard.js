import React, {memo} from 'react'

function AuthorCard({author}) {
  return (
    <div className="cardProfile">
      <img
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="John"
        style={{width: '100%'}}
      />
      <h1>{author.firstName + ' ' + author.lastName}</h1>
      <p className="title text-secondary">Telefon : {author.phone}</p>
      <p>POSTS : {author.numPosts}</p>
      <p>LIKES : {author.numLikes}</p>
    </div>
  )
}

export default memo(AuthorCard)
