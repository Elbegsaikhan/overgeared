import fs from 'fs'
import path, {dirname} from 'path';


const getAllDirectries = () => {
  const directoryPath = path.join(
    __dirname,
    `/overgeared`
  );

  try {
    return fs.readdirSync(directoryPath, {withFileTypes: true})
      .filter(dirent => dirent.isDirectory());
  } catch (err) {
    console.log(err);
    return err;
  }
};


export {getAllDirectries}