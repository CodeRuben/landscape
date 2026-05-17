declare global {
  interface Window {
    goatcounter?: {
      no_onload?: boolean;
      count?: (opts: { path: string }) => void;
    };
  }
}

export {};
