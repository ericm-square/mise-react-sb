import React from 'react';
import styles from './GoogleMap.module.css';

interface IMapConfig {
  height?: string;
  lat: string | number;
  long: string | number;
  pincolor?: string;
  pincontrastcolor?: string;
};

export interface IGoogleMapProps {
  id?: string;
  mapConfig: IMapConfig;
  onMapMarkerClick?: () => void;
}

export default function GoogleMap(props: IGoogleMapProps) {
  const { id, mapConfig } = props;
  const themeColors = {
    primary: mapConfig.pincolor,
    primary_contrast: mapConfig.pincontrastcolor,
  };

  const pincolor = themeColors.primary ? themeColors.primary.replace('#', '') : '006aff';
  const pincontrastcolor = themeColors.primary_contrast ? themeColors.primary_contrast.replace('#', '') : 'ffffff';
  const googleMapConfig = { ...mapConfig, pincolor, pincontrastcolor };

  return (
    <iframe
      id={id}
      src={embedMapUrl(googleMapConfig)}
      className={styles['ui-google-map']}
      data-allowtransparency="true"
      data-frameborder="0"
      data-scrolling="no"
      data-loading="lazy"
      width="100%"
      height={googleMapConfig.height || '230px'}
    />

  );
}

function embedMapUrl(config: IMapConfig): string {
  return `https://maps.google.com/?q=${config.lat},${config.long}&z=15&output=embed&pincolor=${config.pincolor}&pincontrastcolor=${config.pincontrastcolor}`;
}