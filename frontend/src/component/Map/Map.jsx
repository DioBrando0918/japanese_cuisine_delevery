import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100%',
    height: '500px',
};

const center = {
    lat: 23.9835, // 草屯鎮的緯度
    lng: 120.6857, // 草屯鎮的經度
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAQUMOfixDrpdsT_90JfEU018x0clg0rMI', // 你的 API 金鑰
        libraries: ['places'], // 加載地理編碼服務
    });

    const [location, setLocation] = useState(null);
    const [destination, setDestination] = useState('');
    const [info, setInfo] = useState(null);
    const geocoder = useRef(null);

    // 初始化地理編碼服務
    const initGeocoder = useCallback(() => {
        geocoder.current = new window.google.maps.Geocoder();
    }, []);

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    const handleSearch = () => {
        if (!destination) return;

        if (!geocoder.current) {
            initGeocoder();
        }

        geocoder.current.geocode({ address: destination }, (results, status) => {
            if (status === window.google.maps.GeocoderStatus.OK) {
                setLocation({
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng(),
                });
                setInfo(results[0].formatted_address);
            } else {
                alert('地址搜尋失敗，請確認地址是否正確！');
            }
        });
    };

    if (loadError) return <div>地圖載入失敗</div>;
    if (!isLoaded) return <div>地圖載入中...</div>;

    return (
        <div>
            <h3>從草屯鎮導航</h3>
            <input
                type="text"
                placeholder="輸入目的地地址"
                value={destination}
                onChange={handleDestinationChange}
            />
            <button onClick={handleSearch}>搜尋地址</button>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={center}
                options={options}
            >
                {location && <Marker position={location} />}
                {info && (
                    <InfoWindow position={location}>
                        <div>{info}</div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
}
