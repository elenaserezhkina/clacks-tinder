import React from "react";

function UserCard({ user, hasFakeImage }) {
  const getImage = () => {
    if (hasFakeImage) {
      return user?.fakeImage;
    }

    return user?.image;
  };
  const interests = [...(user?.reasons || []), ...(user?.interests || [])];
  return (
    <div className="card employee-card card-user-info">
      <div className="card__header">
        <div className="aspect aspect--cover">
          <img
            src={
              getImage() ||
              "https://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-coverimage.jpg"
            }
            alt=""
            className=""
          />
        </div>
      </div>
      <div className="card__body">
        <h5 className="employee-card__fullname">{user?.name}</h5>
        <ul className="tags__list">
          {interests.map((interest, i) => (
            <li key={`tags-user-${user.id}-${i}`} className="tag">
              {interest}
            </li>
          ))}
        </ul>
        {/* <p class="employee-card__organisation color-light-blue">click solutions</p>
        <p class="employee-card__location">
          <i class="fas fa-map-marker-alt"></i>&nbsp; Berlin @AL
        </p> */}
      </div>
    </div>
  );
}

export default UserCard;
