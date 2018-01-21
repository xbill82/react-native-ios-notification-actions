export class Action {
  constructor(opts, onComplete) {
    throw new Error('Only iOS is supported by react-native-ios-notification-actions');
  }
}

export class Category {

  constructor(opts) {
    throw new Error('Only iOS is supported by react-native-ios-notification-actions');
  }

}

export const updateCategories = (categories, shouldRequestPermission = true) => {
  throw new Error('Only iOS is supported by react-native-ios-notification-actions');
};


export default {
  Action,
  Category,
  updateCategories
};
