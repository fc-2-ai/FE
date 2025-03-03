import { css, type CSSObject, type Interpolation } from 'styled-components';

export type Breakpoints = 'small' | 'medium' | 'large';

export const breakpoints: Record<Breakpoints, string> = {
  small: '@media (max-width: 639px)',
  medium: '@media (max-width: 1047px)',
  large: '@media (min-width: 1048px)',
};

const media = Object.entries(breakpoints).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  }),
  {} as Record<
    Breakpoints,
    (
      // eslint-disable-next-line no-unused-vars
      first: CSSObject | TemplateStringsArray,
      // eslint-disable-next-line no-unused-vars
      ...interpolations: Interpolation<object>[]
    ) => ReturnType<typeof css>
  >
);

export default media;
