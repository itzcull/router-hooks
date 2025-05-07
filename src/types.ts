/**
 * The pathname, search, and hash values of a URL.
 */
export interface Path {
  /**
   * A URL pathname, beginning with a /.
   */
  pathname: string;
  /**
   * A URL search string, beginning with a ?.
   */
  search: string;
  /**
   * A URL fragment identifier, beginning with a #.
   */
  hash: string;
}

/**
 * Describes a location that is the destination of some navigation used in
 * {@link Link}, {@link useNavigate}, etc.
 */
export type To = string | Partial<Path>

export interface Location<State = any> extends Path {
  /**
   * A value of arbitrary data associated with this location.
   */
  state: State;
  /**
   * A unique string associated with this location. May be used to safely store
   * and retrieve data in some other storage API, like `localStorage`.
   *
   * Note: This value is always "default" on the initial location.
   */
  key: string;
}