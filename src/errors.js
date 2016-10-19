/**
 * Error subclass for errors coming from the language
 *
 * NOTE(joe): Due to babel limitations, this cannot yet use `class` syntax
 */
/* eslint-disable import/prefer-default-export */
export function LanguageError(errorComponent) {
  this.errorComponent = errorComponent;
}

LanguageError.prototype = Error.prototype;

/**
 * Error subclass for errors caused by the user. For example
 */
export function UserError(message) {
  this.message = message;
}

UserError.prototype = Error.prototype;

