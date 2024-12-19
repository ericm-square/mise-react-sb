import React from 'react';
import styles from './GoogleMap.module.css';

export interface IGoogleMapProps {
  id: string;
  mapConfig: {
    height?: string;
    lat: string;
    long: string;
  };
  themeStyles: {
    themeColors: {
      primary?: string;
      primary_contrast?: string;
    };
  };
}

export default function GoogleMap(props: IGoogleMapProps) {
  const { id, mapConfig, themeStyles } = props;
  const themeColors = themeStyles.themeColors;

  const pincolor = themeColors.primary ? themeColors.primary.replace('#', '') : '006aff';
  const pincontrastcolor = themeColors.primary_contrast ? themeColors.primary_contrast.replace('#', '') : 'ffffff';
  const googleMapConfig = { ...mapConfig, pincolor, pincontrastcolor };

  return (
    <iframe
      ref={(iframe) => iframe}
      id={id}
      src={embedMapUrl(googleMapConfig)}
      className={styles['ui-google-map']}
      data-allowtransparency="true"
      data-frameborder="0"
      data-scrolling="no"
      data-loading="lazy"
      width="100%"
      height={googleMapConfig.height || '230px'}
      onMessage={(event) => dispatchMapMarkerClick(event)}
    />
  );
}

function embedMapUrl(config: any): string {
  // Implement the logic to generate the map URL based on the config
  return `https://maps.google.com/?q=${config.lat},${config.long}&z=15&output=embed&pincolor=${config.pincolor}&pincontrastcolor=${config.pincontrastcolor}`;
}

function dispatchMapMarkerClick(event: any) {
  // Implement the logic to dispatch the map marker click event
  const customEvent = new CustomEvent('map-marker-click', { detail: event });
  window.dispatchEvent(customEvent);
}