import consumer from "./consumer";

const initNotificationCable = () => {
  const notificationDisplay = document.querySelector('#notification-display');
  const notificationCount = document.querySelector('.notification-count');
  let count = 0;
  if (notificationDisplay) {
    const id = notificationDisplay.dataset.userId; // <- current_user (from navbar.html)
    // Subscribe for current_user:
    consumer.subscriptions.create({ channel: "NotificationChannel", id: id }, {
      received(data) {
        console.log(data);
        // display notification:
        notificationDisplay.insertAdjacentHTML('afterbegin', data);
        // count new msg & change notification count icon:
        count = count + 1;
        notificationCount.classList.add("notification-count-show");
        notificationCount.innerText = count;
      },
    });
  }
}

export { initNotificationCable };


// notificationDisplay.insertAdjacentHTML('afterbegin', data.notificationHtml);
