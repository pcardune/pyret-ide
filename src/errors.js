/**
 * Error subclass for errors coming from the language
 *
 * NOTE(joe): Due to babel limitations, this cannot yet use `class` syntax
 */
export function LanguageError(errorComponent) {
  this.errorComponent = errorComponent;
}

LanguageError.prototype = Error.prototype;


