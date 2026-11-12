export const CHECKOUT_URLS: {
  readonly marvelRivals: string;
  readonly cloudDma: string;
  readonly hwidSpoofer: string;
};

export const CHECKOUT_PATH_REDIRECTS: Map<string, string>;

export function resolveCheckoutPathRedirect(pathname: string): string | null;
