const contact = document.querySelector(".contact");
const contactWidget = document.querySelector(".contact_widget");
const scheduleNow = document.querySelector(".schedule_now");
const fullBody = document.querySelector(".full_body");
const modal = document.querySelector(".modal");
const schedulService = document.querySelector(".schedule_service");
const modalClose = document.querySelector(".modal_close");
const calendar = document.querySelector(".calendar");
const currentMonth = document.querySelector(".current_month");
const currentYear = document.querySelector(".current_year");
const dates = document.querySelector(".days");
const myAccount = document.querySelector(".my_account");
const calandarWrap = document.querySelector(".calendar_wrap");
const timings = document.querySelector(".timings");
const myAccountWrap = document.querySelector(".myaccount_wrap");
const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");
const notes = document.querySelector(".notes");
const confirm = document.querySelector(".confirm_wrap");
const leaveDetailsWrap = document.querySelector(".leave_details_wrap");
const paymentWrap = document.querySelector(".payment_wrap");
const docWrap = document.querySelector(".doc_details_wrap");

const booking = document.querySelector(".booking");
// const boxContainer = document.querySelector(".box_container");
dates.style.userSelect = "none";
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  fullBody.style.display = "none";
  console.log("heillo");
  contact.style.display = "block";
});
scheduleNow.addEventListener("click", () => {
  modal.style.display = "block";
  fullBody.style.display = "grid";
  contactWidget.style.display = "none";
  schedulService.style.display = "block";
});
function leaveDetails() {
  modal.style.display = "block";
  fullBody.style.display = "grid";
  contactWidget.style.display = "none";
  schedulService.style.display = "none";
  timings.style.display = "none";
  calandarWrap.style.display = "none";
  leaveDetailsWrap.style.display = "grid";
  leaveDetailsWrap.style.height = "80vh";

  leaveDetailsWrap.style.placeItems = "center";
}
function makePayment() {
  modal.style.display = "block";
  fullBody.style.display = "grid";
  contactWidget.style.display = "none";
  schedulService.style.display = "none";
  timings.style.display = "none";
  calandarWrap.style.display = "none";
  leaveDetailsWrap.style.display = "none";
  paymentWrap.style.display = "grid";
  paymentWrap.style.height = "80vh";
  paymentWrap.style.placeItems = "center";
}
contact.addEventListener("click", (e) => {
  contact.style.display = "none";
  contactWidget.style.display = "flex";
});

function makeDocs() {
  modal.style.display = "block";
  fullBody.style.display = "grid";
  contactWidget.style.display = "none";
  schedulService.style.display = "none";
  timings.style.display = "none";
  calandarWrap.style.display = "none";
  leaveDetailsWrap.style.display = "none";
  paymentWrap.style.display = "none";
  docWrap.style.display = "grid";
  docWrap.style.height = "80vh";
  docWrap.style.placeItems = "center";
}
(function () {
  //   console.log("hello");
  leaveDetailsWrap.style.display = "none";
  docWrap.style.display = "none";
  contact.style.display = "block";
  modal.style.display = "none";
  myAccountWrap.style.display = "none";
  fullBody.style.display = "none";
  confirm.style.display = "none";
  notes.style.display = "none";
  paymentWrap.style.display = "none";
  contactWidget.style.display = "none";
  schedulService.style.display = "none";
  calendar.style.display = "none";
})();

const closeIcon = document.querySelector(".close_icon");
closeIcon.addEventListener("click", () => {
  contact.style.display = "block";
  contactWidget.style.display = "none";
});
// const state = {
//   todayDay,
//   todayDate,
//   todayMonth,
//   todayYear,
// };
const daysStr = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};
const daysIndex = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};
const fullDate = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31,
};
const monthsStr = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

const monthsIndex = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};
const components = document.querySelector(".schedule_content");
let date = new Date();
// console.log(date);
let month = date.getMonth();
let day = date.getDay();
let year = date.getFullYear();
let dayOne = 0;
next.addEventListener("click", () => {
  // console.log(date.getDay(), date.getDate());
  for (let i = date.getDate(); i > 0; i--) {
    // console.log(i);
    if (day > 0) {
      console.log(day);
      --day;
    } else {
      day = 6;
    }
  }
  dayOne = day + 1;

  if (month < 11) {
    currentMonth.innerHTML = monthsStr[++month];
  } else {
    month = 0;
    currentMonth.innerHTML = monthsStr[month];
    currentYear.innerHTML = ++year;
  }
  console.log(dayOne, "dayone");
  dates.innerHTML = "";
  const monthDates = fullDate[month];
  for (i = 1; i <= monthDates; i++) {
    if (i === 1) {
      console.log(fullDate[month - 1], "month", month);
      let previousDates = fullDate[month - 1] - (dayOne - 1);
      console.log(previousDates);
      for (let x = 1; x < dayOne; x++) {
        const item = document.createElement("li");
        // item.innerHTML = ++previousDates;
        const span = document.createElement("span");
        span.innerHTML = ++previousDates;
        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
          const children = dates.childNodes;
          for (let i = 0; i < children.length; i++) {
            // console.log(children[i].firstChild);
            if (
              children[i].firstChild !== null &&
              children[i].firstChild.classList.contains("active")
            )
              children[i].firstChild.classList.remove("active");
          }

          // console.log("hello");
          item.style.cursor = "pointer";
          item.addEventListener("click", () => {
            const children = dates.childNodes;
            for (let i = 0; i < children.length; i++) {
              // console.log(children[i].firstChild);
              if (
                children[i].firstChild !== null &&
                children[i].firstChild.classList.contains("active")
              )
                children[i].firstChild.classList.remove("active");
            }

            // console.log("hello");
            span.classList.add("active");
          });
        });
        item.appendChild(span);
        dates.appendChild(item);
      }
    }
    const item = document.createElement("li");
    // console.log(i, date.getDate());
    // console.log(month, date.getMonth());
    // console.log(year, date.getFullYear());
    if (
      i === date.getDate() &&
      month === date.getMonth() &&
      year === date.getFullYear()
    ) {
      const span = document.createElement("span");
      span.innerHTML = i;
      span.classList.add("active");
      item.appendChild(span);
    } else {
      const span = document.createElement("span");
      span.innerHTML = i;
      // span.classList.add("active");
      item.style.cursor = "pointer";
      item.addEventListener("click", () => {
        console.log("hello");
        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
          const children = dates.childNodes;
          for (let i = 0; i < children.length; i++) {
            // console.log(children[i].firstChild);
            if (
              children[i].firstChild !== null &&
              children[i].firstChild.classList.contains("active")
            )
              children[i].firstChild.classList.remove("active");
          }

          // console.log("hello");
          span.classList.add("active");
        });
      });
      item.appendChild(span);
    }
    dates.appendChild(item);
  }
});
previous.addEventListener("click", () => {
  // console.log(month);
  if (month > 0) currentMonth.innerHTML = monthsStr[--month];
  else {
    month = 11;
    currentMonth.innerHTML = monthsStr[month];
    currentYear.innerHTML = --year;
  }
  dates.innerHTML = "";
  const monthDates = fullDate[month];
  for (i = 1; i <= monthDates; i++) {
    if (i === 1) {
      console.log(fullDate[month - 1], "month", month);
      let previousDates = fullDate[month - 1] - (dayOne - 1);
      console.log(previousDates);
      for (let x = 1; x < dayOne; x++) {
        const item = document.createElement("li");
        // item.innerHTML = ++previousDates;
        const span = document.createElement("span");
        span.innerHTML = ++previousDates;
        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
          const children = dates.childNodes;
          for (let i = 0; i < children.length; i++) {
            // console.log(children[i].firstChild);
            if (
              children[i].firstChild !== null &&
              children[i].firstChild.classList.contains("active")
            )
              children[i].firstChild.classList.remove("active");
          }

          // console.log("hello");
          item.style.cursor = "pointer";
          item.addEventListener("click", () => {
            const children = dates.childNodes;
            for (let i = 0; i < children.length; i++) {
              // console.log(children[i].firstChild);
              if (
                children[i].firstChild !== null &&
                children[i].firstChild.classList.contains("active")
              )
                children[i].firstChild.classList.remove("active");
            }

            // console.log("hello");
            span.classList.add("active");
          });
        });
        item.appendChild(span);
        dates.appendChild(item);
      }
    }
    const item = document.createElement("li");
    // console.log(i, date.getDate());
    // console.log(month, date.getMonth());
    // console.log(year, date.getFullYear());
    if (
      i === date.getDate() &&
      month === date.getMonth() &&
      year === date.getFullYear()
    ) {
      const span = document.createElement("span");
      span.innerHTML = i;
      span.classList.add("active");
      item.appendChild(span);
    } else {
      const span = document.createElement("span");
      span.innerHTML = i;
      // span.classList.add("active");
      item.style.cursor = "pointer";
      item.addEventListener("click", () => {
        console.log("hello");
        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
          const children = dates.childNodes;
          for (let i = 0; i < children.length; i++) {
            // console.log(children[i].firstChild);
            if (
              children[i].firstChild !== null &&
              children[i].firstChild.classList.contains("active")
            )
              children[i].firstChild.classList.remove("active");
          }

          // console.log("hello");
          span.classList.add("active");
        });
      });
      item.appendChild(span);
    }
    dates.appendChild(item);
  }
});
components.addEventListener("click", () => {
  schedulService.style.display = "none";
  myAccountWrap.style.display = "none";
  calandarWrap.style.display = "flex";
  booking.style.display = "flex";
  dates.innerHTML = "";

  calendar.style.display = "block";
  console.log("hi");

  const date = new Date();
  currentMonth.innerHTML = monthsStr[date.getMonth()];
  currentYear.innerHTML = date.getFullYear();
  const monthDates = fullDate[date.getMonth()];
  // let dayOne = 0;
  for (let i = date.getDate(); i > 0; i--) {
    // console.log(i);
    if (day > 0) {
      // console.log(day);
      --day;
    } else {
      day = 6;
    }
  }
  dayOne = day + 1;
  console.log(dayOne, "dayone");
  for (i = 1; i <= monthDates; i++) {
    if (i === 1) {
      console.log(fullDate[month - 1], "month", month);
      let previousDates = fullDate[month - 1] - (dayOne - 1);
      console.log(previousDates);
      for (let x = 1; x < dayOne; x++) {
        const item = document.createElement("li");
        // item.innerHTML = ++previousDates;
        const span = document.createElement("span");
        span.innerHTML = ++previousDates;
        item.addEventListener("click", () => {
          const children = dates.childNodes;
          for (let i = 0; i < children.length; i++) {
            // console.log(children[i].firstChild);
            if (
              children[i].firstChild !== null &&
              children[i].firstChild.classList.contains("active")
            )
              children[i].firstChild.classList.remove("active");
          }

          // console.log("hello");
          item.addEventListener("click", () => {
            const children = dates.childNodes;
            for (let i = 0; i < children.length; i++) {
              // console.log(children[i].firstChild);
              if (
                children[i].firstChild !== null &&
                children[i].firstChild.classList.contains("active")
              )
                children[i].firstChild.classList.remove("active");
            }

            // console.log("hello");
            span.classList.add("active");
          });
        });
        item.appendChild(span);
        dates.appendChild(item);
      }
    }
    const item = document.createElement("li");
    if (i === date.getDate()) {
      const span = document.createElement("span");
      span.innerHTML = i;
      span.classList.add("active");
      item.appendChild(span);
    } else {
      const span = document.createElement("span");
      span.innerHTML = i;
      item.style.cursor = "pointer";
      item.addEventListener("click", () => {
        const children = dates.childNodes;
        for (let i = 0; i < children.length; i++) {
          // console.log(children[i].firstChild);
          if (
            children[i].firstChild !== null &&
            children[i].firstChild.classList.contains("active")
          )
            children[i].firstChild.classList.remove("active");
        }

        // console.log("hello");
        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
          const children = dates.childNodes;
          for (let i = 0; i < children.length; i++) {
            // console.log(children[i].firstChild);
            if (
              children[i].firstChild !== null &&
              children[i].firstChild.classList.contains("active")
            )
              children[i].firstChild.classList.remove("active");
          }

          // console.log("hello");
          span.classList.add("active");
        });
      });
      item.appendChild(span);
    }
    if (i === monthDates) {
      console.log(monthDates / 6);
    }
    dates.appendChild(item);
  }
  // console.log(date.getFullYear());
});

myAccount.addEventListener("click", () => {
  schedulService.style.display = "none";
  modal.style.display = "block";
  // modal.style.placeItems = "center";
  contactWidget.style.display = "none";
  fullBody.style.display = "grid";
  calandarWrap.style.display = "none";
  form1.style.display = "flex";
  form2.style.display = "none";
  form3.style.display = "none";

  timings.style.display = "none";
  myAccountWrap.style.display = "block";
});

function handleEmailSubmit() {
  form3.style.display = "none";
  form2.style.display = "flex";
  form1.style.display = "none";
  // form1.classList.toggle("form1");
}

function handleOtpSubmit() {
  form2.style.display = "none";
  form3.style.display = "flex";
  form3.style.justifyContent = "flex-start";
  form3.style.alignItems = "space-around";
  // form3.style.placeItems = "center";
}

function onBoxContainerClick() {
  form3.style.display = "none";
  modal.style.display = "block";
  fullBody.style.display = "grid";
  contactWidget.style.display = "none";
  schedulService.style.display = "block";
}
let handlBlue = 1;
function handleBlueBtn(e) {
  if (handlBlue === 2) {
    handlBlue = 1;
    calandarWrap.style.display = "none";
    confirm.style.display = "grid";
  }
  if (handlBlue === 1) {
    notes.style.display = "grid";
    notes.style.placeItems = "center";
    calandarWrap.style.padding = "20px";
    calendar.style.display = "none";
    e.innerHTML = "Continue Booking";
    // console.log(e);
    timings.style.display = "none";
    handlBlue++;
  }
}
