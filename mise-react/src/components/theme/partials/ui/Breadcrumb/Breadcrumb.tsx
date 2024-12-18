import styles from './Breadcrumb.module.css';

export interface IBreadcrumb {
  title: string;
  link?: string;
}

export interface IBreadcrumbProps {
  breadcrumb: IBreadcrumb[];
  size?: 'small' | 'medium' | 'large';
  uppercase?: boolean;
}

export default function Breadcrumb(props: IBreadcrumbProps) {
  const { breadcrumb, uppercase, size } = props;

  return (
    <ul
      className={styles['ui-breadcrumb']}
      data-t-size={size}
      data-uppercase={uppercase ? "true" : undefined}
    >
      {breadcrumb.map((crumb, index) => (
        <li key={index} className={styles['ui-breadcrumb__link']}>
          {crumb.link
            ? (
              <a href={crumb.link}>{crumb.title}</a>
            )
            : (
              <span>{crumb.title}</span>
            )}
        </li>
      ))}
    </ul>
  );
}
