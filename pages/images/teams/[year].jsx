import fs from 'fs';
import path from 'path';
import classes from './year.module.css';

const RenderTeamImages = ({ imagePaths }) => {
  if (!imagePaths) {
    return <div>No team members images were found for this year.</div>;
  }

const getNamesFromFileName = (fileName) => {
  const [fullName, extension] = fileName.split('.');
  const [firstName, ...rest] = fullName.split('_');
  const lastName = rest.join('_');
  return { firstName, lastName };
};


  return (
    <div className={classes.teamImages}>
      {imagePaths.map((src, index) => {
        const { firstName, lastName } = getNamesFromFileName(path.basename(src));

        return (
          <div key={index}>
            <img src={src} alt={`Image ${index}`} width={200} height={200} />
            <div>
              <p>{firstName} {lastName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderTeamImages;

export async function getServerSideProps(context) {
  const { year } = context.params;

  const folderPath = path.join(process.cwd(), `public/images/teams/${year}`);

  try {
    const imageFiles = fs.readdirSync(folderPath);

    const imagePaths = imageFiles.map(fileName => `/images/teams/${year}/${fileName}`);

    return {
      props: {
        imagePaths,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        imagePaths: null,
      },
    };
  }
}
