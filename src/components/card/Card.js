import React, {memo} from 'react'
import {Link} from 'react-router-dom'

function Card(props) {
  return (
    <div
      className="card specialCard mx-auto"
      style={{
        width: '18rem',
        padding: '20px',
        backgroundColor: 'rgb(246,246,246)',
        border: 'none',
        margin: '15px',
      }}
    >
      <img
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <h5 className="card-title text-black-50">{props.name}</h5>

        <Link
          className="btn btn-danger"
          to={`/Profile/${props.id}`}
          id={props.id}
        >
        Profile Ko'rish Uchun Bosing!!!
        </Link>
      </div>
    </div>
  )
}
export default memo(Card)
