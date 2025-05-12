/// <reference types="vite-plugin-svgr/client" />

declare module '*.png' {
  const url: string;
  export default url;
}
declare module '*.mp4' {
  const url: string;
  export default url;
}

declare module '*.css' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cssData: Record<string, any>;
  export default cssData;
}

declare module '*.scss' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cssData: Record<string, any>;
  export default cssData;
}

declare module '*.ttf' {
  const url: string;
  export default url;
}

declare module '*.csv' {
  const url: string;
  export default url;
}

declare module '*.mp3' {
  const url: string;
  export default url;
}
