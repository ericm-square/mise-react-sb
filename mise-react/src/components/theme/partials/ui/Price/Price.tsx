import IconInput from '../../macros/IconInput/IconInput';
import styles from './Price.module.css';

// TODO: Implement the format_price function here
export const formatPrice = (amount: number, currency: string) => `${currency} ${amount}`;

export interface IPriceProps {
  price: {
    regular_low: {
      amount: number;
      formatted: string;
    };
    low: {
      amount: number;
      formatted: string;
    };
    regular_high: {
      amount: number;
      formatted: string;
    };
    currency: string;
  };
  onSale?: boolean;
  unitSuffix?: string;
  size?: 'tiny' | 'small' | 'normal';
  variant?: 'standard' | 'sale';
  color?: string;
  weight?: 'light' | 'heavy';
  italic?: boolean;
  bold?: boolean;
  priceClasses?: string;
  formattedPrice?: {
    regular: {
      amount: number;
      formatted: string;
    };
    final: {
      amount: number;
      formatted: string;
    };
  };
}

export default function Price(props: IPriceProps) {
  const {
    price, onSale, unitSuffix, size, variant, color, weight, italic, bold, priceClasses, formattedPrice,
  } = props;

  const regularPrice = formattedPrice?.regular || price.regular_low;
  const finalPrice = formattedPrice?.final || price.low;
  const highPrice = price.regular_high;
  const isPriceRange = highPrice && (regularPrice.amount !== highPrice.amount);

  return (
    <div
      className={`${styles['ui-price']} ${priceClasses}`}
      data-t-size={size}
      data-t-variant={variant}
      style={{
        fontWeight: weight || (bold ? 'var(--theme-font-weight-heavy)' : 'var(--theme-font-weight-light)'),
        fontStyle: italic ? 'italic' : 'normal',
      }}
    >
      {onSale && (
        <div
          className={styles['ui-price__regular']}
        >
          {regularPrice.formatted}{isPriceRange && '+'}{unitSuffix && ` / ${unitSuffix}`}
        </div>
      )}
      <div
        className={styles['ui-price__final']}
        aria-live="polite"
        style={{ color }}
      >
        {onSale && variant === 'sale' && (
          <IconInput name="sell"
            height={`var(--ui-price-font-size-${size})`}
            width={`var(--ui-price-font-size-${size})`}
            color={color ? color : 'var(--theme-success-text)'}
          />
        )}
        {finalPrice.formatted}{isPriceRange && '+'}{unitSuffix && ` / ${unitSuffix}`}
      </div>
    </div>
  );
}
