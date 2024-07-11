// astro.d.ts
import 'astro/client'; // Import the type definitions from astro/client

declare module 'astro/client' {
  export interface ClientDirective {
    [key: string]: unknown;
  }

  export interface AstroGlobal {
    directives: {
      client: ClientDirective;
    };
  }
}