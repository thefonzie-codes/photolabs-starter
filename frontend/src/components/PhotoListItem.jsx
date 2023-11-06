import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ state, dispatch, photo }) => {

  const { id, user, urls, location } = photo

  return (
    <article className="photo-list__item">
      <PhotoFavButton dispatch={dispatch} id={id} state={state} />
      <img onClick={() => (dispatch({ type: 'DISPLAY_PHOTO_DETAILS', value: photo }))}
        className="photo-list__image"
        src={urls.full} />
      <div className="photo-list__user-info">
        <img className="profile photo-list__user-profile" src={user.profile} />
        <div className="photo-list__user-details">
          <h1>{user.username}</h1>
          <h3 className="photo-list__user-location">{location.city}, {location.country}</h3>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
