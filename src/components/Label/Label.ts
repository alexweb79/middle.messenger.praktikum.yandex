import Block from '../../services/Block';
import labelTmpl from './Label.tmpl';

export default class Label extends Block {
  render() {
    return this.compile(labelTmpl);
  }

  hasCirLetters(str: string) {
    return (/[а-яА-ЯЁё]/g).test(str);
  }

  hasLatLetters(str: string) {
    return (/[a-zA-Z]/g).test(str);
  }

  hasNumbers(str: string) {
    return (/[0-9]/g).test(str);
  }

  hasOneNumber(str: string) {
    return (/[0-9]/).test(str);
  }

  isFirstLetterUppercase(str: string) {
    return str.toUpperCase() === str.charAt(0);
  }

  hasWhiteSpace(str: string) {
    return (/\s/).test(str);
  }

  hasOneLetter(str: string) {
    return (/[a-zA-Z]/).test(str);
  }

  hasOneUppercaseLetter(str: string) {
    return (/[A-Z]/).test(str);
  }

  hasSpecialCharacters(str: string) {
    return (/[ `!@#$%^&*()+=\[\]{};':"\\|,.<>\/?~]/).test(str);
  }

  stringNumberToNumber(str: string, start: number, end: number) {
    return str.length >= start && str.length <= end;
  }

  validateName(name: string): boolean {
    return !this.hasWhiteSpace(name) && this.hasOneLetter(name) && !this.hasSpecialCharacters(name);
  }

  validateLogin(login: string): boolean {
    return this.stringNumberToNumber(login, 3, 20) && !this.hasWhiteSpace(login) && this.hasOneLetter(login) && !this.hasSpecialCharacters(login);
  }

  validateEmail(email: string) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  }

  validatePassword(password: string) {
    return this.stringNumberToNumber(password, 8, 40) && this.hasOneUppercaseLetter(password) && this.hasOneNumber(password);
  }

  validatePhone(phone: string) {
    return this.stringNumberToNumber(phone, 10, 15);
  }

  validateMessage(message: string) {
    return message !== '';
  }

  validate(target) {
    if (target.required && !target.value) {
      target.dataset.noValidate = '';
    } else {
      delete target.dataset.noValidate;
    }
    if (target.name === 'first_name' || 'second_name') {
      if (this.validateName(target.value)) {
        delete target.dataset.noValidate;
      } else {
        target.dataset.noValidate = '';
      }
    }
    if (target.name === 'login') {
      if (this.validateLogin(target.value)) {
        delete target.dataset.noValidate;
      } else {
        target.dataset.noValidate = '';
      }
    }
    if (target.name === 'email') {
      if (this.validateEmail(target.value)) {
        delete target.dataset.noValidate;
      } else {
        target.dataset.noValidate = '';
      }
    }
    if (target.name === 'password') {
      if (this.validatePassword(target.value)) {
        delete target.dataset.noValidate;
      } else {
        target.dataset.noValidate = '';
      }
    }
    if (target.name === 'phone') {
      if (this.validatePhone(target.value)) {
        delete target.dataset.noValidate;
      } else {
        target.dataset.noValidate = '';
      }
    }
    if (target.name === 'message') {
      if (this.validateMessage(target.value)) {
        delete target.dataset.noValidate;
      } else {
        target.dataset.noValidate = '';
      }
    }
  }

  addEvents() {
    this._element.querySelectorAll('input').forEach((input: HTMLInputElement) => {
      input.addEventListener('blur', this._props.events.blur);
      input.addEventListener('focus', this._props.events.blur);
    });
    super.addEvents();
  }
}
