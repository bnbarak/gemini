import { actions as notifActions } from 'redux-notifications';

const { notifSend } = notifActions;
const dismissAfter = 5000; // TODO: move to constants file

export const notificationSuccess = message => notifSend({
  message,
  kind: 'info',
  dismissAfter,
});


export const notificationError = message => notifSend({
  message,
  kind: 'warning',
  dismissAfter,
});
