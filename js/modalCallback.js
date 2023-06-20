const module = document.querySelector(".module-wrap");
const moduleSubmitForm = module && module.querySelector(".module__form");
const sectionCallback = document.querySelector(".callback");

let regexPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const openModule = () => {
  module.classList.add("module-wrap--active");
  module.addEventListener("click", handleCloseModule);

  module.querySelector(".module__container").classList.remove("module__container_hidden");
  module.querySelector(".module__submit-container").classList.remove("module__submit-container_active");
  // disableScroll();
};

const handleCloseModule = (e) => {
  if (e.target.classList.contains('module__close')) {
    closeModule();
    module.removeEventListener("click", handleCloseModule);
  }
  if (e.target.classList.contains('module-wrap--active')) {
    closeModule();
    module.removeEventListener("click", handleCloseModule);
  }
}

const closeModule = () => {
  module.classList.remove("module-wrap--active");
  // enableScroll();
};

module && module.addEventListener("click", handleCloseModule);

function handleModuleSubmit(e) {
  e.preventDefault();

  module.querySelector(".module__container").classList.add("module__container_hidden");
  module.querySelector(".module__submit-container").classList.add("module__submit-container_active");
}

module && moduleSubmitForm.addEventListener("submit", handleModuleSubmit)

var phoneInputs = document.querySelectorAll('.module-form__tel');

var getInputNumbersValue = function (input) {
  // Return stripped input value — just numbers
  return input.value.replace(/\D/g, '');
}

var onPhonePaste = function (e) {
  var input = e.target,
    inputNumbersValue = getInputNumbersValue(input);
  var pasted = e.clipboardData || window.clipboardData;
  if (pasted) {
    var pastedText = pasted.getData('Text');
    if (/\D/g.test(pastedText)) {
      // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
      // formatting will be in onPhoneInput handler
      input.value = inputNumbersValue;
      return;
    }
  }
}

var onPhoneInput = function (e) {
  var input = e.target,
    inputNumbersValue = getInputNumbersValue(input),
    selectionStart = input.selectionStart,
    formattedInputValue = "";

  if (!inputNumbersValue) {
    return input.value = "";
  }

  if (input.value.length != selectionStart) {
    // Editing in the middle of input, not last symbol
    if (e.data && /\D/g.test(e.data)) {
      // Attempt to input non-numeric symbol
      input.value = inputNumbersValue;
    }
    return;
  }

  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
    var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
    formattedInputValue = input.value = firstSymbols + " ";
    if (inputNumbersValue.length > 1) {
      formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    }
  } else {
    formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
  }
  input.value = formattedInputValue;

  module.querySelector(".module-form-label__title-error").classList.remove("module-form-label__title-error_active");
}
var onPhoneKeyDown = function (e) {
  // Clear input after remove last symbol
  var inputValue = e.target.value.replace(/\D/g, '');
  if (e.keyCode == 8 && inputValue.length == 1) {
    e.target.value = "";
  }
}
for (var phoneInput of phoneInputs) {
  phoneInput.addEventListener('keydown', onPhoneKeyDown);
  phoneInput.addEventListener('input', onPhoneInput, false);
  phoneInput.addEventListener('paste', onPhonePaste, false);
}

function handleModuleSubmit(e) {
  e.preventDefault();

  if (!regexPhone.test(module.querySelector(".module-form__tel").value)) {
    module.querySelector(".module-form-label__title-error").classList.add("module-form-label__title-error_active");
  } else {
    module.querySelector(".module-form-label__title-error").classList.remove("module-form-label__title-error_active");
    // добавлены данные для отправки в форму
    let data = `phone=${module.querySelector(".module-form__tel").value}&name=${module.querySelector(".module-form__name").value}`;
    module.querySelector('.loader').classList.add('loader_active');

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '../ajax.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');

    xhr.send(data);

    xhr.onload = () => {
      if (xhr.status >= 400) {
        console.log(`error code: ${xhr.status}`);
        return;
      };

      ComagicWidget.sitePhoneCall({
        captcha_key: '',
        captcha_value: '',
        phone: module.querySelector(".module-form__tel").value,
        group_id: '343750'
      }, function (resp) {
        console.log(resp)
      });
      module.querySelector('.loader').classList.remove('loader_active');
      module.querySelector(".module__container").classList.add("module__container_hidden");
      module.querySelector(".module__submit-container").classList.add("module__submit-container_active");
    };

    xhr.onprogress = () => {
      module.querySelector('.loader').classList.add('loader_active');
    };

    xhr.onerror = () => {
      module.querySelector('.loader').classList.remove('.loader_active');
      console.log(xhr.response)
    };
  };
}

function handleSectionCallbackSubmit(e) {
  e.preventDefault();
  if (!regexPhone.test(module.querySelector(".module-form__tel").value)) {
    module.querySelector(".module-form-label__title-error").classList.add("module-form-label__title-error_active");
  } else {
    module.querySelector(".module-form-label__title-error").classList.remove("module-form-label__title-error_active");
    sectionCallback.querySelector('.loader').classList.add('loader_active');
    // добавлены данные для отправки в форму
    let data = `phone=${module.querySelector(".module-form__tel").value}&name=${module.querySelector(".module-form__name").value}`;
    const xhr = new XMLHttpRequest();

    xhr.open('POST', '../ajax.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');

    xhr.send(data);

    xhr.onload = () => {
      if (xhr.status >= 400) {
        console.log(`error code: ${xhr.status}`);
        return;
      };

      ComagicWidget.sitePhoneCall({
        captcha_key: '',
        captcha_value: '',
        phone: sectionCallback.querySelector(".module-form__tel").value,
        group_id: '343750'
      }, function (resp) {
        console.log(resp)
      });
      sectionCallback.querySelector('.loader').classList.remove('loader_active');
      sectionCallback.querySelector(".module__container").classList.add("module__container_hidden");
      sectionCallback.querySelector(".module__submit-container").classList.add("module__submit-container_active");
    };

    xhr.onprogress = () => {
      sectionCallback.querySelector('.loader').classList.add('loader_active');
    };

    xhr.onerror = () => {
      sectionCallback.querySelector('.loader').classList.remove('.loader_active');
      console.log(xhr.response)
    };
  }
}

  module && moduleSubmitForm.addEventListener("submit", handleModuleSubmit);
if (sectionCallback) {
  sectionCallback.querySelector(".module__form").addEventListener("submit", handleSectionCallbackSubmit);
}