// useUserProfile.js
import { useState, useEffect } from 'react';

const useUserProfile = (authToken) => {
    const [userProfile, setUserProfile] = useState(null);
   
    useEffect(() => {
        const fetchUserProfileData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/user/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`
                    }
                });
                const data = await response.json();
                setUserProfile(data);
            } catch (error) {
                console.error('Error fetching user profile data:', error);
            }
        };

        if (authToken) {
            fetchUserProfileData();
        }
    }, [authToken]);

    return userProfile;
};

export default useUserProfile;
