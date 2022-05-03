// import firebase from "../firebase";
import {db} from "../firebase";

const firebase = db.collection("/outfit_picks_by_stylist");
// const db = firebase.collection("/user_selected_outfits");
class OutfitDataService {
  getAll() {
    return firebase;
  }

  create(Outfit) {
    return firebase.add(Outfit);
  }

  update(id, value) {
    return firebase.doc(id).update(value);
  }

  delete(id) {
    return firebase.doc(id).delete();
  }
}

export default new OutfitDataService();
