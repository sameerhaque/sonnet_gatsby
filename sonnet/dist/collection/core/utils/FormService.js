import { FormAttributes } from '../../components/form/form-attributes.enum';
import { TemplateService } from './TemplateService';
import { StringUtils } from './StringUtils';
export class FormService {
    static process(event) {
        var _element = event.target;
        var _form = _element.form;
        var _value = this.getValue(_element);
        var _dataErrorParent = _form.querySelector('[' +
            FormAttributes.DATA_FOR_ATTRIBUTE_NAME +
            '=' +
            _element.id +
            ']');
        if (_dataErrorParent !== null) {
            var _dataErrorMessages = _dataErrorParent.querySelectorAll('[' + FormAttributes.DATA_ERROR_ATTRIBUTE_NAME + ']');
            var _activeDataError = null;
            var _context = TemplateService.generateContextForElement(_element);
            _dataErrorMessages.forEach((_dataError) => {
                if (_activeDataError == null) {
                    var regExValue = _dataError.getAttribute(FormAttributes.DATA_ERROR_ATTRIBUTE_NAME);
                    if (StringUtils.hasLength(regExValue)) {
                        if (StringUtils.isString(_value)) {
                            var regEx = new RegExp(regExValue);
                            var _result = regEx.test(_value);
                            if (_result) {
                                _activeDataError = _dataError;
                            }
                        }
                    }
                    if (_activeDataError == null) {
                        if (this.processDataAttribute(FormAttributes.DATA_SPECIAL_CHARACTERS_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, "^[a-zA-Z\\xc1\\xc0\\xc4\\xc2\\xe0\\xe2\\xe4\\xe1\\xc7\\xe7\\xc8\\xc9\\xca\\xcb\\xe8\\xe9\\xea\\xeb\\xce\\xcf\\xee\\xef\\xd4\\xf4\\xd9\\xdb\\xdc\\xf9\\xfb\\xfc\\xff .'-]+$", false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDataAttribute(FormAttributes.DATA_EMPTY_VALUE_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^(?!\\s*$).+', false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDataAttribute(FormAttributes.DATA_MIN_LENGTH_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^.{<%it.minlength%>,}$', false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDataAttribute(FormAttributes.DATA_MAX_LENGTH_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^.{0,<%it.maxlength%>}$', false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDataAttribute(FormAttributes.DATA_EMAIL_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{1,63}$', false)) {
                            _activeDataError = _dataError;
                        }
                        // "^((\+1)|1)? ?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})( ?(ext\.? ?|x)(\d*))?$"
                        // [0-9]{3}-[0-9]{3}-[0-9]{4}
                        if (this.processDataAttribute(FormAttributes.DATA_PHONE_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$', false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processEmailConfirmation(FormAttributes.DATA_EMAIL_CONFIRMATION_NAME, _context, _value, _dataError, _dataErrorParent)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDataAttribute(FormAttributes.DATA_DATE_FORMAT_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^(?:(?:(?:(?:0?[13578])|(1[02]))\\/31\\/(19|20)?\\d\\d)|(?:(?:(?:0?[13-9])|(?:1[0-2]))\\/(?:29|30)\\/(?:19|20)?\\d\\d)|(?:0?2\\/29\\/(?:19|20)(?:(?:[02468][048])|(?:[13579][26])))|(?:(?:(?:0?[1-9])|(?:1[0-2]))\\/(?:(?:0?[1-9])|(?:1\\d)|(?:2[0-8]))\\/(?:19|20)?\\d\\d))$', false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDataAttribute(FormAttributes.DATA_CURRENCY_FORMAT_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent, '^\\d+(?:\\.\\d{0,2})?$', false)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDatePastAttribute(FormAttributes.DATA_DATE_PAST_ATTRIBUTE_NAME, _context, _value, _dataError, _dataErrorParent)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDatePreceedAttribute(FormAttributes.DATA_DATE_PRECEEDS_ONE_YEAR, _context, _value, _dataError, _dataErrorParent, _form)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDateExceedAttribute(FormAttributes.DATA_DATE_EXCEEDS, _context, _value, _dataError, _dataErrorParent, _form)) {
                            _activeDataError = _dataError;
                        }
                        if (this.processDateExceedOneYearTodayAttribute(FormAttributes.DATA_DATE_EXCEEDS_ONE_YEAR_TODAY, _context, _value, _dataError, _dataErrorParent)) {
                            _activeDataError = _dataError;
                        }
                    }
                }
            });
        }
        if (_dataErrorParent !== null) {
            var _errorMessageNode = this.getErrorMessageNode(_dataErrorParent);
            if (_activeDataError !== null) {
                _errorMessageNode.classList.remove('hidden');
                _errorMessageNode.removeAttribute('aria-hidden');
                _errorMessageNode.textContent = TemplateService.process(_activeDataError.textContent, _context);
                return false;
            }
            else {
                _errorMessageNode.classList.add('hidden');
            }
        }
        return true;
    }
    static getValue(element) {
        if (element.tagName === 'INPUT') {
            return element.value;
        }
        else if (element.tagName === 'TEXTAREA') {
            return element.value;
        }
        else if (element.tagName === 'SELECT') {
            return element.options[element.selectedIndex].value;
        }
        throw 'Unsupported element type ' + element.tagNames;
    }
    static processDataAttribute(attributeName, context, value, dataError, dataErrorParent, dataPattern, isDataPatternMatch) {
        if (dataError.hasAttribute(attributeName)) {
            if (dataPattern == null) {
                this.setErrorMessage(dataError, context, dataErrorParent);
                return true;
            }
            else if (StringUtils.notEmpty(dataPattern)) {
                var regEx = new RegExp(TemplateService.process(dataPattern, context));
                if (value !== null) {
                    var _result = regEx.test(value);
                    if ((isDataPatternMatch && _result) ||
                        (!isDataPatternMatch && !_result)) {
                        this.setErrorMessage(dataError, context, dataErrorParent);
                        return true;
                    }
                }
            }
        }
        return false;
    }
    static processEmailConfirmation(attributeName, context, value, dataError, dataErrorParent) {
        if (dataError.hasAttribute(attributeName)) {
            const emailElement = (document.getElementById(context.dataEmailId));
            if (emailElement && emailElement.value !== value) {
                this.setErrorMessage(dataError, context, dataErrorParent);
                return true;
            }
        }
        return false;
    }
    static processDatePastAttribute(attributeName, context, value, dataError, dataErrorParent) {
        if (dataError.hasAttribute(attributeName)) {
            const today = new Date();
            const beginningOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const dateValue = new Date(value);
            if (dateValue.getTime() < beginningOfDay.getTime()) {
                this.setErrorMessage(dataError, context, dataErrorParent);
                return true;
            }
        }
        return false;
    }
    static processDateExceedAttribute(attributeName, context, value, dataError, dataErrorParent, form) {
        if (dataError.hasAttribute(attributeName)) {
            var dateInput = form.querySelector('[' +
                FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
                '=' +
                context.dataExceeds +
                ']');
            if (!dateInput) {
                return false;
            }
            const dateString = this.getValue(dateInput);
            if (StringUtils.isEmpty(dateString)) {
                return false;
            }
            const compareDate = new Date(dateString);
            const dateValue = new Date(value);
            if (dateValue.getTime() > compareDate.getTime()) {
                this.setErrorMessage(dataError, context, dataErrorParent);
                return true;
            }
        }
        return false;
    }
    static processDateExceedOneYearTodayAttribute(attributeName, context, value, dataError, dataErrorParent) {
        if (dataError.hasAttribute(attributeName)) {
            const today = new Date();
            const oneYearFromToday = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
            const dateValue = new Date(value);
            if (dateValue.getTime() > oneYearFromToday.getTime()) {
                this.setErrorMessage(dataError, context, dataErrorParent);
                return true;
            }
        }
        return false;
    }
    static processDatePreceedAttribute(attributeName, context, value, dataError, dataErrorParent, form) {
        if (dataError.hasAttribute(attributeName)) {
            var dateInput = form.querySelector('[' +
                FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
                '=' +
                context.dataPreceeds +
                ']');
            if (!dateInput) {
                return false;
            }
            const futureDateString = this.getValue(dateInput);
            if (StringUtils.isEmpty(futureDateString)) {
                return false;
            }
            const futureDate = new Date(futureDateString);
            const dateValue = new Date(value);
            const daysDifference = Math.floor((futureDate.getTime() - dateValue.getTime()) /
                (1000 * 60 * 60 * 24));
            if (daysDifference > 365) {
                this.setErrorMessage(dataError, context, dataErrorParent);
                return true;
            }
        }
        return false;
    }
    static setErrorMessage(dataErrorElement, context, dataErrorParent) {
        var _errorMessageNode = this.getErrorMessageNode(dataErrorParent);
        _errorMessageNode.textContent = TemplateService.process(dataErrorElement.textContent, context);
        if (dataErrorElement.hasAttribute(FormAttributes.DATA_ARIA_TEXT_ATTRIBUTE_NAME)) {
            _errorMessageNode.setAttribute('aria-text', TemplateService.process(dataErrorElement.getAttribute(FormAttributes.DATA_ARIA_TEXT_ATTRIBUTE_NAME), context));
        }
        else {
            _errorMessageNode.removeAttribute(FormAttributes.DATA_ARIA_TEXT_ATTRIBUTE_NAME);
        }
    }
    static getErrorMessageNode(dataErrorParent) {
        var _dataErrorMessageNode = dataErrorParent.querySelector('[' + FormAttributes.DATA_ERROR_MESSAGE_ATTRIBUTE_NAME + ']');
        if (_dataErrorMessageNode == null) {
            _dataErrorMessageNode = dataErrorParent.querySelector('[' + FormAttributes.DATA_ERROR_ATTRIBUTE_NAME + ']');
            _dataErrorMessageNode = document.createElement(_dataErrorMessageNode.tagName);
            _dataErrorMessageNode.setAttribute(FormAttributes.DATA_ERROR_MESSAGE_ATTRIBUTE_NAME, '');
            _dataErrorMessageNode.setAttribute('class', 'hidden');
            _dataErrorMessageNode.setAttribute('aria-hidden', 'true');
            dataErrorParent.appendChild(_dataErrorMessageNode);
        }
        _dataErrorMessageNode.setAttribute('class', 'error-message');
        return _dataErrorMessageNode;
    }
}
