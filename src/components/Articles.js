import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Comments from './Comments';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const API_KEY = "0d310839fde24789bd3fb194e65483fc";
    useEffect(() => {
        (async _ => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
            setArticles(response.data.articles);

        })()
    }, [])
    return (
        <>
            
                    <div className='cards' >
                    {

                        articles.map((value, idx) => {
                            return (
                                <div key={idx} className="card" >
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image= {`${value.urlToImage}`}
                                            alt="green iguana"
                                        />
                                        <Typography gutterBottom variant="h5" component="div">
                                                {value.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {value.description}
                                        </Typography> 
                                        <Comments/>
                                </div>
                            );
                        })
                    }
                    </div>
                    
        </>
    );
}

export default Articles;
