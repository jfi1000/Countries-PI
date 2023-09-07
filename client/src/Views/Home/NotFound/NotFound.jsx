import image from '../../../image/404.png'

const NotFound = ()=>{
    return(
        <div>
            <img src={image} width="30%" alt="" />
            <h1>Country Not Found</h1> 
        </div>
    )
};

export default NotFound;