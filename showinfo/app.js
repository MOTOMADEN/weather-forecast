body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
}

.midglass{
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 25%;
    height: 350px;
    padding: 20px;
    /* backdrop-filter: blur(8px); */
    background-color:rgba(0, 0, 0, 0.8) ;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    color: aliceblue;
}
.city{
    display: flex;
    flex-direction: column;
}
#city_name{
    z-index: 3;
    font-size: 50px;
    margin-top: -1px;
}
#provide_name{
    z-index: 3;
    font-size: 30px;
    margin-top: -20px;
    margin-left: 30px;
}
#temp{
    font-size: 35px;
    font-weight: bolder;
    margin-top: -1px;
}
#svg{
    z-index: 11;
    width: 50px;
    height: 50px;
}
h3{
    letter-spacing: 1px;
    font-weight: bolder;
    font-size: 23px;
}

@media (max-width : 950px) {
    #city_name{
        font-size: 40px;
    }
    #provide_name{
        font-size: 30px;
    }
    h3{
        width: 90%;
        font-size: 20px;
    }
    
}


@media (max-width : 800px) {
    #city_name{
        font-size: 30px;
    }
    #provide_name{
        font-size: 20px;
    }
    h3{
        width: 90%;
        font-size: 20px;
    }
    .midglass{
        height: 300px;
    }
    
}

@media (max-width : 400px) {
    #city_name{
        font-size: 25px;
    }
    #provide_name{
        font-size: 20px;
    }
    h3{
        width: 50%;
        font-size: 15px;
    }
    
}

@media (max-width : 350px) {
    #city_name{
        font-size: 20px;
    }
    #provide_name{
        font-size: 15px;
    }
    h3{
        width: 50%;
        font-size: 10px;
    }
    .midglass{
        height: 250px;
    }
    
}


@media (max-width : 250px) {
    #city_name{
        font-size: 18px;
    }
    #provide_name{
        font-size: 13px;
    }
    h3{
        width: 50%;
        font-size: 10px;
    }
    .midglass{
        height: 200px;
    }
    #temp{
        font-size: 10px;
    }
}
