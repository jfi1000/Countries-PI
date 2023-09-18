import image from '../../../image/404.png'

const NotFound = ()=>{
    return(
        <div>
            <h1>Country Not Found</h1> 
            <img src={image} width="30%" alt="" />
        </div>
    )
};

export default NotFound;