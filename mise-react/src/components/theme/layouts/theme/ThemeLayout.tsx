
import styles from './ThemeLayout.module.css'

export interface IThemeLayoutProps {
    children?: React.ReactNode;
}

export default function ThemeLayout(props: IThemeLayoutProps) {
    const { children } = props;

    // TODO: Make these params
    const squareSiteLanguage = "en-US";
    const shouldShowHeader = true;
    const isMobile = true; // Replace with actual logic
    const isScrollingDisabled = false; // Replace with actual logic
    const isSiteHeaderVisible = true; // Replace with actual logic
    const isActionBarVisible = false; // Replace with actual logic
    const isFontsLoaded = true; // Replace with actual logic

    return (
        <html lang={squareSiteLanguage}>
            {/* TODO: <head> */}

            {/* TODO: "bodyStyles" */}
            {/* TODO: onWindowResize */}
            <body className={`
                ${shouldShowHeader ? styles['has-header-padding'] : ''}
                ${isMobile ? 'is-mobile' : ''}
                ${isScrollingDisabled ? 'is-scrolling-disabled' : ''}
                ${isSiteHeaderVisible ? 'is-site-header-visible' : ''}
                ${isActionBarVisible ? 'is-action-bar-visible' : ''}
                ${isFontsLoaded ? 'fonts--loaded' : ''}
            `}>

                {/* TODO: partials/helpers/snippets */}
                {/* TODO: partials/ui/dialog */}
                {/* TODO: partials/components/toasts */}
                

                    
            </body>
        

        <div>
            Theme Layout
        </div>

            {children}
        </html>
    );
}