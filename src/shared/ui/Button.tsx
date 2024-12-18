import styled, { css } from 'styled-components';

type Props = {
  $variation?: 'primary' | 'secondary' | 'danger' | 'confirm' | 'approve' | 'lock';
  $size?: 'small' | 'medium' | 'large';
};

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-600);
    }
  `,

  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,

  confirm: css`
    color: #fff;
    background-color: var(--color-green-700);

    &:hover {
      background-color: var(--color-green-600);
    }
  `,

  danger: css`
    color: #fee2e2;
    background-color: #b91c1c;

    &:hover {
      background-color: #991b1b;
    }
  `,

  approve: css`
    color: var(--color-brand-50);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-600);
    }
  `,

  reject: css`
    color: var(--color-brand-50);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-600);
    }
  `,

  lock: css`
    color: var(--color-brand-50);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-600);
    }
  `,
};

const Button = styled.button<Props>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.$size!]}
  ${(props) => variations[props.$variation!]}
`;

Button.defaultProps = {
  $variation: 'primary',
  $size: 'medium',
};

export default Button;
