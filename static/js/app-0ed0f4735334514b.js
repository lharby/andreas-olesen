// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/components/globals.js
var htmlElem = document.querySelector("html");
var hiddenClass = "hidden";
var indexClass = "index";
var loadingClass = "loading";
var entryElem = htmlElem.querySelector(".entry");

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/utils/utilsStorage.js
var retrieveFromSessionStorage = (key) => {
  if (!key || typeof key !== "string") {
    throw new Error("Invalid key");
  }
  try {
    return JSON.parse(sessionStorage.getItem(key));
  } catch {
    return sessionStorage.getItem(key);
  }
};
var addToSessionStorage = (key, value) => {
  if (!key || typeof key !== "string") {
    throw new Error("Invalid key");
  }
  if (typeof value === "object") {
    sessionStorage.setItem(key, JSON.stringify(value));
  } else {
    sessionStorage.setItem(key, value);
  }
};

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/components/entry.js
var entry = () => {
  const sesstionStorageItemIsSet = retrieveFromSessionStorage("entry");
  if (sesstionStorageItemIsSet) {
    entryElem.classList.add(hiddenClass);
  } else {
    entryElem.classList.remove(hiddenClass);
  }
  entryElem.addEventListener("click", (e) => {
    e.preventDefault();
    return;
  });
};

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/components/indexPage.js
var indexPage = () => {
  const arrPaths = document.location.pathname.split("/");
  const primaryDir = arrPaths[1];
  let pathnames = arrPaths.filter((item) => item !== "");
  if (!primaryDir) {
    htmlElem.classList.add(indexClass);
  } else {
    htmlElem.classList.add(...pathnames);
    htmlElem.classList.remove(indexClass);
  }
};

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/utils/ajaxLoaders.js
var removeLoading = (elem) => {
  elem.classList.remove(loadingClass);
};

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/components/workNavigation.js
var workNavigation = () => {
  const workElem = htmlElem.querySelector('.navigation-main a[href="/work"]');
  const workNavigationElem = "/work-navigation";
  fetch(workNavigationElem).then((res) => res.text()).then((html) => {
    const parser = new DOMParser;
    const doc = parser.parseFromString(html, "text/html");
    const container = doc.querySelector(".navigation-main__subnav");
    workElem.parentElement.appendChild(container);
  }).catch((err) => console.warn("Something went wrong.", err)).finally(() => removeLoading(htmlElem));
  workElem.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
  });
};

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/components/outputDate.js
var outputDate = () => {
  const dateWrapper = $(".date-wrapper");
  let getYear = new Date;
  getYear = getYear.getFullYear();
  dateWrapper.text(getYear);
};

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/utils/toggleVisibility.js
var toggleVisibility = (elem) => {
  const sesstionStorageItemIsSet = retrieveFromSessionStorage("entry");
  if (sesstionStorageItemIsSet) {
    elem.classList.add(hiddenClass);
  } else {
    elem.classList.remove(hiddenClass);
  }
  if (elem.classList.contains(hiddenClass)) {
    elem.classList.remove(hiddenClass);
    sessionStorage.removeItem("entry");
  } else {
    elem.classList.add(hiddenClass);
    addToSessionStorage("entry", 1);
  }
};

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/utils/attachKeyEvent.js
var attachKeyEvent = () => {
  htmlElem.addEventListener("keydown", (e) => {
    if (e.key === "x" || e.key === "X") {
      toggleVisibility(entryElem);
    }
  });
};

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/utils/scrollDirection.js
var scrollDirection = (fn) => {
  let last_known_scroll_position = 0;
  let ticking = false;
  window.addEventListener("scroll", function() {
    let previous_known_scroll_position = last_known_scroll_position;
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        fn(last_known_scroll_position, previous_known_scroll_position);
        ticking = false;
      });
      ticking = true;
    }
  });
};

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/utils/throttle.js
var throttle = function(callback, limit) {
  var waiting = false;
  return function() {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(function() {
        waiting = false;
      }, limit);
    }
  };
};

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/utils/attachScrollEvent.js
var attachScrollEvent = () => {
  const elem = htmlElem.querySelector("body");
  const scrollClass = "scroll--active";
  const scrollUpClass = "scroll--up";
  const scrollDownClass = "scroll--down";
  const interval = 3000;
  const scrollYOffset = 200;
  document.addEventListener("scroll", () => {
    if (window.scrollY > scrollYOffset) {
      throttle(elem.classList.add(scrollClass), interval);
    } else {
      throttle(elem.classList.remove(scrollClass), interval);
    }
  });
  scrollDirection((scrollPos, previousScrollPos) => {
    if (previousScrollPos > scrollPos) {
      elem.classList.remove(scrollDownClass);
      throttle(elem.classList.add(scrollUpClass), interval);
    } else {
      elem.classList.remove(scrollUpClass);
      throttle(elem.classList.add(scrollDownClass), interval);
    }
  });
};

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/utils/isElement.js
function isElement(element) {
  return element instanceof Element || element instanceof Document || element instanceof Window;
}

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/utils/getElementScroll.js
function getElementScroll(element = window) {
  if (isElement(element)) {
    if (element instanceof Window) {
      return {
        left: element.pageXOffset || document.documentElement.scrollLeft,
        top: element.pageYOffset || document.documentElement.scrollTop
      };
    } else {
      return {
        left: element.scrollX || element.scrollLeft,
        top: element.scrollY || element.scrollTop
      };
    }
  } else {
    return false;
  }
}

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/utils/scrollLock.js
function enableScrollLock() {
  if (!isScrollLocked) {
    const scrollPosition = getElementScroll();
    window.scrollTo(scrollPosition.left, 0);
    htmlElem.classList.add(className);
    htmlElem.style.marginTop = `${-scrollPosition.top}px`;
    htmlElem.style.marginLeft = 0;
    htmlElem.style.position = "fixed";
    htmlElem.style.overflowY = "hidden";
    htmlElem.style.width = "100%";
    isScrollLocked = true;
    scrollTop = scrollPosition.top;
  }
}
function disableScrollLock() {
  if (isScrollLocked) {
    const scrollPosition = getElementScroll();
    htmlElem.classList.remove(className);
    htmlElem.style.marginTop = "";
    htmlElem.style.marginLeft = "";
    htmlElem.style.position = "";
    htmlElem.style.overflowY = "";
    htmlElem.style.width = "";
    window.scrollTo(scrollPosition.left, scrollTop);
    isScrollLocked = false;
  }
}
var className = "doc-scroll-lock";
var scrollTop = 0;
var isScrollLocked = false;

// /Users/lukeharby/Documents/LH/webs/andreas-olesen/src/js/components/lightbox.js
var lightbox = () => {
  const wrapper = htmlElem.querySelector("#posts");
  const images = wrapper.querySelectorAll("img");
  const modal = "modal";
  const modalBackdrop = htmlElem.querySelector("." + modal + "__backdrop");
  const modalElem = htmlElem.querySelector("." + modal);
  const modalInner = modalElem.querySelector("." + modal + "__inner");
  const closeClass = "modal__close";
  images.forEach((item) => {
    item.addEventListener("click", () => {
      modalBackdrop.classList.add(modal + "__backdrop--show");
      modalElem.classList.add(modal + "--show");
      let src = item.getAttribute("src");
      src = src.replace("_500", "_1280");
      const template = '<img src="' + src + '" class="modal__image" />';
      modalInner.insertAdjacentHTML("beforeend", template);
      enableScrollLock();
    });
  });
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains(closeClass)) {
      closeModal();
    }
  });
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains(modal + "__image")) {
      closeModal();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalElem.classList.contains(modal + "--show")) {
      closeModal();
    }
  });
  const closeModal = () => {
    modalBackdrop.classList.remove(modal + "__backdrop--show");
    modalElem.classList.remove(modal + "--show");
    modalInner.replaceChildren();
    disableScrollLock();
  };
};

// src/js/app.js
document.addEventListener("DOMContentLoaded", () => {
  entry();
  indexPage();
  workNavigation();
  outputDate();
  attachKeyEvent();
  attachScrollEvent();
  lightbox();
});
