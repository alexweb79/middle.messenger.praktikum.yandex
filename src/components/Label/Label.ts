import { Block, Props } from '../../services/Block';
import labelTmpl from './Label.tmpl';

/* eslint-disable no-useless-escape */
export class Label extends Block {

  render() {
    return this.compile(labelTmpl);
  }

  hasCirLetter(str: string) {
    return (/[а-яА-ЯЁё]/).test(str);
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

  hasSpecialCharactersWithPlus(str: string) {
    return (/[^\+?][ `!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/).test(str);
  }

  stringNumberToNumber(str: string, start: number, end: number) {
    return str.length >= start && str.length <= end;
  }

  validateName(name: string): boolean {
    return !this.hasWhiteSpace(name) && !this.hasNumbers(name) && !this.hasSpecialCharacters(name);
  }

  validateLogin(login: string): boolean {
    return this.stringNumberToNumber(login, 3, 20) && !this.hasWhiteSpace(login) && this.hasOneLetter(login) && !this.hasSpecialCharacters(login);
  }

  email(email: string) {
    return (/^[a-zA-Z\-0-9]+@+(([a-zA-Z\-]+[a-zA-Z]\.)+[a-zA-Z]{2,})$/).test(email);
  }

  validateEmail(email: string) {
    return this.email(email);
  }

  validatePassword(password: string) {
    return this.stringNumberToNumber(password, 8, 40) && this.hasOneUppercaseLetter(password) && this.hasOneNumber(password);
  }

  validatePhone(phone: string) {
    return this.hasNumbers(phone) && this.stringNumberToNumber(phone, 10, 15) && !this.hasLatLetters(phone) && !this.hasCirLetters(phone) && !this.hasSpecialCharactersWithPlus(phone);
  }

  validateMessage(message: string) {
    return message !== '';
  }

  validate(target: Props) {
    if (target.required && !target.value) {
      target.dataset.noValidate = '';
    } else {
      delete target.dataset.noValidate;
    }
    if (target.name === 'first_name' || target.name === 'second_name') {
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
      input.addEventListener('blur', (<Props>this)._props.events.blur);
      input.addEventListener('focus', (<Props>this)._props.events.blur);
      input.addEventListener('keypress', (<Props>this)._props.events.keypress);
    });
    super.addEvents();
  }

}
