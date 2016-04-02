//import { TAPi18n } from 'meteor/tap:i18n';
import { Bert } from 'meteor/themeteorchef:bert';

export const displayError = (error) => {
  if (error) {
    // It would be better to not alert the error here but inform the user in some
    // more subtle way
    Bert.alert(error.reason, 'danger', 'growl-top-right'); // eslint-disable-line no-alert
  }
};
