export const ACTIONS = {
  FAV_PHOTO_TOGGLE: 'FAV_PHOTO_TOGGLE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

export function reducer(state, action) {
  switch (action.type) {

    case 'FAV_PHOTO_TOGGLE':
      return (
        !state.favourites[action.value] ?
          { ...state, favourites: { ...state.favourites, [action.value]: true } } :
          { ...state, favourites: { ...state.favourites, [action.value]: false } }
      )

    case 'SET_PHOTO_DATA':
      return { ...state, photos: action.value };

    case 'SET_TOPIC_DATA':
      return { ...state, topics: action.value };

    case 'SELECT_PHOTO':
      return { ...state, hidden: false, selectedPhoto: action.value };

    case 'DISPLAY_PHOTO_DETAILS':
      return { ...state, hidden: false, selectedPhoto: action.value };

    case 'CLOSE_MODAL':
      return { ...state, hidden: true }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      )
  }
}