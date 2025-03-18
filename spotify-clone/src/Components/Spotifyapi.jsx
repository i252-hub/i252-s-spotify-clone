import { useEffect } from "react";
import axios from "axios";

const FetchSpotifyData = () => {
    const Token = "AQBEXpMTPJwsIc1TnglLb_Lw7llJ7xEa7R9lgoUSQIKQdIUD_LaG2dXNiKfgGWE5M1vy6Y5Q6ZNT_-gp_msD2HfoIwVfg5u1k-66PWXLTHFhO896g4-ldiz9v4f2RIOgY1o"; 

    useEffect(() => {
        if (!Token) return;

        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.spotify.com/v1/me", {
                    headers: { Authorization: `Bearer ${Token}` }
                });
                console.log("User Data:", response.data); 
            } catch (error) {
                console.error("Error:", error.response.data);
            }
        };

        fetchData();
    }, [Token]);

    return null; 
};

export default FetchSpotifyData;
