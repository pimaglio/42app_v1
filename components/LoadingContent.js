import React from 'react'
import ContentLoader from 'react-content-loader'
import Svg from 'react-native-svg';
const { Circle, Rect } = Svg;


const LoaderContent = () => (
    <ContentLoader
        height={300}
        width={500}
        speed={2}
        primaryColor="#efefef"
        secondaryColor="#dad9d9"
    >
        <Rect x="0" y="8" rx="0" ry="0" width="40" height="18" />
        <Circle cx="492" cy="16" r="8" />
        <Circle cx="472" cy="16" r="8" />
        <Rect x="362" y="8" rx="7" ry="7" width="96" height="16" />

        <Rect x="0" y="39" rx="0" ry="0" width="34" height="8" />
        <Rect x="50" y="39" rx="0" ry="0" width="36" height="8" />
        <Rect x="102" y="39" rx="0" ry="0" width="34" height="8" />
        <Rect x="152" y="39" rx="0" ry="0" width="34" height="8" />
        <Rect x="202" y="39" rx="0" ry="0" width="36" height="8" />
        <Rect x="254" y="39" rx="0" ry="0" width="34" height="8" />
{/*
        <rect x="477" y="39" rx="0" ry="0" width="10" height="8" />

        <rect x="19" y="64" rx="0" ry="0" width="465" height="155" />

        <rect x="18" y="225" rx="0" ry="0" width="141" height="38" />
        <rect x="182" y="225" rx="0" ry="0" width="141" height="38" />
        <rect x="343" y="225" rx="0" ry="0" width="141" height="38" />
        <rect x="18" y="270" rx="0" ry="0" width="141" height="38" />
        <rect x="182" y="270" rx="0" ry="0" width="141" height="38" />
        <rect x="343" y="270" rx="0" ry="0" width="141" height="38" />*/}
    </ContentLoader>
);

export default LoaderContent
