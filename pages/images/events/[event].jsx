
import classes from './event.module.css'

const RenderEventImages = () => {


  return (
    <div className={classes.eventImages}>
      {imagePaths.map((src, index) => {
        return (
          <div key={index}>
            <img src={src} alt={`Image ${index}`} width={400} height={300} />
            <div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderEventImages;
